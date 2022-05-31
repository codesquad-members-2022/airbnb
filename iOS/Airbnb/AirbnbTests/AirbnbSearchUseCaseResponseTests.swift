//
//  AirbnbSearchUseCaseResponseTests.swift
//  AirbnbTests
//
//  Created by 백상휘 on 2022/05/30.
//

import XCTest
@testable import Airbnb

class AirbnbSearchUseCaseResponseTests: XCTestCase {
    let useCase = SearchUseCase(urlString: "http://3.38.224.138:8080")
    
    func test_cities_response_test() throws {
        let expectation = XCTestExpectation()
        useCase.getReservations { result in
            
            switch result {
                
            case .success(let data):
                
                guard let data = data else {
                    XCTFail("No data")
                    return
                }
                
                if let reservation = try? JSONDecoder().decode(Reservations.self, from: data) {
                    XCTAssertFalse(reservation.reservations.isEmpty)
                }
                
            case .failure( _):
                XCTFail("NetworkError")
            }
        }
        wait(for: [expectation], timeout: 5.0)
    }
}
