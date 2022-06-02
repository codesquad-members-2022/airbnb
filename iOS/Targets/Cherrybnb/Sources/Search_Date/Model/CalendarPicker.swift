//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct CalendarPicker {
    
    private var months: [Month]
    
    var didSelectDate: ((DateSelection) -> Void)?
    var dateSelection: DateSelection? {
        didSet {
            guard let dateSelection = dateSelection else { return }
            didSelectDate?(dateSelection)
        }
    }
    
    let calendar: Calendar
    
    init(baseDate: Date, numOfMonths: Int, calendar: Calendar = Calendar.current, didSelectDate: ((DateSelection) -> Void)? = nil) {
        
        let firstMonth = Month(baseDate: baseDate)
        
        let afterMonths: [Month] = (1..<numOfMonths).map { offset in
            let firstDayOfMonthAfter = calendar.getFirstDayOfMonthAfter(for: baseDate, offsetBy: offset)
            return Month(baseDate: firstDayOfMonthAfter)
        }
        
        self.calendar = calendar
        self.months = [firstMonth] + afterMonths
        self.didSelectDate = didSelectDate
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
    
    mutating func select(monthSection: Int, dayItem: Int) {
        let selectedDay = getDay(monthSection: monthSection, dayItem: dayItem)
        
        if selectedDay.isWithinLastMonth || selectedDay.isPast {
            return
        }
        
        // 선택된 날짜가 아예 없는 상태였을 경우
        guard let dateSelection = dateSelection else {
            let newSelection = DateSelection(selectedDay.date, nil)
            self.dateSelection = newSelection
            return
        }
        
        switch dateSelection {
        case (let start, nil):
            // 시작 날짜만 선택된 상태였을 경우
            if start < calendar.startOfDay(for: selectedDay.date) {
                self.dateSelection?.checkOut = selectedDay.date
            } else {
                self.dateSelection?.checkIn = selectedDay.date
            }
        case (_, _):
            // 시작, 도착 날짜가 모두 선택된 상태였을 경우
            self.dateSelection?.checkIn = selectedDay.date
            self.dateSelection?.checkOut = nil
        }
    }
}

extension CalendarPicker {
    static let KRCalendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.locale = Locale(identifier: "ko_kr")
        calendar.timeZone = TimeZone(abbreviation: "KST") ?? TimeZone.current
        return calendar
    }()
}

enum CalendarPickerError: Error {
    case metadataGeneration
    case offsetMonthGeneration
}
