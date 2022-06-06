//
//  CalendarView.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/06.
//

import UIKit
import HorizonCalendar

final class CalendarViewController: UIViewController {

    private lazy var calendarView = CalendarView(initialContent: makeContent())
    private lazy var calendar = Calendar.current
    private lazy var dayDateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.calendar = calendar
        dateFormatter.locale = calendar.locale
        dateFormatter.dateFormat = DateFormatter.dateFormat(
            fromTemplate: "EEEE, MMM d, yyyy",
            options: 0,
            locale: calendar.locale ?? Locale.current)
        return dateFormatter
    }()
    var periodSelectionHandler: ((Period?) -> Void)?

    private enum CalendarSelection {
        case singleDay(Day)
        case dayRange(DayRange)
    }

    private var calendarSelection: CalendarSelection?

    override func viewDidLoad() {
        super.viewDidLoad()
        view = calendarView
        manageDaySelection()
    }

    private func manageDaySelection() {
        calendarView.daySelectionHandler = { [weak self] day in
            guard let self = self else { return }
            guard !self.isDayDisabled(day) else { return }

            switch self.calendarSelection {
            case .singleDay(let selectedDay):
                if day > selectedDay {
                    guard let startDate = self.calendar.date(from: selectedDay.components), let endDate = self.calendar.date(from: day.components) else {return}
                    self.calendarSelection = .dayRange(selectedDay...day)
                    let selectedPeriod = Period(start: startDate, end: endDate)
                    self.periodSelectionHandler?(selectedPeriod)
                } else {
                    self.calendarSelection = .singleDay(day)
                }
            case .none, .dayRange:
                self.calendarSelection = .singleDay(day)
            }
            self.calendarView.setContent(self.makeContent())
        }
    }

    private func makeContent() -> CalendarViewContent {

        let startDate = Date()
        let endDate = startDate.addingTimeInterval(24.0 * 3600.0 * 365)

        let calendarSelection = self.calendarSelection
        let dateRanges: Set<ClosedRange<Date>>
        if
            case .dayRange(let dayRange) = calendarSelection,
            let lowerBound = calendar.date(from: dayRange.lowerBound.components),
            let upperBound = calendar.date(from: dayRange.upperBound.components)
        {
            dateRanges = [lowerBound...upperBound]
        } else {
            dateRanges = []
        }

        return CalendarViewContent(
            calendar: calendar,
            visibleDateRange: startDate...endDate,
            monthsLayout: .vertical(options: VerticalMonthsLayoutOptions(pinDaysOfWeekToTop: true, alwaysShowCompleteBoundaryMonths: true)))

        .interMonthSpacing(24)
        .verticalDayMargin(8)
        .horizontalDayMargin(8)

        .dayItemProvider { [calendar, dayDateFormatter] day in

            let date = calendar.date(from: day.components)
            if self.isDayDisabled(day) {
                var InvariantViewProperties = DayView.InvariantViewProperties.baseNonInteractive
                InvariantViewProperties.textColor = .gray4 ?? .darkGray
                return CalendarItemModel<DayView>(
                    invariantViewProperties: InvariantViewProperties,
                    viewModel: .init(
                        dayText: "\(day.day)",
                        accessibilityLabel: date.map { dayDateFormatter.string(from: $0) },
                        accessibilityHint: nil))
            } else {
                var invariantViewProperties = DayView.InvariantViewProperties.baseInteractive
                let isSelectedStyle: Bool
                switch calendarSelection {
                case .singleDay(let selectedDay):
                    isSelectedStyle = day == selectedDay
                case .dayRange(let selectedDayRange):
                    isSelectedStyle = day == selectedDayRange.lowerBound || day == selectedDayRange.upperBound
                case .none:
                    isSelectedStyle = false
                }

                if isSelectedStyle {
                    invariantViewProperties.backgroundShapeDrawingConfig.fillColor = .gray1 ?? .black
                    invariantViewProperties.textColor = .white
                }
                return CalendarItemModel<DayView>(
                    invariantViewProperties: invariantViewProperties,
                    viewModel: .init(
                        dayText: "\(day.day)",
                        accessibilityLabel: date.map { dayDateFormatter.string(from: $0) },
                        accessibilityHint: nil))
            }
        }

        .dayRangeItemProvider(for: dateRanges) { dayRangeLayoutContext in
            CalendarItemModel<DayRangeIndicatorView>(
                invariantViewProperties: .init(),
                viewModel: .init(
                    framesOfDaysToHighlight: dayRangeLayoutContext.daysAndFrames.map { $0.frame }))
        }
    }

    private func isDayDisabled(_ day: Day) -> Bool {
        guard let date = calendar.date(from: day.components) else {return true}
        return date < Date() ? true : false
    }

    func resetCalendar() {
        calendarSelection = .none
        calendarView.setContent(makeContent())
    }
}
