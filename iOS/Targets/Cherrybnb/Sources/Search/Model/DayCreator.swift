//
//  DayCreator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

enum DayCreationError: Error {
    case metadataGeneration
}

struct DayCreator {
    let calendar = Calendar(identifier: .gregorian)
    
    var selectedDate: Date?
    
    private func monthMetadata(for basedate: Date) throws -> MonthMetaData  {
        guard let numberOfDaysInMonth = calendar.range(of: .day, in: .month, for: basedate)?.count,
              let firstDayOfMonth = calendar.date(from: calendar.dateComponents([.year, .month], from: basedate)) else {
            throw DayCreationError.metadataGeneration
        }
        
        let weekDayOfFirstDay = calendar.component(.weekday, from: firstDayOfMonth)
        
        return MonthMetaData(numberOfDays: numberOfDaysInMonth, firstDay: firstDayOfMonth, firstDayWeekday: weekDayOfFirstDay)
    }
    
    // 기준일로부터 offset만큼 떨어진 달의 Day를 return.
    func daysInMonth(for basedate: Date, monthOffset: Int) -> [Day] {
        guard let basedate = calendar.date(byAdding: .month, value: monthOffset, to: basedate),
              let firstDayOfOffsetMonth = calendar.date(from: calendar.dateComponents([.year, .month], from: basedate)) else {
            print(DayCreationError.metadataGeneration)
            return []
        }
        
        return daysInMonth(for: firstDayOfOffsetMonth)
    }
    
    // 기준일이 속한 달의 Day를 return.
    func daysInMonth(for basedate: Date) -> [Day] {
        guard let metadata = try? monthMetadata(for: basedate) else {
            print(DayCreationError.metadataGeneration)
            return []
        }
        
        return (0..<metadata.numberOfDays).map { offset in
            let date = calendar.date(byAdding: .day, value: offset, to: metadata.firstDay) ?? basedate
            
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "d"
            let number = dateFormatter.string(from: date)
            
            let isSelected = date == selectedDate
            
            let isPast = date < basedate
            
            return Day(date: date, number: number, isSelected: isSelected, isPast: isPast)
        }
        
    }
}
