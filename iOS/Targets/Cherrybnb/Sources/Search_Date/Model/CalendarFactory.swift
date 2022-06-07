//
//  CalendarFactory.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/06/06.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

enum CalendarFactory {
    static func makeDaysWithinLastMonth(baseDate: Date, calendar: Calendar = Calendar.current) -> [Day] {
        let firstDayOfMonth = calendar.getFirstDayOfMonth(for: baseDate)
        let firstDayWeekday = calendar.getWeekDay(of: firstDayOfMonth)

        return (1..<firstDayWeekday).reversed().map { offset in
            let date = calendar.getNextDay(for: firstDayOfMonth, offsetBy: -offset) ?? firstDayOfMonth
            return Day(date: date, isSelected: false, isBetweenSelection: false, isPast: true, isWithinMonth: false)
        }
    }

    static func makeDaysOfMonth(baseDate: Date, calendar: Calendar = Calendar.current) -> [Day] {
        let firstDayOfMonth = calendar.getFirstDayOfMonth(for: baseDate)
        let numberOfDaysInMonth = calendar.getNumberOfDaysInMonth(for: baseDate)

        let dates = (0..<numberOfDaysInMonth).map { offset in
            return calendar.getNextDay(for: firstDayOfMonth, offsetBy: offset) ?? firstDayOfMonth }

        return dates.map { date in
            let isPast = date < calendar.startOfDay(for: baseDate)

            return Day(date: date, isSelected: false, isBetweenSelection: false, isPast: isPast, isWithinMonth: true)
        }
    }

    static func makeDaysWithinNextMonth(baseDate: Date, calendar: Calendar = Calendar.current) -> [Day] {
        let lastDayOfMonth = calendar.getLastDayOfMonth(for: baseDate)
        let lastDayWeekDay = calendar.getWeekDay(of: lastDayOfMonth)

        if lastDayWeekDay == 7 { return [] }

        return (1...7-lastDayWeekDay).map { offset in
            let date = calendar.getNextDay(for: lastDayOfMonth, offsetBy: offset) ?? lastDayOfMonth
            return Day(date: date, isSelected: false, isBetweenSelection: false, isPast: false, isWithinMonth: false)
        }
    }

    static func makeTotalDaysOfMonth(baseDate: Date, calendar: Calendar = Calendar.current) -> [Day] {
        let daysWithinLastMonth = makeDaysWithinLastMonth(baseDate: baseDate, calendar: calendar)
        let daysOfMonth = makeDaysOfMonth(baseDate: baseDate, calendar: calendar)
        let daysWithinNextMonth = makeDaysWithinNextMonth(baseDate: baseDate, calendar: calendar)
        return daysWithinLastMonth + daysOfMonth + daysWithinNextMonth
    }

    static func makeMonths(baseDate: Date, numOfMonths: Int, calendar: Calendar = Calendar.current) -> [Month] {
        let firstMonth = Month(baseDate: baseDate, days: makeTotalDaysOfMonth(baseDate: baseDate, calendar: calendar), calendar: calendar)

        let afterMonths: [Month] = (1..<numOfMonths).map { offset in
            let firstDayOfMonthAfter = calendar.getFirstDayOfMonthAfter(for: baseDate, offsetBy: offset)
            let totalDays = makeTotalDaysOfMonth(baseDate: firstDayOfMonthAfter, calendar: calendar)
            return Month(baseDate: firstDayOfMonthAfter, days: totalDays, calendar: calendar)
        }

        return [firstMonth] + afterMonths
    }
}
