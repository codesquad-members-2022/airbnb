//
//  CalendarModel.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/01.
//

import Foundation

class CalendarModel {
    
    let selectedDateChaged: (Date) -> Void = { _ in }
    
    var selectedDate: Date?
    
    private var baseDate: Date {
        didSet {
            days = generateDaysInMonth(for: baseDate)
            self.onUpdate()
        }
    }
    
    lazy var days = generateDaysInMonth(for: baseDate)
    
    private var numberOfWeeksInBaseDate: Int {
      calendar.range(of: .weekOfMonth, in: .month, for: baseDate)?.count ?? 0
    }
    
    var onUpdate: () -> Void = { }
    
    let calendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.locale = Locale(identifier: "ko_kr")
        return calendar
    }()
    
    private lazy var dateFormatter: DateFormatter = {
      let dateFormatter = DateFormatter()
      dateFormatter.dateFormat = "d"
      return dateFormatter
    }()
    
    init(baseDate: Date) {
        self.baseDate = baseDate
    }
    
    private func makeMonthMetadata(for baseDate: Date) -> Result<MonthMetadata, CalendarDateError> {
        guard let daysCountInMonth = calendar.range(of: .day, in: .month, for: baseDate)?.count,
              let firstDayInMonth = calendar.date(
                from: calendar.dateComponents([.year, .month, .hour], from: baseDate)) else {
                    return .failure(CalendarDateError.monthMetadataError)
                }
        let firstDayWeekday = calendar.component(.weekday, from: firstDayInMonth)
        return .success(MonthMetadata(numberOfDays: daysCountInMonth, firstDay: firstDayInMonth, firstDayWeekday: firstDayWeekday))
    }
    
    func generateDaysInMonth(for baseDate: Date) -> [Day] {
        switch makeMonthMetadata(for: baseDate) {
        case .success(let metadata):
            let daysCountInMonth = metadata.numberOfDays
            let offsetInInitailRow = metadata.firstDayWeekday
            let firstDayOfMonth = metadata.firstDay
            
            let days: [Day] = (1..<daysCountInMonth).map { day in
                let dayOffset = day - offsetInInitailRow
                return generateDay(offsetBy: dayOffset, for: firstDayOfMonth)
            }
            return days
        case .failure(let error):
            dump(error)
            return []
        }
    }
    
    private func generateDay(offsetBy dayOffset: Int,
                             for baseDate: Date)  -> Day {
        let date = calendar.date(byAdding: .day,
                                 value: dayOffset,
                                 to: baseDate) ?? baseDate
        if let selectedDate = selectedDate {
            return Day(date: date,
                       number: dateFormatter.string(from: date),
                       isSelected: calendar.isDate(date,
                                                   inSameDayAs: selectedDate))
        } else {
            return Day(date: date,
                       number: dateFormatter.string(from: date),
                       isSelected: false)
        }
    }
}

enum CalendarDateError: Error {
    case monthMetadataError
}
