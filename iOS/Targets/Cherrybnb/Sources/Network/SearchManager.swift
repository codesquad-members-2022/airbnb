//
//  SearchManager.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/06.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol PriceHistogramSearching {
    func searchPriceHistogram(queryComponent: QueryParameter, complete: @escaping (PriceHistogram?) -> Void)
}

struct SearchManager: PriceHistogramSearching {
    
    let httpService: HTTPSearchService
    
    func searchPriceHistogram(queryComponent: QueryParameter, complete: @escaping (PriceHistogram?) -> Void) {
        httpService.searchPrice(for: queryComponent) { price in
            complete(price)
        }
    }
}

