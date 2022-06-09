//
//  ConverterUnitTest.swift
//  ConverterUnitTest
//
//  Created by 박진섭 on 2022/05/25.
//

import XCTest
import MapKit

class ConverterUnitTest: XCTestCase {

    func testPriceConverter() {
        let testStringPrice = "₩100,000"
        let testDecimalPrice = 100000
        
        let decimalPrice = PriceConvertor.toDecimal(from: testStringPrice)
        let stringPrice = PriceConvertor.toString(from: 100000)
        
        XCTAssertEqual(testStringPrice, stringPrice)
        XCTAssertEqual(testDecimalPrice, decimalPrice)
    }

    func testAddressConverter() {
        let testCoordinate = CLLocationCoordinate2D(latitude: 37.490765, longitude: 127.033433)
        let expectedAddress = "서울특별시 강남구 강남대로62길 23"
        
        let expectation = XCTestExpectation(description: "주소 변환중..")
        
        AddressConverter.findAddressFromCoordinate(from: testCoordinate) { address in
            XCTAssertEqual(address, expectedAddress)
            expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 1)
    }
}
