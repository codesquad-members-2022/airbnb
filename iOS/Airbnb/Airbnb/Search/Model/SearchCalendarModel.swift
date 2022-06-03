//
//  SearchCalendarModel.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/26.
//

import Foundation

class SearchCalendarModel {
    
    private(set) var resultArray: [CalendarResult] = [] {
        didSet {
            self.onUpdateAYear()
        }
    }
    
    private(set) var date = Date()
    
    var count: Int { resultArray.count }
    
    var onUpdateAYear: () -> Void = { }
    
    func make12month(baseDate: Date) {
        for _ in 0..<12 {
            let nextMonthResult = getNextMonthDays(from: baseDate)
            self.resultArray.append(nextMonthResult)
            self.date = nextMonthResult.date
        }
    }
    
    private(set) var localCalendar: Calendar = {
        var calendar = Calendar(identifier: .gregorian)
        calendar.locale = Locale(identifier: "ko_kr")
        return calendar
    }()
    
    /// 전달되는 기준 날짜를 이용하여 날짜 DTO를 가져온다.
    func getMonthDays(from baseDate: Date) -> CalendarResult {
        generateMonth(from: baseDate, isPrevious: nil)
    }
    
    /// 전달되는 기준 날짜를 이용하여 다음월 날짜 DTO를 가져온다.
    func getNextMonthDays(from baseDate: Date) -> CalendarResult {
        generateMonth(from: baseDate, isPrevious: false)
    }
    
    /// 전달되는 기준 날짜를 이용하여 전월 날짜 DTO를 가져온다.
    func getPreviousMonthDays(from baseDate: Date) -> CalendarResult {
        generateMonth(from: baseDate, isPrevious: true)
    }
    
    private func generateMonth(from baseDate: Date, isPrevious: Bool?) -> CalendarResult {
        
        var moveNum = 0
        
        if let previous = isPrevious {
            moveNum = previous ? -1 : 1
        }
        
        guard let dateMonthMoved = localCalendar.date(
            byAdding: .month,
            value: moveNum,
            to: baseDate)
        else {
            return CalendarResult(date: baseDate, result: [])
        }
        
        var dateComponent = localCalendar.dateComponents([.year,.month,.day,.hour], from: dateMonthMoved)
//        dateComponent.day = 2
        dateComponent.hour = 0
        
        guard
            let dateFirstInMonth = localCalendar.date(from: dateComponent),
            let numberOfDays = localCalendar.range(
                of: .day,
                in: .month,
                for: dateFirstInMonth)?.count
        else {
            return CalendarResult(date: baseDate, result: [])
        }
        
        // Swift는 요일을 0부터 6까지로 매기고, weekday는 1부터 7까지로 매깁니다.
        // 미국 날짜와 한국 날짜는 하루 차이가 납니다.
        // 위와 아래의 사실에 의거하여 2를 뺍니다.
        let weekdayTemp = localCalendar.component(.weekday, from: dateFirstInMonth) - 2
        let weekday = weekdayTemp < 0 ? 6 : weekdayTemp
        
        guard var date = localCalendar.date(
            byAdding: .day,
            value: weekday * -1,
            to: dateFirstInMonth)
        else {
            return CalendarResult(date: baseDate, result: [])
        }
        
        var result = [SearchDayDTO]()
        
        for day in 1...weekday+numberOfDays {
            result.append(
                SearchDayDTO(
                    date: date,
                    components: localCalendar.dateComponents([.year,.month,.day], from: date),
                    day: (weekday >= day ? "" : "\(day-weekday)"),
                    isOccupied: (weekday >= day)
                )
            )
            
            if let targetDate = localCalendar.date(byAdding: .day, value: 1, to: date) {
                date = targetDate
            }
        }
        
        return CalendarResult(date: dateFirstInMonth, result: result)
    }
}

struct CalendarResult {
    let date: Date
    let result: [SearchDayDTO]
}
