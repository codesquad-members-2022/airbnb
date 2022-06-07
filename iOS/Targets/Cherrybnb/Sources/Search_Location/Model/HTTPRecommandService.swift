//
//  HTTPService.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol HTTPRecommandService {
    func getRecommendation(for location: Location, completion: @escaping ([Place]?) -> Void)
}

struct ResponseSuccessStub: HTTPRecommandService {

    let dummy = [
        Place(name: "서울", location: .makeRandomInKR(), estimatedTime: 30 * 60),
        Place(name: "광주", location: .makeRandomInKR(), estimatedTime: 4 * 60 * 60),
        Place(name: "의정부시", location: .makeRandomInKR(), estimatedTime: 30 * 60),
        Place(name: "수원시", location: .makeRandomInKR(), estimatedTime: 45 * 60),
        Place(name: "대구", location: .makeRandomInKR(), estimatedTime: 3.5 * 60 * 60),
        Place(name: "울산", location: .makeRandomInKR(), estimatedTime: 4.5 * 60 * 60),
        Place(name: "대전", location: .makeRandomInKR(), estimatedTime: 2 * 60 * 60),
        Place(name: "부천시", location: .makeRandomInKR(), estimatedTime: 30 * 60)
    ]

    func getRecommendation(for location: Location, completion: @escaping ([Place]?) -> Void) {
        DispatchQueue.global().asyncAfter(deadline: .now() + 0.1) {
            completion(dummy)
        }
    }
}

struct ResponseFailureStub: HTTPRecommandService {

    func getRecommendation(for location: Location, completion: @escaping ([Place]?) -> Void) {
        DispatchQueue.global().asyncAfter(deadline: .now() + 0.1) {
            completion(nil)
        }
    }
}
