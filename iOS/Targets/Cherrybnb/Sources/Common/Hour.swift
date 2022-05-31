//
//  Hour.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct Hour {
    let value: Float

    init(_ value: Float) {
        self.value = value
    }

    var toMinutes: Float {
        value * 60
    }

    var toSeconds: Float {
        toMinutes * 60
    }
}

struct Minute {
    let value: Float

    init(_ value: Float) {
        self.value = value
    }

    var toSeconds: Float {
        value * 60
    }
}

typealias Second = Float
