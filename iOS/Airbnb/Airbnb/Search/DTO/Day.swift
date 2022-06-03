//
//  Day.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/01.
//

import Foundation

class Day {
    let date: Date
    let number: String
    var isSelected: Bool
    let isWithInDisplayedMonth: Bool
    var fadeState: FadeState = .none
    var isBeforeToday: Bool {
        let calendar = Calendar.current
        let todayDate =  calendar.date(
                        from: calendar.dateComponents([.year, .month, .day],
                                                      from: Date())) ?? Date()
        return date < todayDate
    }
    
    init(date: Date, number: String, isSelected: Bool, isWithInDisplayedMonth: Bool) {
        self.date = date
        self.number = number
        self.isSelected = isSelected
        self.isWithInDisplayedMonth = isWithInDisplayedMonth
    }
}

enum FadeState {
    case left, right, fill, none
}
