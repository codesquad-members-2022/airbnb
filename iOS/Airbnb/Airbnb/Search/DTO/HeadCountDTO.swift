//
//  HeadCountDTO.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import Foundation

struct HeadCountDTO {
    var adults: Int
    var children: Int
    var infants: Int
    
    func getHeadCount(_ type: HeadCountType) -> Int {
        switch type {
        case .adult:
            return adults
        case .child:
            return children
        case .infant:
            return infants
        }
    }
}
