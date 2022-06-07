//
//  DefaultRecommendator.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

protocol PlaceRecommanding {
    func recommend(for location: Location, completion: @escaping ([Place]?) -> Void)
}

struct DefaultRecommendator: PlaceRecommanding {

    let httpService: HTTPRecommandService

    func recommend(for location: Location, completion: @escaping ([Place]?) -> Void) {
        httpService.getRecommendation(for: location) { places in
            completion(places)
        }
    }
}
