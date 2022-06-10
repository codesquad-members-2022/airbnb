//
//  PlaceFactory.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/03.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import MapKit

class PlaceFactory {

    static func makePlace(with mapItem: MKMapItem) -> Place? {
        guard let placeName = mapItem.name else { return nil }
        let latitude = mapItem.placemark.coordinate.latitude as Coordinate.Degree
        let longitude = mapItem.placemark.coordinate.longitude as Coordinate.Degree
        let coordinate = Coordinate(latitude: latitude, longitude: longitude)
        let location = Location(coordinate: coordinate)

        return Place(name: placeName, location: location, estimatedTime: 0)
    }

}
