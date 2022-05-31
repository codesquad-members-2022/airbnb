//
//  NetworkServices.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/30.
//

import Foundation

class NetworkServices {
    
    static let api = "/api"
    
    /// 근처의 인기 여행지 기본 화면
    let destination = "\(NetworkServices.api)/destination"
    /// 근처의 인기 여행지 검색
    /// GET : destination="검색어"
    /// POST : location, checkInDate, checkOutDate, minCharge, maxCharge, headcount
    let rooms: String = "\(NetworkServices.api)/rooms"
    /// 숙소 상세
    /// GET : id
    lazy var roomsWithID: (String) -> String = {
        return "\(self.rooms)/\($0)"
    }
    
    /// 예약관련
    /// GET : 파라미터 없음. 예약리스트 출력함
    /// POST : roomId, checkInDate, checkOutDate, headcount, totalCharge. 예약하기
    let reservations = "\(api)/reservations"
    
    /// 숙소 예약 요금 계산(1)
    /// POST : checkInDate, checkOutDate, headcount
    /// URL에 첨부하기 위해 숙소 id 추가
    lazy var totalChange: (String) -> String = {
        return "\(self.reservations)/\($0)/totalCharge"
    }
    /// 숙소 예약 요금 계산(2)
    /// POST : checkInDate, checkOutDate, headcount
    /// URL에 첨부하기 위해 숙소 id 추가
    lazy var calculateChange: (String) -> String = {
        return "\(self.reservations)/calculateCharge/\($0)"
    }
    
    /// 예약 상세
    /// GET : 파라미터 없음
    /// URL에 첨부하기 위해 예약 id 추가
    lazy var reservationsDetail: (String) -> String = {
        return "\(self.reservations)/\($0)"
    }
    
    /// 위시리스트 목록
    /// GET : 파라미터 없음
    static let wish = "\(NetworkServices.api)/wish"
    
    /// 위시리스트 삭제
    /// DELETE : 파라미터 없음
    /// URL에 첨부하기 위해 위시id 추가
    lazy var wishDelete: (String) -> String = {
        return "\(NetworkServices.wish)/\($0)"
    }
    
    /// 위시리스트 등록
    /// POST : wishId, boolParam(boolParam 은 정보 없음)
    /// URL에 첨부하기 위해 위시id 추가
    lazy var wishInsert: (String) -> String = {
        return "\(NetworkServices.wish)/\($0)"
    }
}
