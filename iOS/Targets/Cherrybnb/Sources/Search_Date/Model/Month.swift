//
//  Month.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/30.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct Month {
    var numberOfDays: Int
    let firstDay: Date
    let firstDayWeekday: Int
    var days: [Day]

    init(baseDate: Date, days: [Day], calendar: Calendar = Calendar.current) {
        self.numberOfDays = calendar.getNumberOfDaysInMonth(for: baseDate)
        self.firstDay = calendar.getFirstDayOfMonth(for: baseDate)
        self.firstDayWeekday = calendar.getWeekDay(of: firstDay)
        self.days = days
    }
}

struct Day: Hashable {
    let date: Date
    var isSelected: Bool
    var isBetweenSelection: Bool
    let isPast: Bool
    let isWithinMonth: Bool
}
