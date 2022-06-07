//
//  Calendar+Extension.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/30.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

extension Calendar {
    func getNumberOfDaysInMonth(for baseDate: Date) -> Int {
        // month가 day보다 더 큰 component이므로 range()에서 nil이 return 되지 않음을 확신할 수 있음.
        return range(of: .day, in: .month, for: baseDate)?.count ?? 0
    }

    func getFirstDayOfMonth(for baseDate: Date) -> Date {
        // baseDateComponents는 반드시 존재하는 일자의 구성 요소이므로 nil이 return 되지 않음을 확신할 수 있음.
        let baseDateComponents = dateComponents([.year, .month], from: baseDate)
        return date(from: baseDateComponents) ?? baseDate
    }

    func getLastDayOfMonth(for baseDate: Date) -> Date {
        let firstDay = getFirstDayOfMonth(for: baseDate)
        let firstDayOfNextMonth = date(byAdding: .month, value: 1, to: firstDay) ?? baseDate
        return date(byAdding: .day, value: -1, to: firstDayOfNextMonth) ?? baseDate
    }

    func getFirstDayOfMonthAfter(for baseDate: Date, offsetBy: Int) -> Date {
        // 첫번째 날짜의 다음 달은 반드시 존재하므로 nil이 return 되지 않음을 확신할 수 있음.
        return date(byAdding: .month, value: offsetBy, to: getFirstDayOfMonth(for: baseDate)) ?? baseDate
    }

    func getNextDay(for baseDate: Date, offsetBy: Int) -> Date? {
        return date(byAdding: .day, value: offsetBy, to: baseDate)
    }

    func getWeekDay(of date: Date) -> Int {
        return component(.weekday, from: date)
    }
}
