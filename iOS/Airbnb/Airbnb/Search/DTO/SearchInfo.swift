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
    var checkInFormatted: String?
    
    /// 체크아웃 Date 타입(ISO8601)
    var checkOutDate: Date?
    var checkOutFormatted: String?
    
    /// 최소 1박 당 가격(사용자가 지정한 값)
    var lowerPricePerDay: UInt?
    var lowerPricePerDayFormatted: String?
    /// 최대 1박 당 가격(사용자가 지정한 값)
    var maximumPricePerDay: UInt?
    var maximumPricePerDayFormatted: String?
    /// 가격단위
    var priceUnit: PriceUnit = .Won
    
    /// 숙박인원
    var headCount: UInt?
    var headCountFormatted: String?
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
    
    func getIndex() -> Int {
        switch self {
        case .location: return 0
        case .date: return 1
        case .price: return 2
        case .headCount: return 3
        }
    }
}
