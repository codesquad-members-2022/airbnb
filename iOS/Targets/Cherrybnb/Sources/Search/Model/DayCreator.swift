//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

enum CalendarError: Error {
    case metadataGeneration
    case offsetMonthGeneration
}

struct DayCreator {
    let calendar = Calendar(identifier: .gregorian)
    
    var selectedDate: Date?
    
    // 기준일로부터 offset만큼 떨어진 달의 Day를 return.
    func daysInMonth(for basedate: Date, monthOffset: Int) -> [Day] {
        guard let firstDayOfMonth = calendar.date(from: calendar.dateComponents([.year, .month], from: basedate)),
              let firstDayOfOffsetMonth = calendar.date(byAdding: .month, value: monthOffset, to: firstDayOfMonth) else {
            print(CalendarError.offsetMonthGeneration)
            return []
        }
        
        return daysInMonth(for: firstDayOfOffsetMonth)
    }
    
    // 기준일이 속한 달의 Day를 return.
    func daysInMonth(for basedate: Date) -> [Day] {
        guard let metadata = try? monthMetadata(for: basedate) else {
            print(CalendarError.metadataGeneration)
            return []
        }
        
        return (0..<metadata.numberOfDays).map { offset in
            let date = calendar.date(byAdding: .day, value: offset, to: metadata.firstDay) ?? basedate
            let isSelected = date == selectedDate
            let isPast = date < basedate
            
            return Day(date: date, isSelected: isSelected, isPast: isPast)
        }
    }
    
    private func monthMetadata(for basedate: Date) throws -> MonthMetaData  {
        guard let numberOfDaysInMonth = calendar.range(of: .day, in: .month, for: basedate)?.count,
              let firstDayOfMonth = calendar.date(from: calendar.dateComponents([.year, .month], from: basedate)) else {
            throw CalendarError.metadataGeneration
        }
        
        let weekDayOfFirstDay = calendar.component(.weekday, from: firstDayOfMonth)
        
        return MonthMetaData(numberOfDays: numberOfDaysInMonth, firstDay: firstDayOfMonth, firstDayWeekday: weekDayOfFirstDay)
    }
}

struct MonthCreator {
    let calendar = Calendar(identifier: .gregorian)
    
    func createMonth(for basedate: Date, monthOffset: Int) -> Month? {
        guard let firstDayOfMonth = calendar.date(from: calendar.dateComponents([.year, .month], from: basedate)),
              let firstDayOfOffsetMonth = calendar.date(byAdding: .month, value: monthOffset, to: firstDayOfMonth) else {
            print(CalendarError.offsetMonthGeneration)
            return nil
        }
        return Month(date: firstDayOfOffsetMonth)
    }
}
