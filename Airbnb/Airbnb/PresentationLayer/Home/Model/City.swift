//
//  LocalSite.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

import Foundation

struct City {
    let name: String
    let image: String
    let travelTime: String?
    var castedTravelTime: Time? {
        return Time(travelTime)
    }
}
