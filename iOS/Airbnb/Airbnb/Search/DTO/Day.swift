//
//  Day.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/01.
//

import Foundation

struct Day {
    let date: Date
    let number: String
    var isSelected: Bool
    let isWithInDisplayedMonth: Bool
    var isBeforeToday: Bool {
        let calendar = Calendar.current
        let todayDate =  calendar.date(
                        from: calendar.dateComponents([.year, .month, .day],
                                                      from: Date())) ?? Date()
        return date < todayDate
    }
    var fadeState: FadeState = .none
}

enum FadeState {
    case left, right, fill, none
}
