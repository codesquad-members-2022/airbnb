//
//  DateFormatter.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/06.
//

import Foundation

enum CustomDateFormatter {

    static var PeriodFieldFormatter: DateFormatter {
        let myDateFormatter = DateFormatter()
        myDateFormatter.dateFormat = "M월 d일"
        myDateFormatter.locale = Locale(identifier: "ko_KR")
        return myDateFormatter
    }
}
