//
//  RandomCityCellViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

import Foundation

struct RandomSiteCellViewModel {

    let image: String
    let content: String

    init(model: RandomSite) {
        image = model.image
        content = model.content
    }

}
