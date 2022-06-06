//
//  SearchInfo.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/06.
//

import Foundation

/// 검색조건 테이블 뷰 DTO
struct SearchInfo {
    
    /// 위치
    var location: String?
    /// 위도
    var latitude: String?
    /// 경도
    var longitude: String?
    
    /// 체크인 Date 타입(ISO8601)
    var checkInDate: Date?
    /// 체크인 String 타입(ISO8601)
    var checkIn: String?
    
    /// 체크아웃 Date 타입(ISO8601)
    var checkOutDate: Date?
    /// 체크아웃 String 타입(ISO8601)
    var checkOut: String?
    
    /// 가격
    var pricePerDay: UInt64 = 0
    /// 가격단위
    var priceUnit: PriceUnit = .Won
    
    /// 숙박인원
    var headCount: Int = 0
}

enum PriceUnit: String {
    case Dollar = "$"
    case Won = "₩"
}

enum SearchInfoType: String {
    case location = "위치"
    case date = "체크인/체크아웃"
    case price = "요금"
    case headCount = "인원"
    
    static func getType(from index: Int) -> SearchInfoType? {
        switch index {
        case 0: return .location
        case 1: return .date
        case 2: return .price
        case 3: return .headCount
        default: return nil
        }
    }
}
