//
//  DateFormatter.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/06.
//

import Foundation

class MyDateFormatter {

    static let shared = MyDateFormatter()

    private init() {}

    private let periodFieldFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "M월 d일"
        dateFormatter.locale = Locale.current
        return dateFormatter
    }()

    private let calendarDateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.locale = Locale.current
        dateFormatter.dateFormat = "EEEE, MMM d, yyyy"
        return dateFormatter
    }()

    func periodDateString(from date: Date) -> String {
        periodFieldFormatter.string(from: date)
    }

    func calendarDateString(from date: Date) -> String {
        calendarDateFormatter.string(from: date)
    }

}
