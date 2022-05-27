//
//  Day.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation

struct Day {
    // Day가 나타내는 시점(일)
    let date: Date
    
    // Calendar에 보여지는 숫자
    var number: String {
        dateFormatter.string(from: date)
    }
    
    // Calendar에서 선택되었는지 여부
    let isSelected: Bool
    
    // 현재 이전 날짜인지 여부
    let isPast: Bool
    
    let dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "d"
        return dateFormatter
    }()
}

struct Month {
    let date: Date
    
    var title: String {
        dateFormatter.string(from: date)
    }
    
    let dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy년 MM월"
        dateFormatter.locale = Locale(identifier: "ko_KR")
        return dateFormatter
    }()
}
