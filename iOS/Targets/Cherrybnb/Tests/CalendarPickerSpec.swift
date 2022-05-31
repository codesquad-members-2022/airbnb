//
//  CalendarSpec.swift
//  CherrybnbTests
//
//  Created by Bumgeun Song on 2022/05/31.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import Quick
import Nimble

class CalendarPickerSpec: QuickSpec {
    override func spec() {

        describe("특정 시각을 기준으로 캘린더 피커를 생성한 상태에서") {
            var testDate: Date!
            var calendarPicker: CalendarPicker!

            beforeEach {
                let dateFormatter = DateFormatter()
                dateFormatter.dateFormat = "YY,M,d-HH:mm:ss"
                testDate = dateFormatter.date(from: "22,05,15-07:00:00")

                calendarPicker = CalendarPicker(baseDate: testDate, numOfMonths: 12)
            }

            context("아무것도 하지 않으면") {
                it("기준일이 속한 월과 첫번째 월이 서로 같아야 한다") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)
                    let monthOfTestDate = CalendarPicker.KRCalendar.getFirstDayOfMonth(for: testDate)

                    expect(firstMonth.firstDay).to(equal(monthOfTestDate))
                }

                it("첫번째 월에서 기준일 이전의 날짜는 모두 '지난 날짜'로 표시돼야 한다") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)

                    let pastDays = firstMonth.days.filter { day in
                        return day.date < testDate
                    }

                    for pastDay in pastDays {
                        expect(pastDay.isPast).to(equal(true))
                    }
                }

                it("첫번째 월에서 기준일 포함한 이후 날짜는 모두 '지나지 않은 날짜'로 표시돼야 한다") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)

                    let futureDays = firstMonth.days.filter { day in
                        return day.date >= testDate
                    }

                    for futureDay in futureDays {
                        expect(futureDay.isPast).to(equal(false))
                    }
                }

                it("일요일(weekday 1)이 맨 앞 순서(index 0)로 나와야 한다. 즉, (7a + b)번째 순서인 날짜는 b-1요일을 나타내야한다.") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)

                    for (i, day) in firstMonth.days.enumerated() {
                        let indexRemainder = i % 7
                        let weekday = CalendarPicker.KRCalendar.getWeekDay(of: day.date)

                        expect(indexRemainder).to(equal(weekday-1))
                    }

                }

            }
        }

    }
}
