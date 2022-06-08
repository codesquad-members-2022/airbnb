//
//  HeroViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

import Foundation

struct HeroCellViewModel {

    let title: String
    let content: String
    let badge: String
    let image: String

    init(model: Hero) {
        title = model.title
        content = model.content
        badge = model.badge
        image = model.image
    }

}
