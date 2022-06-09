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
    func handleCurrentHeadCount(headType: HeadCountType, input: HeadCountInputType)
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
    func handleCurrentHeadCount(headType: HeadCountType, input: HeadCountInputType) {
        let compareValue = input == .plus ? maxValue : minValue
        
        guard currentHeadCount.getHeadCount(headType) != compareValue else { return }
        
        let kidsExist = currentHeadCount.children > 0 || currentHeadCount.infants > 0
        
        // 성인이 0인데 아이들이 입력되면 성인 자동으로 1명 세팅
        // 아이들이 있는데 성인이 1명이고 성인에 대한 minus input이 입력되면 모델 수정 막음
        if kidsExist == false, currentHeadCount.adults == 0, headType != .adult {
            currentHeadCount.addHeadCount(.adult, inputType: .plus)
        } else if kidsExist, currentHeadCount.adults == 1, headType == .adult, input == .minus {
            return
        }
        
        currentHeadCount.addHeadCount(headType, inputType: input)
    }
}

enum HeadCountInputType {
    case plus
    case minus
}
