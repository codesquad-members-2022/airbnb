//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import Metal

protocol CalendarPickerDelegate {
    func didChangeSection(_ range: ClosedRange<Int>)
    func didChangeSelection(_ daySelection: DaySelection)
}

struct CalendarPicker {
    
    private var months: [Month]
    
    var daySelection: DaySelection = (nil, nil) {
        didSet {
            delegate?.didChangeSelection(daySelection)
        }
    }
    
    var delegate: CalendarPickerDelegate?
    var dayDict = [Day: (Int, Int)]()
    
    var didSelectDate: ((DaySelection) -> Void)?
    var didUpdateMonth: ((ClosedRange<Int>) -> Void)?
    
    init(baseDate: Date, numOfMonths: Int, calendar: Calendar = Calendar.current) {
        
        let firstMonth = Month(baseDate: baseDate)
        
        let afterMonths: [Month] = (1..<numOfMonths).map { offset in
            let firstDayOfMonthAfter = calendar.getFirstDayOfMonthAfter(for: baseDate, offsetBy: offset)
            return Month(baseDate: firstDayOfMonthAfter)
        }
        
        self.months = [firstMonth] + afterMonths
        self.dayDict = getDayDict(months: self.months)
    }
    
    private func getDayDict(months: [Month]) -> [Day: (Int, Int)] {
        var dayDict = [Day: (Int, Int)]()
        
        for m in 0..<months.count {
            for d in 0..<months[m].days.count {
                dayDict[months[m].days[d]] = (m,d)
            }
        }
        return dayDict
    }
    
    var monthCount: Int {
        return months.count
    }
    
    func getMonth(monthSection: Int) -> Month {
        return months[monthSection]
    }
    
    func dayCount(monthSection: Int) -> Int {
        return months[monthSection].days.count
    }
    
    func getDay(monthSection: Int, dayItem: Int) -> Day {
        return months[monthSection].days[dayItem]
    }
    
    mutating func select(newMonthSection: Int, newDayItem: Int) {
        let selectedDay = getDay(monthSection: newMonthSection, dayItem: newDayItem)
        
        // 전달에 속한 날짜나 이미 지난 날짜는 선택 불가
        if selectedDay.isWithinLastMonth || selectedDay.isPast {
            return
        }
        
        switch daySelection {
        case (nil, nil):
            
            self.daySelection = DaySelection(selectedDay, nil)
            didSelectDate?(daySelection)
            
            // 새로운 날짜를 On
            toggleSelection(of: selectedDay)
            
            // 새로운 날짜의 월 섹션을 업데이트
            guard let updatedRange = getUpdatedSectionRange(days: [selectedDay]) else {
                return
            }
            delegate?.didChangeSection(updatedRange)
            
        case (.some(let oldCheckIn), nil) where oldCheckIn.date < selectedDay.date:
            
            self.daySelection.checkOut = selectedDay
            didSelectDate?(daySelection)
            
            // 새로운 날짜를 On
            toggleSelection(of: selectedDay)
            
            // 새로운 날짜 월 섹션, 기존 월 섹션을 업데이트
            guard let updatedRange = getUpdatedSectionRange(days: [oldCheckIn, selectedDay]) else {
                return
            }
            delegate?.didChangeSection(updatedRange)
            
            // TODO: 선택 범위 사이에 있는 날짜 표시
            
        case (.some(let oldCheckIn), nil) where oldCheckIn.date >= selectedDay.date:
            
            self.daySelection.checkIn = selectedDay
            didSelectDate?(daySelection)
            
            // 새로운 날짜를 On
            toggleSelection(of: selectedDay)
            
            // 기존의 날짜를 Off
            toggleSelection(of: oldCheckIn)
            
            // 새로운 날짜 월 섹션, 기존 월 섹션 범위를 업데이트
            guard let updatedRange = getUpdatedSectionRange(days: [oldCheckIn, selectedDay]) else {
                return
            }
            delegate?.didChangeSection(updatedRange)
            
        case (.some(let oldCheckIn), .some(let oldCheckOut)):
            // 시작, 도착 날짜가 모두 선택된 상태였을 경우
            self.daySelection.checkOut = nil
            self.daySelection.checkIn = selectedDay
            didSelectDate?(daySelection)
            
            // 기존 출발 날짜 Off
            toggleSelection(of: oldCheckIn)
            
            // 기존 도착날짜 Off
            toggleSelection(of: oldCheckOut)
            
            // 새로운 선택 날짜 On
            toggleSelection(monthSection: newMonthSection, dayItem: newDayItem)
            
            // 기존 출발 월, 기존 도착 월, 새로운 출발 월 섹션의 범위를 업데이트
            guard let updatedRange = getUpdatedSectionRange(days: [oldCheckIn, oldCheckOut, selectedDay]) else {
                return
            }
            
            delegate?.didChangeSection(updatedRange)
            
            // TODO: 선택 범위 사이에 있는 날짜 표시 제거
            
        default:
            return
        }
        
    }
    
    private func getUpdatedSectionRange(days: [Day]) -> ClosedRange<Int>? {
        if days.isEmpty { return nil }
        
        let updatedSections: [Int] = days.map {
            let (m, _) = dayDict[$0]!
            return m
        }
        
        guard let min = updatedSections.min(), let max = updatedSections.max() else {
            return nil
        }
        
        return min...max
    }
    
    private mutating func toggleBetweenSelection(from: Day, to: Day) {
        // ...
    }
    
    
    private mutating func toggleSelection(of day: Day) {
        let (m, d) = dayDict[day]!
        toggleSelection(monthSection: m, dayItem: d)
    }
    
    private mutating func toggleSelection(monthSection: Int, dayItem: Int) {
        months[monthSection].days[dayItem].isSelected.toggle()
    }
    
    private mutating func deselect(date: Date) {
        for i in 0..<monthCount {
            if let index = months[i].days.firstIndex(where: { $0.date == date })  {
                months[i].days[index].isSelected = false
            }
        }
    }
}

enum CalendarPickerError: Error {
    case metadataGeneration
    case offsetMonthGeneration
}
