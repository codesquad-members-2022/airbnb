//
//  CalendarCell.swift
//  airbnb
//
//  Created by Jihee hwang on 2022/06/07.
//

import UIKit
import SnapKit
import HorizonCalendar

final class CalendarCell: UICollectionViewCell {
    
    static let identifier = "CalendarCell"
    
    private let calendar = Calendar.current
    private lazy var calendarView = CalendarView(initialContent: makeContent())
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        layout()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("Init with coder is unavailable")
    }
    
    private func layout() {
        contentView.addSubview(calendarView)

        calendarView.snp.makeConstraints {
            $0.top.leading.equalTo(20)
            $0.trailing.equalTo(-30)
        }
    }
    
    private func makeContent() -> CalendarViewContent {
      let calendar = Calendar.current

      let startDate = calendar.date(from: DateComponents(year: 2020, month: 01, day: 01))!
      let endDate = calendar.date(from: DateComponents(year: 2021, month: 12, day: 31))!

      return CalendarViewContent(
        calendar: calendar,
        visibleDateRange: startDate...endDate,
        monthsLayout: .horizontal(options: HorizontalMonthsLayoutOptions()))
    }
}
