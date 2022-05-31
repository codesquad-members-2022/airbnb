//
//  Calendar+Extension.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/30.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

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
