//
//  Location.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import UIKit

struct Location {
    let coordinate: Coordinate

    static func makeRandomInKR() -> Location {
        Location(coordinate: Coordinate(latitude: Double.random(in: 34...38), longitude: Double.random(in: 124.5...128.5)))
    }
}
