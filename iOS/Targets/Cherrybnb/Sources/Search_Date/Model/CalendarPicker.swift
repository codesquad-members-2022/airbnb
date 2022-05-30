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
    
    init(baseDate: Date, numOfMonths: Int) throws {
        // BaseDate를 기준으로 Month 모델을 생성해서 저장.
        self.months = try CalendarPicker.createMonths(for: baseDate, numberOfMonths: numOfMonths)
    }
    
    // 전체 Month 섹션의 갯수를 리턴함.
    var monthCount: Int {
        return months.count
    }
    
    // 특정 Month 섹션을 모두 리턴함.
    func getMonth(monthSection: Int) -> Month {
        return months[monthSection]
    }
    
    // 특정 먼스 섹션의 전체 Day 갯수를 return함.
    func dayCount(monthSection: Int) -> Int {
        return months[monthSection].numberOfDays
    }
    
    // 특정 먼스 섹션의 특정 Day를 리턴함.
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
    static let calendar = Calendar(identifier: .gregorian)
    
    static func createMonths(for basedate: Date, numberOfMonths: Int) throws -> [Month] {
        guard let firstDayOfMonth = CalendarPicker.calendar.getFirstDayOfMonth(for: basedate) else {
            throw CalendarPickerError.metadataGeneration
        }
        
        let months: [Month] = try (0..<numberOfMonths).map { offset in
            guard let firstDayOfMonthAfter = CalendarPicker.calendar.getNextMonth(for: firstDayOfMonth, offset: offset) else {
                throw CalendarPickerError.offsetMonthGeneration
            }
            return try Month(basedate: firstDayOfMonthAfter, on: CalendarPicker.calendar)
        }
        
        return months
    }
}

enum CalendarPickerError: Error {
    case metadataGeneration
    case offsetMonthGeneration
}

