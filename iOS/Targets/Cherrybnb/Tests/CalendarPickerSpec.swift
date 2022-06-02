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
        
        describe("캘린더를 생성한 상태에서") {
            var testDate: Date!
            var calendarPicker: CalendarPicker!
            
            beforeEach {
                let dateFormatter = DateFormatter()
                dateFormatter.dateFormat = "YY,M,d-HH:mm:ss"
                testDate = dateFormatter.date(from: "22,05,15-07:00:00")
                
                calendarPicker = CalendarPicker(baseDate: testDate, numOfMonths: 12)
            }
            
            context("아무것도 하지 않으면") {
                it("기준일이 속한 월(의 첫째날)과 첫번째 월(의 첫째날)은 서로 같아야 한다") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)
                    let firstDayOfTestDate = Calendar.current.getFirstDayOfMonth(for: testDate)
                    
                    expect(firstMonth.firstDay).to(equal(firstDayOfTestDate))
                }
                
                it("첫번째 월에서 기준일 시작 시각 이전의 날짜는 모두 '지난 날짜'로 표시돼야 한다") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)
                    
                    let pastDays = firstMonth.days.filter { day in
                        return day.date < Calendar.current.startOfDay(for: testDate)
                    }
                    
                    for pastDay in pastDays {
                        expect(pastDay.isPast).to(equal(true))
                    }
                }
                
                it("첫번째 월에서 기준일 시작 시각을 포함한 이후 날짜는 모두 '지나지 않은 날짜'로 표시돼야 한다") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)
                    
                    let futureDays = firstMonth.days.filter { day in
                        return day.date >= Calendar.current.startOfDay(for: testDate)
                    }
                    
                    for futureDay in futureDays {
                        expect(futureDay.isPast).to(beFalse())
                    }
                }
                
                it("일요일(weekday 1)이 맨 앞 순서(index 0)로 나와야 한다. 즉, (7a + b)번째 순서인 날짜는 b-1요일을 나타내야한다.") {
                    let firstMonth = calendarPicker.getMonth(monthSection: 0)
                    
                    for (i, day) in firstMonth.days.enumerated() {
                        let indexRemainder = i % 7
                        let weekday = Calendar.current.getWeekDay(of: day.date)
                        
                        expect(indexRemainder).to(equal(weekday-1))
                    }
                    
                }
                
            }
            
            context("맨 처음 섹션의 맨 처음 보이는 날짜를 선택하면") {
                it("현재 월의 첫날이 선택되어야 한다") {
                    // Arrange
                    let firstdayOfCurrentMonth = Calendar.current.getFirstDayOfMonth(for: Date())
                    
                    calendarPicker.didSelectDate = { dateSelection in
                        // Assert
                        expect(dateSelection).to(equal((firstdayOfCurrentMonth, nil)))
                    }
                    
                    // Act
                    let currentMonthSection = 1
                    let firstDayItem = calendarPicker.getMonth(monthSection: currentMonthSection).firstDayWeekday-1
                    
                    calendarPicker.select(monthSection: currentMonthSection, dayItem: firstDayItem)
                }
            }
            
            
            context("달력에서 맨 10번째 섹션의 맨 마지막 날짜를 선택하면") {
                it("10달 후 마지막 날이 선택되어야 한다") {
                    // Arrange
                    let elevenMonthAfter = Calendar.current.getFirstDayOfMonthAfter(for: Date(), offsetBy: 10)
                    let lastDayof10MonthAfter = Calendar.current.date(byAdding: .day, value: -1, to: elevenMonthAfter)
                    
                    calendarPicker.didSelectDate = { dateSelection in
                        // Assert
                        expect(dateSelection).to(equal((lastDayof10MonthAfter, nil)))
                    }
                    
                    // Act
                    let section = 10
                    let lastDayItem = calendarPicker.getMonth(monthSection: section).days.count-1
                    
                    calendarPicker.select(monthSection: section, dayItem: lastDayItem)
                }
            }
            
            
            context("달력에서 오늘 이전 날짜를 선택하면") {
                it("선택은 여전히 비어있어야 한다") {
                    // Arrange
                    let currentMonthSection = 0
                    
                    let pastDayItem = calendarPicker.getMonth(monthSection: currentMonthSection).days.firstIndex(where: { $0.isPast })!
                    
                    
                    calendarPicker.didSelectDate = { dateSelection in
                        // Assert
                        expect(dateSelection).to(beNil())
                    }
                    
                    // Act
                    calendarPicker.select(monthSection: currentMonthSection, dayItem: pastDayItem)
                }
            }
            
            
            context("달력에서 현재 월이 아닌 날짜를 선택하면") {
                it("선택은 여전히 비어있어야 한다") {
                    // Arrange
                    var currentMonthSection = 1
                    while calendarPicker.getMonth(monthSection: currentMonthSection).days.firstIndex(where: { $0.isWithinLastMonth }) == nil {
                        currentMonthSection += 1
                    }
                    
                    let lastMonthDayItem = calendarPicker.getMonth(monthSection: currentMonthSection).days.firstIndex(where: { $0.isWithinLastMonth })!
                    
                    
                    calendarPicker.didSelectDate = { dateSelection in
                        // Assert
                        expect(dateSelection).to(beNil())
                    }
                    
                    // Act
                    calendarPicker.select(monthSection: currentMonthSection, dayItem: lastMonthDayItem)
                }
            }
        }
        
    }
}
