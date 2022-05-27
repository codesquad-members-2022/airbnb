//
//  Time.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

import Foundation
struct Time {

    let value: Decimal
    let unit: String
    private var formatter: NumberFormatter {
        let formatter = NumberFormatter()
        formatter.maximumFractionDigits = 2
        formatter.minimumFractionDigits = 0
        return formatter
    }
    var description: String {
        guard let castedValue = formatter.string(from: NSDecimalNumber(decimal: value)) else {return ""}
        return castedValue + unit
    }

    init (_ minutes: Decimal) {
        let hours = minutes/60
        let value = hours < 1 ? minutes : hours
        let unit = hours < 1 ? "분" : "시간"
        self.value = value
        self.unit = unit
    }
}
