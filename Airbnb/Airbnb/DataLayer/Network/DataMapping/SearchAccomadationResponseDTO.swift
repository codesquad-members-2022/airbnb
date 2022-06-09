//
//  SearchAccomadationResponseDTO.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/08.
//

import Foundation

struct SearchAccomadationResponseDTO: Decodable {
    enum rentType: String, Decodable {
        case unit = "WHOLE_RESIDENCE"
    }
    let address: String
    let name: String
    let imagePath: String
    let price: Int
    let reviewScore: Double
    let reviewCount: Int
    let type: rentType
}
