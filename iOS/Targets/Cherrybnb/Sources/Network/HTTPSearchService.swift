//
//  HTTPSearchService.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/07.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol HTTPSearchService {
    func searchPrice(for quearyComponenet: QueryParameter, completion: @escaping (PriceHistogram?) -> Void)
}

struct PriceSuccessStub: HTTPSearchService {
    func searchPrice(for quearyComponenet: QueryParameter, completion: @escaping (PriceHistogram?) -> Void) {
        completion(dummy)
    }

    let dummy: PriceHistogram = PriceHistogram(min: 10000, max: 990000, average: 500000)
}


struct PriceFailureStub: HTTPSearchService {
    func searchPrice(for quearyComponenet: QueryParameter, completion: @escaping (PriceHistogram?) -> Void) {
        completion(nil)
    }
}

