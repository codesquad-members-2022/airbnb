//
//  SearchDayDTO.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/26.
//

import Foundation

struct SearchDayDTO {
    let date: Date
    let components: DateComponents
    let day: String
    // 캘린더에서 표시하지 않는 빈칸일 경우 true 입니다.
    let isOccupied: Bool
    
    let isSelected: Bool = false
    // 선택되었을 시 왼쪽부터 서서히 채워나가는 이펙트를 줌
    var fadeLeft: Bool = false
    // 선택되었을 시 오른쪽부터 서서히 채워나가는 이펙트를 줌
    var fadeRight: Bool = false
}
