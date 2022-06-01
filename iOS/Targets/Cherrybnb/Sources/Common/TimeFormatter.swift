//
//  Hour.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct TimeFormatter {
    func string(from second: Second) -> String? {
        if second > 60 * 60 {
            let hourString = hourString(second: second)
            return "\(hourString)시간"
        } else if second > 60 {
            let minuteString = String(format: "%.f", second / 60)
            return "\(minuteString)분"
        } else if second > 0 {
            return "\(second)초"
        } else {
            return nil
        }
    }
    
    private func hourString(second: Second) -> String {
        if (second / 3600).rounded() == (second / 3600) {
            return String(format: "%.f", second / 3600)
        } else {
            return String(format: "%.1f", second / 3600)
        }
    }
}

typealias Second = Float
