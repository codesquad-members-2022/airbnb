//
//  CalendarView.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/06.
//

 import UIKit
 import HorizonCalendar

 class CalendarViewController: UIViewController {

     var calendarView: CalendarView {
         let calendarView = CalendarView(initialContent: makeContent())
         return calendarView
     }

     override func viewDidLoad() {
         super.viewDidLoad()
         view = calendarView
     }

     private func makeContent() -> CalendarViewContent {
         let calendar = Calendar.current
         let startDate = calendar.date(from: DateComponents(year: 2022, month: 01, day: 01))!
         let endDate = calendar.date(from: DateComponents(year: 2022, month: 12, day: 31))!

         return CalendarViewContent(
            calendar: calendar,
            visibleDateRange: startDate...endDate,
            monthsLayout: .vertical(options: VerticalMonthsLayoutOptions()))
     }
 }
