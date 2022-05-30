//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

enum CalendarError: Error {
    case metadataGeneration
    case offsetMonthGeneration
}

struct CalendarPresenter {
    let calendar = Calendar(identifier: .gregorian)

    var selectedDate: Date?
    
    private var days: [Day]?
    
    var dayCount: Int? {
        days?.count
    }
    
    subscript(_ index: Int) -> Day? {
        guard let days = days, (0..<days.count).contains(index) else { return nil }
        return days[index]
    }
    

    // 기준일로부터 offset만큼 떨어진 달의 Day를 return.
    mutating func setDays(for basedate: Date, monthsAfter: Int) throws {
        guard let firstDayOfMonth = calendar.getFirstDayOfMonth(for: basedate),
              let firstDayOfMonthsAfter = calendar.getNextMonth(for: firstDayOfMonth, offset: monthsAfter) else {
            throw CalendarError.offsetMonthGeneration
        }

        try setDays(for: firstDayOfMonthsAfter)
    }

    // 기준일이 속한 달의 Day를 return.
    mutating func setDays(for basedate: Date) throws {
        guard let metadata = try? monthMetadata(for: basedate) else {
            throw CalendarError.offsetMonthGeneration
        }

        self.days = (0..<metadata.numberOfDays).map { offset in
            let date = calendar.getNextDay(for: basedate, offset: offset) ?? basedate
            let isSelected = date == selectedDate
            let isPast = date < basedate

            return Day(date: date, isSelected: isSelected, isPast: isPast)
        }
    }

    private func monthMetadata(for basedate: Date) throws -> MonthMetaData {
        guard let numberOfDaysInMonth = calendar.getNumberOfDaysInMonth(for: basedate),
              let firstDayOfMonth = calendar.getFirstDayOfMonth(for: basedate) else {
            throw CalendarError.metadataGeneration
        }

        let weekDayOfFirstDay = calendar.getWeekDay(of: firstDayOfMonth)

        return MonthMetaData(numberOfDays: numberOfDaysInMonth,
                             firstDay: firstDayOfMonth,
                             firstDayWeekday: weekDayOfFirstDay)
    }
}

struct MonthCreator {
    let calendar = Calendar(identifier: .gregorian)

    func createMonth(for basedate: Date, monthOffset: Int) -> Month? {
        guard let firstDayOfMonth = calendar.getFirstDayOfMonth(for: basedate),
              let firstDayOfMonthsAfter = calendar.getNextMonth(for: firstDayOfMonth, offset: monthOffset)  else {
            print(CalendarError.offsetMonthGeneration)
            return nil
        }
        return Month(date: firstDayOfMonthsAfter)
    }
}

extension Calendar {
    func getNumberOfDaysInMonth(for basedate: Date) -> Int? {
        return range(of: .day, in: .month, for: basedate)?.count
    }

    func getFirstDayOfMonth(for basedate: Date) -> Date? {
        return date(from: dateComponents([.year, .month], from: basedate))
    }

    func getNextMonth(for basedate: Date, offset: Int) -> Date? {
        return date(byAdding: .month, value: offset, to: basedate)
    }

    func getNextDay(for basedate: Date, offset: Int) -> Date? {
        return date(byAdding: .day, value: offset, to: basedate)
    }

    func getWeekDay(of date: Date) -> Int {
        return component(.weekday, from: date)
    }
}
