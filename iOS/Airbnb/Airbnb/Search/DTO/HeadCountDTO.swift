//
//  HeadCountDTO.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import Foundation

struct HeadCountDTO {
    private(set) var adults: Int
    private(set) var children: Int
    private(set) var infants: Int
    
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
    
    mutating func addHeadCount(_ type: HeadCountType, value: Int) {
        switch type {
        case .adult:
            adults += value
        case .child:
            children += value
        case .infant:
            infants += value
        }
    }
}
