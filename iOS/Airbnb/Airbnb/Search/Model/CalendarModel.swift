//
//  CalendarModel.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/01.
//

import Foundation

class CalendarModel {
    
    var onUpdateCheckinDay: (Day) -> Void = { _ in }
    var onUpdateCheckoutDay: (Day) -> Void = { _ in }
    
    var checkinDay: Day?
    var checkoutDay: Day?
    
    
    private var baseDate: Date {
        didSet {
            month = generate12month(for: baseDate)
            self.onUpdate()
        }
    }
    
    lazy var month = generate12month(for: baseDate)
    
    var numberOfWeeksInBaseDate: Int {
        calendar.range(of: .weekOfMonth, in: .month, for: baseDate)?.count ?? 0
    }
    
    var onUpdate: () -> Void = { }
    
    let calendar: Calendar = Calendar.current
    
    private lazy var dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "d"
        return dateFormatter
    }()
    
    init(baseDate: Date) {
        self.baseDate = baseDate
        
    }
    
    func generate12month(for baseDate: Date) -> [Month] {
        
        var year: [Month] = []
        for addMonth in stride(from: 0, to: 11, by: 1) {
            if let month = calendar.date(byAdding: .month, value: addMonth, to: baseDate) {
                year.append(generateDaysInMonth(for: month))
            }
        }
        
        return year
    }
    
    private func generateMonthMetadata(for baseDate: Date) -> Result<MonthMetadata, CalendarDateError> {
        guard let daysCountInMonth = calendar.range(of: .day, in: .month, for: baseDate)?.count,
              let firstDayInMonth = calendar.date(
                from: calendar.dateComponents([.year, .month], from: baseDate)) else {
                    return .failure(CalendarDateError.monthMetadataError)
                }
        let firstDayWeekday = calendar.component(.weekday, from: firstDayInMonth)
        return .success(MonthMetadata(numberOfDays: daysCountInMonth, firstDay: firstDayInMonth, firstDayWeekday: firstDayWeekday))
    }
    
    private func generateDaysInMonth(for baseDate: Date) -> Month {
        switch generateMonthMetadata(for: baseDate) {
        case .success(let metadata):
            let daysCountInMonth = metadata.numberOfDays
            let offsetInInitailRow = metadata.firstDayWeekday
            let firstDayOfMonth = metadata.firstDay
            
            let days: [Day] = (1..<daysCountInMonth + offsetInInitailRow).map { day in
                let isWithinDisplayedMonth = day >= offsetInInitailRow
                let dayOffset = isWithinDisplayedMonth ? day - offsetInInitailRow : -(offsetInInitailRow - day)
                return generateDay(offsetBy: dayOffset,
                                   for: firstDayOfMonth,
                                   isWithinDisplayedMonth: isWithinDisplayedMonth)
            }
            return Month(date: baseDate, result: days)
        case .failure(let error):
            fatalError("failed making month ==> \(dump(error))")
        }
    }
    
    private func generateDay(offsetBy dayOffset: Int,
                             for baseDate: Date,
                             isWithinDisplayedMonth: Bool)  -> Day {
        let date = calendar.date(byAdding: .day,
                                 value: dayOffset,
                                 to: baseDate) ?? baseDate
        if let checkinDate = checkinDay?.date {
            return Day(date: date,
                       number: dateFormatter.string(from: date),
                       isSelected: calendar.isDate(date,
                                                   inSameDayAs: checkinDate),
                       isWithInDisplayedMonth: isWithinDisplayedMonth)
        } else {
            return Day(date: date,
                       number: dateFormatter.string(from: date),
                       isSelected: false,
                       isWithInDisplayedMonth: isWithinDisplayedMonth)
        }
    }
}

enum CalendarDateError: Error {
    case monthMetadataError
}

extension CalendarModel {
    func shinghaSayMakeDays(for baseDate: Date) -> [Date?] {
        let component = calendar.dateComponents([.year, .month], from: baseDate)
        guard let firstDate = calendar.date(from: component),
              let nextMonthDate = calendar.date(byAdding: .month, value: 1, to: firstDate), // 7월 1일
              let lastDate = calendar.date(byAdding: .day, value: -1, to: nextMonthDate) else {
                  return []
              }
        let startComponent = calendar.dateComponents([.day, .weekday], from: firstDate)
        let lastComponent = calendar.dateComponents([.day, .weekday], from: lastDate)
        guard let lastday = lastComponent.day,
              let startWeekDay = startComponent.weekday,
              let lastWeekDay = lastComponent.weekday else {
                  return []
              }
        var dates: [Date?] = (0..<lastday).map { addDay in
            calendar.date(byAdding: .day, value: addDay, to: firstDate)
        }
        (0..<startWeekDay - 1).forEach { _ in dates.insert(nil, at: 0) }
        (lastWeekDay - 1..<6).forEach { _ in dates.append(nil) }
        return dates
    }
}

extension CalendarModel {
    func validateCheckDate(for day: Day) {
        
        day.isSelected = true
        let date = day.date
        if let checkinDate = checkinDay?.date {
            /// 체크인 날짜 앞뒤로 크기 판별
            if checkinDate < date {
                day.fadeState = .right
                self.checkoutDay = day
                onUpdateCheckoutDay(day)
            }
            else if  checkinDate > date {
                day.fadeState = .left
                self.checkinDay = day
                onUpdateCheckinDay(day)
            }
            else if checkinDate == date {
                day.fadeState = .right
                self.checkoutDay = day
                onUpdateCheckoutDay(day)
            }
        } else {
            ///  없으면 체크인 데이를 업데이트
            day.fadeState = .left
            self.checkinDay = day
            onUpdateCheckinDay(day)
        }
    }
}

struct Month {
    let date: Date
    let result: [Day]
}
