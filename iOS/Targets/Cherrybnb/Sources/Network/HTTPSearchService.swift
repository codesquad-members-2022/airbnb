//
//  HTTPSearchService.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/07.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol HTTPSearchService {
    func searchPrice(for quearyComponenet: QueryParameter, completion: @escaping (Price?) -> Void)
}

struct PriceSuccessStub: HTTPSearchService {
    func searchPrice(for quearyComponenet: QueryParameter, completion: @escaping (Price?) -> Void) {
        completion(dummy)
    }

    let dummy: Price = Price(min: 10000, max: 990000, average: 500000)
}


struct PriceFailureStub: HTTPSearchService {
    func searchPrice(for quearyComponenet: QueryParameter, completion: @escaping (Price?) -> Void) {
        completion(nil)
    }
}

