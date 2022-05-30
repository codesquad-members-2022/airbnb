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
    private let castedTravelTime: String?
    var travelToTime: String? {
        guard let travelTime = castedTravelTime else {return nil}
        return "차로 " + travelTime + " 거리"
    }

    init(model: City) {
        self.name = model.name
        self.image = model.image
        self.castedTravelTime = model.castedTravelTime?.description ?? nil
    }
}
