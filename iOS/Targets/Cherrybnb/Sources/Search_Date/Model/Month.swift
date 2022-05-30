//
//  Month.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/30.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

extension CalendarPicker {
    struct Month {
        let numberOfDays: Int
        let firstDay: Date
        let firstDayWeekday: Int
        let days: [Day]
        
        init(basedate: Date, on calendar: Calendar) throws {
            guard let numberOfDaysInMonth = calendar.getNumberOfDaysInMonth(for: basedate),
                  let firstDayOfMonth = calendar.getFirstDayOfMonth(for: basedate) else {
                throw CalendarPickerError.metadataGeneration
            }
            
            self.numberOfDays = numberOfDaysInMonth
            self.firstDay = firstDayOfMonth
            self.firstDayWeekday = calendar.getWeekDay(of: firstDayOfMonth)
            
            self.days = Month.createDays(for: basedate, numberOfDays: numberOfDaysInMonth)
        }
        
        static func createDays(for basedate: Date, numberOfDays: Int)-> [Day] {
            let calendar = CalendarPicker.calendar
            return (0..<numberOfDays).map { offset in
                let date = calendar.getNextDay(for: basedate, offset: offset) ?? basedate
                let isPast = date < Date()
                return Day(date: date, isSelected: false, isPast: isPast)
            }
        }
    }
    
    struct Day {
        // Day가 나타내는 시점(일)
        let date: Date
        
        // Calendar에서 선택되었는지 여부
        let isSelected: Bool
        
        // 현재 이전 날짜인지 여부
        let isPast: Bool
    }
}

