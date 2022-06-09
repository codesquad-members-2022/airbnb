//
//  SearchInfoTrackingModel.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/07.
//

import Foundation

protocol SearchInfoModel {
    var searchInfo: SearchInfo { get }
    func setModelData(using dict: [SearchInfoType: Any])
}

class SearchInfoTrackingModel: SearchInfoModel {
    
    private(set) var searchInfo = SearchInfo()
    
    var lowestPrice: UInt = 0
    var highestPrice: UInt = 0
    
    private let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "ko_kr")
        formatter.dateFormat = "MM dd"
        return formatter
    }()
    
    private let numberFormatter: NumberFormatter = {
        let formatter = NumberFormatter()
        formatter.locale = Locale.current
        formatter.numberStyle = .currency
        formatter.roundingMode = .halfDown
        return formatter
    }()
    
    func setModelData(using dict: [SearchInfoType: Any]) {
        for (key, value) in dict {
            switch key {
            case .location:
                if let location = value as? String {
                    searchInfo.location = location
                }
            case .date:
                if let dateRange = value as? CheckInOutRange {
                    searchInfo.checkInDate = dateRange.checkIn
                    if let checkInDate = dateRange.checkIn {
                        searchInfo.checkInFormatted = dateFormatter.string(from: checkInDate)
                    }
                    self.searchInfo.checkOutDate = dateRange.checkOut
                    if let checkOutDate = dateRange.checkOut {
                        searchInfo.checkOutFormatted = dateFormatter.string(from: checkOutDate)
                    }
                }
            case .price:
                guard highestPrice != 0 else { return }
                
                let highestPrice = Float(highestPrice)
                
                if let percentageRange = value as? PricePercentageRange {
                    
                    let lowerPricePerDay = UInt(highestPrice * percentageRange.lowPercent)
                    searchInfo.lowerPricePerDay = lowerPricePerDay
                    searchInfo.lowerPricePerDayFormatted = numberFormatter.string(for: (lowerPricePerDay / 1000) * 1000)
                    
                    let maximumPricePerDay = UInt(highestPrice * percentageRange.highPercent)
                    searchInfo.lowerPricePerDay = maximumPricePerDay
                    searchInfo.maximumPricePerDayFormatted = numberFormatter.string(for: (maximumPricePerDay / 1000) * 1000)
                }
            case .headCount:
                if let count = dict[key] as? HeadCountModel { 
                    searchInfo.headCount = UInt(count.currentHeadCount.allCount)
                    searchInfo.headCountFormatted = count.descriptionHeadCount
                }
            }
        }
    }
}

struct PricePercentageRange {
    let lowPercent: Float
    let highPercent: Float
}

struct CheckInOutRange {
    let checkIn: Date?
    let checkOut: Date?
}
