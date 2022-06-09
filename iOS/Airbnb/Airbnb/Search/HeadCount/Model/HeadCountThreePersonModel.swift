//
//  HeadCountModel.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import Foundation

protocol HeadCountModel {
    var currentHeadCount: HeadCountDTO { get }
    var minValue: Int { get }
    var maxValue: Int { get }
    func handleCurrentHeadCount(headType: HeadCountType, inputType: HeadCountInputType)
}

class HeadCountThreePersonModel: HeadCountModel {
    
    private(set) var currentHeadCount = HeadCountDTO(adults: 0, children: 0, infants: 0)
    
    let minValue = 0
    let maxValue = 8
    
    //TODO: 성인, 어린이, 유아 입력에 대응하여 DTO를 업데이트 하는 로직 만들기. 반환은 뷰 컨트롤러에 결과로 반환할 구조체.
    func handleCurrentHeadCount(headType: HeadCountType, inputType: HeadCountInputType) {
        let compareValue = inputType == .plus ? maxValue : minValue
        let inputValue = inputType == .plus ? 1 : -1
        
        guard currentHeadCount.getHeadCount(headType) != compareValue else { return }
        
        if headType != .adult {
            adultCheck()
        }
        
        currentHeadCount.addHeadCount(headType, value: inputValue)
    }
    
    private func adultCheck() {
        if currentHeadCount.adults == 0 {
            currentHeadCount.adults = 1
        }
    }
}

enum HeadCountInputType {
    case plus
    case minus
}
