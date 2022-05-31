//
//  Month.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/30.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

extension CalendarPicker {
    struct Month {
        var numberOfNonEmptyDays: Int
        let firstDay: Date
        let firstDayWeekday: Int
        let days: [Day]

        init(baseDate: Date) {
            let numberOfDaysInMonth = CalendarPicker.KRCalendar.getNumberOfDaysInMonth(for: baseDate)
            let firstDayOfMonth = CalendarPicker.KRCalendar.getFirstDayOfMonth(for: baseDate)
            let firstDayWeekday = CalendarPicker.KRCalendar.getWeekDay(of: firstDayOfMonth)

            self.numberOfNonEmptyDays = numberOfDaysInMonth
            self.firstDay = firstDayOfMonth
            self.firstDayWeekday = firstDayWeekday

            let emptyDays = (1..<firstDayWeekday).map { _ in
                return Day(date: nil, isSelected: false, isPast: nil)
            }

            let days: [Day] = (0..<numberOfNonEmptyDays).map { offset in
                let date = CalendarPicker.KRCalendar.getNextDay(for: firstDayOfMonth, offset: offset) ?? firstDayOfMonth
                let isPast = date < baseDate
                return Day(date: date, isSelected: false, isPast: isPast)
            }

            self.days = emptyDays + days
        }
    }

    struct Day {
        // Day가 나타내는 시점(일)
        let date: Date?

        // Calendar에서 선택되었는지 여부
        let isSelected: Bool?

        // 현재 이전 날짜인지 여부
        let isPast: Bool?
    }
}
