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
            guard let checkinDayIndex = checkinDayIndex else {
                guard let beforeDays = beforeDays else { return }
                beforeDays.forEach {
                    $0.fadeState = .none
                }
                return self.onUpdateBeforeDays(beforeDays)
            }
            let currentDays = getDays(fromIndex: checkinDayIndex, toIndex: checkoutDayIndex)
            self.beforeDays = currentDays
        }
    }
    
    var checkoutDayIndex: IndexPath? {
        didSet {
            guard let checkinDayIndex = checkinDayIndex else { return }
            guard let checkoutDayIndex = checkoutDayIndex else { return }
            let currentDays = getDays(fromIndex: checkinDayIndex, toIndex: checkoutDayIndex)
            self.beforeDays = currentDays
        }
    }

    private var beforeDays: [Day]? {
        willSet {
            guard let beforeDays = beforeDays else { return }
            guard let newValue = newValue else { return }
            if newValue.count < beforeDays.count {
                for i in newValue.count..<beforeDays.count {
                    beforeDays[i].fadeState = .none
                }
            }
            else if newValue.count == 1 {
                beforeDays.forEach {
                    $0.fadeState = .none
                }
            }
            self.onUpdateBeforeDays(beforeDays)
        }
        didSet {
            guard let beforeDays = beforeDays else { return }
            self.onUpdate(beforeDays)
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
    
    var onUpdate: ([Day]) -> Void = { _ in }
    var onUpdateBeforeDays: ([Day]) -> Void = { _ in }
    
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
            return Month(result: days)
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
    }
}

private extension CalendarModel {
    func getDays(fromIndex: IndexPath, toIndex: IndexPath? = nil) -> [Day] {
        let indexes = generateIndexes(fromIndex: fromIndex, toIndex: toIndex)
        let days = indexes.compactMap {
            month[$0.section].result[$0.row]
        }

        return drawingDays(days: days)
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
                    let numberOfDays = month[value].count
                    switch offset {
                    case 0:
                        (fromIndex.row..<numberOfDays).forEach { num in
                            result.append(IndexPath(row: num, section: value))
                        }
                    case 1..<sections.count - 1:
                        (0..<numberOfDays).forEach { num in
                            result.append(IndexPath(row: num, section: value))
                        }
                    case sections.count - 1:
                        (0...toIndex.row).forEach { num in
                            result.append(IndexPath(row: num, section: value))
                        }
                    default:
                        print(numberOfDays)
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

extension CalendarModel {
    func getLastDate(at path: IndexPath) -> Date? {
        return month[path.section].result.last?.date
    }
    
    func getADay(at path: IndexPath) -> Day {
        return month[path.section].result[path.row]
    }
}
