//
//  HTTPService.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol HTTPService {
    func getRecommendation(for location: Location, completion: @escaping ([Place]?) -> Void)
}

struct ResponseSuccessStub: HTTPService {

    let dummy = [
        Place(name: "서울", location: .makeRandomInKR(), estimatedTime: Minute(30).toSeconds),
        Place(name: "광주", location: .makeRandomInKR(), estimatedTime: Hour(4).toSeconds),
        Place(name: "의정부시", location: .makeRandomInKR(), estimatedTime: Minute(30).toSeconds),
        Place(name: "수원시", location: .makeRandomInKR(), estimatedTime: Minute(45).toSeconds),
        Place(name: "대구", location: .makeRandomInKR(), estimatedTime: Hour(3.5).toSeconds),
        Place(name: "울산", location: .makeRandomInKR(), estimatedTime: Hour(3.5).toSeconds),
        Place(name: "대전", location: .makeRandomInKR(), estimatedTime: Hour(2).toSeconds),
        Place(name: "부천시", location: .makeRandomInKR(), estimatedTime: Minute(30).toSeconds)
    ]

    func getRecommendation(for location: Location, completion: @escaping ([Place]?) -> Void) {
        DispatchQueue.global().asyncAfter(deadline: .now() + 0.1) {
            completion(dummy)
        }
    }
}

struct ResponseFailureStub: HTTPService {

    func getRecommendation(for location: Location, completion: @escaping ([Place]?) -> Void) {
        DispatchQueue.global().asyncAfter(deadline: .now() + 0.1) {
            completion(nil)
        }
    }
}
