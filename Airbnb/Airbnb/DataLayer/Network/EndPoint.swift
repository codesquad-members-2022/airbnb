//
//  EndPoint.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/09.
//

import Foundation

struct EndPoint {
    var path: String
    var queryItems: [URLQueryItem]
}

extension EndPoint {

    var url: URL {
        var components = URLComponents()
        components.scheme = "http"
        components.host = "13.124.91.193"
        components.port = 8080
        components.path = "/api/" + path
        components.queryItems = queryItems

        guard let url = components.url else {
            preconditionFailure("invalid url components :\(components)")
        }

        return url
    }
}

extension EndPoint {

    static func searchAccomadation(for query: String, filteredSelection: FilterSelection) -> Self {
        return EndPoint(path: "\(query)",
                        queryItems: [URLQueryItem(name: "latitude", value: "\(filteredSelection.location?.latitude ?? 0.0)"),
                                     URLQueryItem(name: "longitude", value: "\(filteredSelection.location?.longitude ?? 0.0)")])
    }

}
