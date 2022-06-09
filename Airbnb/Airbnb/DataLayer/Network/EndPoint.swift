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

        components.scheme = "https"

        components.host = "13.124.91.193:8080"

        components.path = "/" + path

        components.queryItems = queryItems

        guard let url = components.url else {

            preconditionFailure("invalid url components :\(components)")

        }

        return url

    }

}

extension EndPoint {

    static func searchAccomadation(for query: String, filteredSelection: FilterSelection) -> Self {

        return EndPoint(path: "\(query)?",

                        queryItems: [URLQueryItem(name: "latitude", value: "\(filteredSelection.location?.latitude)"),

                                     URLQueryItem(name: "longitude", value: "\(filteredSelection.location?.longitude)")])

    }

}
