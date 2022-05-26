//
//  AirbnbCalendarModelTests.swift
//  AirbnbTests
//
//  Created by 백상휘 on 2022/05/26.
//

import XCTest
@testable import Airbnb

class AirbnbCalendarModelTests: XCTestCase {

    func test_generateDays_in_year() throws {
        let model = SearchCalendarModel()
        var date = Date()
        
        let next = model.getNextMonthDays(from: date)
        let previous = model.getPreviousMonthDays(from: date)
        
        debugPrint("Start")
        debugPrint(next)
        debugPrint(previous)
        debugPrint("End")
        
        XCTAssertTrue(model.getMonthDays(from: date).result.count > 0)
        
        for _ in 1..<12 {
            let months = model.getNextMonthDays(from: date)
            date = months.date
            XCTAssertTrue(months.result.count > 0)
            print(months.date, months.result.count)
        }
        
        debugPrint("Count Result")
    }

    func testPerformanceExample() throws {
        self.measure {
            
        }
    }

}
