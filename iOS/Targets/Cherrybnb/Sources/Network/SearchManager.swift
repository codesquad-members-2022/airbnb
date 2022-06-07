//
//  SearchManager.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/06.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol PriceFrequencySearching {
    func searchPriceFrequency(queryComponent: QueryParameter, complete: @escaping (PriceHistogram?) -> Void)
}

struct SearchManager: PriceFrequencySearching {
    
    let httpService: HTTPSearchService
    
    func searchPriceFrequency(queryComponent: QueryParameter, complete: @escaping (PriceHistogram?) -> Void) {
        httpService.searchPrice(for: queryComponent) { price in
            complete(price)
        }
    }
}

