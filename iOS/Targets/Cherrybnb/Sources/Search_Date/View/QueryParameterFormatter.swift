//
//  QueryParameterFormatter.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/06/09.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct QueryParameterFormatter {
    
    func toString(_ queryParameter: QueryParameter?) -> [(String, String)] {
        let locationString = toString(queryParameter?.place)
        let dateString = toString(queryParameter?.dateRange)
        let priceString = toString(queryParameter?.priceRange)
        let headCountString = toString(queryParameter?.headCount)

        return [
            ("위치", locationString),
            ("체크인/체크아웃", dateString),
            ("요금", priceString),
            ("인원", headCountString)
        ]
    }

    private func toString(_ place: Place?) -> String {
        return place?.name ?? ""
    }

    private func toString(_ range: (Date?, Date?)?) -> String {
        guard let range = range else { return "" }

        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MMM d일"
        dateFormatter.locale = Locale(identifier: "ko")

        switch range {
        case (.some(let checkIn), .some(let checkOut)):
            return dateFormatter.string(from: checkIn) + " - " + dateFormatter.string(from: checkOut)
        case (.some(let checkIn), _):
            return dateFormatter.string(from: checkIn)
        default: return ""
        }
    }
    
    private func toString(_ priceRange: (Price?, Price?)?) -> String {
        guard let priceRange = priceRange else { return "" }
        guard let min = priceRange.0, let max = priceRange.1 else { return ""}
        return "\(min)₩-\(max)₩"
    }
    
    private func toString(_ headCount: HeadCount?) -> String {
        guard let headCount = headCount else { return "" }
        // TODO: Formatting Logic for headCount
        return ""
    }
}
