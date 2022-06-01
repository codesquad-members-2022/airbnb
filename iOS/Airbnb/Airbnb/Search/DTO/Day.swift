//
//  Day.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/01.
//

import Foundation

struct Day {
    let date: Date
    let number: String
    let isSelected: Bool
    let isWithInDisplayedMonth: Bool
    var fadeState: FadeState = .none
}

enum FadeState {
    case left, right, fill, none
}
