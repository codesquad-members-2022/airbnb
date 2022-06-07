//
//  CalendarModel.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/01.
//

import Foundation

class CalendarModel {
    
    var checkinDayIndex: IndexPath? {
        didSet {
            guard let checkinDayIndex = checkinDayIndex else { return }
            let result = getDays(fromIndex: checkinDayIndex, toIndex: checkoutDayIndex)
            return self.onUpdate(result.days, result.indexes)
        }
    }
    
    var checkoutDayIndex: IndexPath? {
        didSet {
            guard let checkinDayIndex = checkinDayIndex else { return }
            guard let checkoutDayIndex = checkoutDayIndex else { return }
            let result = getDays(fromIndex: checkinDayIndex, toIndex: checkoutDayIndex)
            return self.onUpdate(result.days, result.indexes)
        }
    }
    
    
    private var baseDate: Date {
        didSet {
            month = generate12month(for: baseDate)
        }
    }
    
    lazy var month = generate12month(for: baseDate)
    
    var numberOfWeeksInBaseDate: Int {
        calendar.range(of: .weekOfMonth, in: .month, for: baseDate)?.count ?? 0
    }
    
    var onUpdate: (_ days: [Day], _ indexes: [IndexPath]) -> Void = { _, _ in }
    
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
            return Month(metadata: metadata, result: days)
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
        
        return Day(date: date,
                   number: dateFormatter.string(from: date),
                   isSelected: false,
                   isWithInDisplayedMonth: isWithinDisplayedMonth)
        
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
    func validateCheckDate(at indexPath: IndexPath) {
        if let checkinDayIndex = checkinDayIndex {
            if checkinDayIndex <= indexPath {
                self.checkoutDayIndex = indexPath
            }
            if checkinDayIndex > indexPath {
                self.checkinDayIndex = indexPath
            }
        }
        else if let checkoutDayIndex = checkoutDayIndex {
            if checkoutDayIndex > indexPath || checkoutDayIndex < indexPath {
                self.checkoutDayIndex = indexPath
            }
        } else {
            self.checkinDayIndex = indexPath
        }
        //        day.isSelected = true
        //        let date = day.date
        //        if let checkinDate = checkinDay?.date {
        //            /// 체크인 날짜 앞뒤로 크기 판별
        //            if checkinDate < date {
        //                day.fadeState = .right
        //                self.checkoutDay = day
        //                onUpdateCheckoutDay(day)
        //            }
        //            else if  checkinDate > date {
        //                day.fadeState = .left
        //                self.checkinDay = day
        //                onUpdateCheckinDay(day)
        //            }
        //            else if checkinDate == date {
        //                day.fadeState = .right
        //                self.checkoutDay = day
        //                onUpdateCheckoutDay(day)
        //            }
        //        } else {
        //            ///  없으면 체크인 데이를 업데이트
        //            day.fadeState = .left
        //            self.checkinDay = day
        //            onUpdateCheckinDay(day)
        //        }
    }
}

struct Month {
    let metadata: MonthMetadata
    let result: [Day]
}

private extension CalendarModel {
    func getDays(fromIndex: IndexPath, toIndex: IndexPath? = nil) -> (days: [Day], indexes: [IndexPath]) {
        let indexes = generateIndexes(fromIndex: fromIndex, toIndex: toIndex)
        let days = indexes.compactMap {
            month[$0.section].result[$0.row]
        }
        let drawingDays = drawingDays(days: days)
        return (drawingDays, indexes)
    }
    
    func generateIndexes(fromIndex: IndexPath, toIndex: IndexPath? = nil) -> [IndexPath] {
        if let toIndex = toIndex {
            if fromIndex.section == toIndex.section {
                return (fromIndex.row...toIndex.row).compactMap {
                    return IndexPath(row: $0, section: fromIndex.section)
                }
            } else {
                let sections = Array(fromIndex.section...toIndex.section)
                var result: [IndexPath] = []

                sections.enumerated().forEach { offset, value in
                    let metadata = month[value].metadata
                    switch offset {
                    case 0:
                        (fromIndex.row..<metadata.numberOfDays).forEach { num in
                            result.append(IndexPath(row: num, section: value))
                        }
                    case 1..<sections.count - 1:
                        (0..<metadata.numberOfDays).forEach { num in
                            result.append(IndexPath(row: num, section: value))
                        }
                    case sections.count - 1:
                        (0...toIndex.row).forEach { num in
                            result.append(IndexPath(row: num, section: value))
                        }
                    default:
                        print(metadata)
                    }
                }
                return result
            }
        } else {
            return [fromIndex]
        }
    }
    
    func drawingDays(days: [Day]) -> [Day] {
        return days.enumerated().map {
            switch $0.offset {
            case 0:
                $0.element.fadeState = .left
            case 1..<days.count - 1:
                $0.element.fadeState = .fill
            case days.count - 1:
                $0.element.fadeState = .right
            default:
                $0.element.fadeState = .none
            }
            return $0.element
        }
    }
}
