//
//  CityCellViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

import Foundation
struct CityCellViewModel {

    let name: String
    let image: String
    let travelToTime: String

    init(model: City) {
        self.name = model.name
        self.image = model.image
        self.travelToTime = "차로" + model.castedTravelTime.description + "거리"
    }
}
