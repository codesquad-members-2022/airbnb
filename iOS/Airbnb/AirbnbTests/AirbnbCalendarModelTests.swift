//
//  AirbnbCalendarModelTests.swift
//  AirbnbTests
//
//  Created by 백상휘 on 2022/05/26.
//

import XCTest
@testable import Airbnb

class AirbnbCalendarModelTests: XCTestCase {
    
    let model = SearchCalendarModel()
    
    func test_generateDays_in_year() throws {
        var date = Date()
        
        let currentDataDTO = model.getMonthDays(from: date)
        
        XCTAssertTrue(currentDataDTO.result.count > 0)
        
        date = currentDataDTO.date
        var currentYearMonth = model.localCalendar.dateComponents([.year,.month], from: date)
        
        for _ in 1..<12 {
            let nextMonthDTO = model.getNextMonthDays(from: date)
            
            // 다음 loop에서 사용할 Date 객체를 미리 저장합니다.
            date = nextMonthDTO.date
            
            // 테스트를 위해 비교할 DateComponents 를 생성합니다.
            let comparingYearMonth = model.localCalendar.dateComponents([.year,.month], from: date)
            
            var currentMonth = currentYearMonth.month ?? 0
            var currentYear = currentYearMonth.year ?? 0
            
            // 기존의 month 가 12면 1로 강제 변경 후 year 를 +1 합니다.
            // Model에 의해 생성된 Date가 아닌 계산에 사용된 Date 입니다.
            if currentYearMonth.month == 12 {
                currentMonth = 1
                currentYear += 1
            } else {
                currentMonth += 1
            }
            
            XCTAssertFalse(
                nextMonthDTO.result.isEmpty,
                "생성된 DTO 의 날짜 정보는 빈 값이면 안됩니다."
            )
            
            XCTAssertTrue(
                currentMonth == comparingYearMonth.month,
                "의도한 month 값이 Model에서 출력되지 않았습니다."
            )
            
            XCTAssertTrue(
                currentYear == comparingYearMonth.year,
                "의도한 year 값이 Model에서 출력되지 않았습니다."
            )
            
            currentYearMonth = comparingYearMonth
        }
        
        debugPrint("Count Result")
    }

    func test_generateDays_performance() throws {
        self.measure {
            for _ in 1...10000 {
                model.getNextMonthDays(from: Date())
            }
        }
    }

}
