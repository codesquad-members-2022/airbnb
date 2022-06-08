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

extension Day: Hashable {
    static func == (lhs: Day, rhs: Day) -> Bool {
        let calendar = Calendar.current
        let leftComponent = calendar.dateComponents([.year, .month, .day], from: lhs.date)
        let rightComponent = calendar.dateComponents([.year, .month, .day], from: rhs.date)
        let lhsDate = calendar.date(from: leftComponent) ?? Date()
        let rhsDate = calendar.date(from: rightComponent) ?? Date()
        return lhsDate == rhsDate
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(self.date)
    }
}

extension Day: NSCopying {
    func copy(with zone: NSZone? = nil) -> Any {
        return Day(date: self.date, number: self.number, isSelected: self.isSelected, isWithInDisplayedMonth: self.isWithInDisplayedMonth)
    }
}
