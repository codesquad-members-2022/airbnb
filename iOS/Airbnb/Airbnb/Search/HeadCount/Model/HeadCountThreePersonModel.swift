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
    var descriptionHeadCount: String { get }
}

class HeadCountThreePersonModel: HeadCountModel {
    
    private(set) var currentHeadCount = HeadCountDTO(adults: 0, children: 0, infants: 0)
    
    let minValue = 0
    let maxValue = 8
    
    var descriptionHeadCount: String {
        let guestCount = currentHeadCount.adults + currentHeadCount.children
        let infantCount = currentHeadCount.infants
        var result = ""
        
        if guestCount > 0 {
            result += "게스트 \(guestCount)명"
        }
        if result.count > 0 {
            result += ", "
        }
        if infantCount > 0 {
            result += "유아 \(infantCount)명"
        }
        return result
    }
    
    //TODO: 성인, 어린이, 유아 입력에 대응하여 DTO를 업데이트 하는 로직 만들기. 반환은 뷰 컨트롤러에 결과로 반환할 구조체.
    func handleCurrentHeadCount(headType: HeadCountType, inputType: HeadCountInputType) {
        let compareValue = inputType == .plus ? maxValue : minValue
        
        guard currentHeadCount.getHeadCount(headType) != compareValue else { return }
        
        if headType != .adult {
            adultCheck()
        }
        
        currentHeadCount.addHeadCount(headType, inputType: inputType)
    }
    
    private func adultCheck() {
        if currentHeadCount.adults == 0 {
            currentHeadCount.addHeadCount(.adult, inputType: .plus)
        }
    }
}

enum HeadCountInputType {
    case plus
    case minus
}
