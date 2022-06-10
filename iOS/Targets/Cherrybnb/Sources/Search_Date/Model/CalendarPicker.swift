//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import Metal

typealias DaySelection = (checkIn: Day?, checkOut: Day?)

struct CalendarPicker {

    private var months: [Month]

    var daySelection: DaySelection = (nil, nil) {
        didSet {
            didSelectDate?(daySelection)
        }
    }
    var didSelectDate: ((DaySelection) -> Void)?

    var didUpdateMonth: ((ClosedRange<Int>) -> Void)?

    typealias CalendarPosition = (monthIndex: Int, dayIndex: Int)
    var datePositions = [Date: CalendarPosition]()

    init(baseDate: Date, numOfMonths: Int, calendar: Calendar = Calendar.current) {
        self.months = CalendarFactory.makeMonths(baseDate: baseDate, numOfMonths: numOfMonths, calendar: calendar)
        self.datePositions = getDatePositions(months: self.months)
    }

    private func getDatePositions(months: [Month]) -> [Date: (Int, Int)] {
        var datePosition = [Date: CalendarPosition]()

        for m in 0..<months.count {
            for d in months[m].firstDayWeekday-1..<months[m].days.count {
                datePosition[months[m].days[d].date] = (m, d)
            }
        }
        return datePosition
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

    mutating func deselectAll() {
        switch (daySelection.checkIn, daySelection.checkOut) {
        case (.some(let checkIn), .some(let checkOut)):
            toggleSelection(of: checkIn)
            toggleSelection(of: checkOut)
            toggleBetweenSelection(from: checkIn, to: checkOut)
            updateSections(including: [checkIn, checkOut])

        case (.some(let checkIn), nil):
            toggleSelection(of: checkIn)
            updateSections(including: [checkIn])

        default:
            break
        }

        daySelection = (nil, nil)
    }

    mutating func select(newMonthSection: Int, newDayItem: Int) {
        let selectedDay = getDay(monthSection: newMonthSection, dayItem: newDayItem)

        // 전달에 속한 날짜나 이미 지난 날짜는 선택 불가
        guard selectedDay.isWithinMonth else { return }
        if selectedDay.isPast { return }

        switch daySelection {
        case (nil, nil):

            self.daySelection = DaySelection(selectedDay, nil)
            didSelectDate?(daySelection)

            // 새로운 날짜를 On
            toggleSelection(of: selectedDay)

            // 새로운 출발일 포함 섹션의 범위를 업데이트
            updateSections(including: [selectedDay])

        case (.some(let oldCheckIn), nil) where oldCheckIn.date < selectedDay.date:

            self.daySelection.checkOut = selectedDay
            didSelectDate?(daySelection)

            // 새로운 날짜를 On
            toggleSelection(of: selectedDay)

            // 두 날짜 사이의 Between 셀렉션 on
            toggleBetweenSelection(from: oldCheckIn, to: selectedDay)

            // 새로운 날짜 월 섹션, 기존 월 섹션을 업데이트
            updateSections(including: [oldCheckIn, selectedDay])

        case (.some(let oldCheckIn), nil) where oldCheckIn.date >= selectedDay.date:

            self.daySelection.checkIn = selectedDay
            didSelectDate?(daySelection)

            // 새로운 날짜를 On
            toggleSelection(of: selectedDay)

            // 기존의 날짜를 Off
            toggleSelection(of: oldCheckIn)

            // 기존 출발, 새로운 출발일 포함 섹션의 범위를 업데이트
            updateSections(including: [oldCheckIn, selectedDay])

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

            // 두 날짜 사이의 Between 셀렉션 off
            toggleBetweenSelection(from: oldCheckIn, to: oldCheckOut)

            // 기존 출발일, 기존 도착일, 새로운 출발일 포함 섹션의 범위를 업데이트
            updateSections(including: [oldCheckIn, oldCheckOut, selectedDay])
        default:
            return
        }

    }

    private func updateSections(including days: [Day]) {
        if days.isEmpty { return }

        let tobeUpdated: [Int] = days.compactMap {
            guard let (m, _) = datePositions[$0.date] else { return nil }
            return m
        }

        guard let min = tobeUpdated.min(), let max = tobeUpdated.max() else {
            return
        }

        didUpdateMonth?(min...max)
    }

    private mutating func toggleBetweenSelection(from: Day, to: Day) {
        // 시작과 끝의 위치를 구한다.
        guard let (beginningMonth, beginngDay) = datePositions[from.date], let (endingMonth, endingDay) = datePositions[to.date] else {
            return
        }

        if beginningMonth == endingMonth {
            // 시작과 끝의 먼스가 같다면 시작 날짜부터 끝 날짜까지 바꿔준다.
            toggleBetweenSelection(monthsIndex: beginningMonth) { beginngDay <= $0 && $0 <= endingDay }
        } else {
            // 시작과 끝의 월이 다르다면, 다음에 대해 isBetweenSelection을 바꿔준다.

            // 1) 시작 날짜부터 시작 월의 끝
            toggleBetweenSelection(monthsIndex: beginningMonth) { $0 >= beginngDay }

            // 2) 시작 월과 끝 월 사이의 월 모두
            (beginningMonth+1..<endingMonth).forEach { monthIndex in
                toggleBetweenSelection(monthsIndex: monthIndex, where: { _ in true })
            }

            // 3) 마지막 월의 시작부터 마지막 날짜
            toggleBetweenSelection(monthsIndex: endingMonth) { $0 <= endingDay }
        }
    }

    private mutating func toggleBetweenSelection(monthsIndex: Int, where shouldToggle: (Int) -> Bool) {
        let newDays: [Day] = months[monthsIndex].days.enumerated().map { (i, day) in
            var day = day
            if shouldToggle(i) { day.isBetweenSelection.toggle() }
            return day
        }
        months[monthsIndex].days = newDays
    }

    private mutating func toggleSelection(of day: Day) {
        let (m, d) = datePositions[day.date]!
        toggleSelection(monthSection: m, dayItem: d)
    }

    private mutating func toggleSelection(monthSection: Int, dayItem: Int) {
        months[monthSection].days[dayItem].isSelected.toggle()
    }
}
