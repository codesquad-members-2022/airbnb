//
//  Time.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

import Foundation

struct Time {

    private(set) var value: Decimal
    private var formatter: NumberFormatter {
        let formatter = NumberFormatter()
        formatter.maximumFractionDigits = 2
        formatter.minimumFractionDigits = 0
        return formatter
    }

    var description: String {
        let timeComponent = castTime(value: self.value)
        guard let castedValue = formatter.string(from: NSDecimalNumber(decimal: timeComponent.value)) else {return ""}
        return castedValue + timeComponent.unit
    }

    init(_ minutes: Decimal) {
        self.value = minutes
    }

    init?(_ minutes: String?) {
        guard let minutes = minutes else {return nil}
        self.init(Decimal(string: minutes) ?? 0.0)
    }

    private func castTime(value: Decimal) -> (value: Decimal, unit: String) {
        let hours = value/60
        let value = hours < 1 ? value : hours
        let unit = hours < 1 ? "분" : "시간"
        return (value, unit)
    }

}
