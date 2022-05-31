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
        var numberOfDays: Int
        let firstDay: Date
        let firstDayWeekday: Int
        let days: [Day]

        init(baseDate: Date) {
            let numberOfDaysInMonth = CalendarPicker.KRCalendar.getNumberOfDaysInMonth(for: baseDate)
            let firstDayOfMonth = CalendarPicker.KRCalendar.getFirstDayOfMonth(for: baseDate)
            let firstDayWeekday = CalendarPicker.KRCalendar.getWeekDay(of: firstDayOfMonth)

            self.numberOfDays = numberOfDaysInMonth
            self.firstDay = firstDayOfMonth
            self.firstDayWeekday = firstDayWeekday

            let daysOfLastMonth: [Day] = (1..<firstDayWeekday).reversed().map { offset in
                let date = CalendarPicker.KRCalendar.getNextDay(for: firstDayOfMonth, offsetBy: -offset) ?? firstDayOfMonth
                return Day(date: date, isSelected: false, isPast: true, isHidden: true)
            }

            let days: [Day] = (0..<numberOfDays).map { offset in
                let date = CalendarPicker.KRCalendar.getNextDay(for: firstDayOfMonth, offsetBy: offset) ?? firstDayOfMonth
                let isPast = date < baseDate
                return Day(date: date, isSelected: false, isPast: isPast, isHidden: false)
            }

            self.days = daysOfLastMonth + days
        }
    }

    struct Day {
        let date: Date
        let isSelected: Bool
        let isPast: Bool
        let isHidden: Bool
    }
}
