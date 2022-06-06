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
    let start: Date
    let end: Date
}

struct PriceRange {
    let min: String
    let max: String
}

struct Occupants {
    let adult: Int
    let children: Int
    let infant: Int
    var numberOfGuest: Int {
        return adult + children + infant
    }
}

struct FilterSelection {
    let location: Location?
    let period: Period?
    let priceRange: PriceRange?
    let occupants: Occupants?
 }

enum FilterFields: Int, CaseIterable {
    case location
    case period
    case price
    case occupants

    var description: String {
        switch self {
        case .location:
            return "위치"
        case .period:
            return "체크인/체크아웃"
        case .price:
            return "요금"
        case .occupants:
            return "인원"

        }
    }

}
