//
//  Reservations.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import Foundation

struct Reservations: Codable {
    var reservations: [ReservationItem]
    
    struct ReservationItem: Codable {
        var reservationID: Int
        var headCount: Int
        var totalCharge: Int
        var roomName: String
        var roomType: String
        var mainImageUrl: String
        var checkInDate: String
        var checkOutDate: String
        var address: Address
        var host: Host
    }
    
    struct Address: Codable {
        var country: String
        var city: String
        var state: String
        var street: String
        var detailAddress: String
    }

    struct Host: Codable {
        var id: Int
        var name: String
        var profileImageUrl: String
    }
}
