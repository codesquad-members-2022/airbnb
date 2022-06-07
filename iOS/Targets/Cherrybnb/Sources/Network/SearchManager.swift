//
//  SearchManager.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/06.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct SearchManager: PriceFrequencySearching {
    
    let httpService: HTTPSearchService
    
    func searchPriceFrequency(queryComponent: QueryParameter, complete: @escaping (Price?) -> Void) {
        httpService.searchPrice(for: queryComponent) { price in
            complete(price)
        }
    }
}

