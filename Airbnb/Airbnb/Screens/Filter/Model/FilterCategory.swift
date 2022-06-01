//
//  FilterItem.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/31.
//

import Foundation

struct Location {
    let name: String
    let latitude: Double
    let longitude: Double
}

struct Period {
    let start: String
    let end: String
}

struct PriceRange {
    let min: String
    let max: String
}

struct Occupants {
    let adult: Int
    let children: Int
    let infant: Int
}

struct FilterList {
    let location: Location
    let persiod: Period
    let priceRange: PriceRange
    let occupants: Occupants
}

enum FilterFields {
    static let fields = ["위치", "체크인/체크아웃", "요금", "인원"]
}
