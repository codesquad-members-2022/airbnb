//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct CalendarPicker {

    private var months: [Month]

    init(baseDate: Date, numOfMonths: Int) {
        let firstMonth = Month(baseDate: baseDate)

        let afterMonths: [Month] = (1..<numOfMonths).map { offset in
            let firstDayOfMonthAfter = CalendarPicker.KRCalendar.getFirstDayOfMonthAfter(for: baseDate, offsetBy: offset)
            return Month(baseDate: firstDayOfMonthAfter)
        }

        self.months = [firstMonth] + afterMonths
    }

    var monthCount: Int {
        return months.count
    }

    func getMonth(monthSection: Int) -> Month {
        return months[monthSection]
    }

    func dayCount(monthSection: Int) -> Int {
        return months[monthSection].days.count
    }

    func getDay(monthSection: Int, dayItem: Int) -> Day {
        return months[monthSection].days[dayItem]
    }

    func select(monthSection: Int, dayItem: Int) {
        // 특정 데이트를 select함.
        // 그러면 해당 특정 데이트에 해당하는 Day 모델을 업데이트함.
        // 선택된 데이트나 데이트 범위를 알 수 있도록 따로 저장함.
    }
}

extension CalendarPicker {
    static let KRCalendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.locale = Locale(identifier: "ko_kr")
        calendar.timeZone = TimeZone(abbreviation: "KST") ?? TimeZone.current
        return calendar
    }()
}

enum CalendarPickerError: Error {
    case metadataGeneration
    case offsetMonthGeneration
}
