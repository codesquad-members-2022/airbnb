//
//  LocationModel.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/30.
//

import Foundation
import CloudKit

protocol CityInformation {
    var destination: String { get }
}

struct PopularCityInfomation: CityInformation {
    let destination: String
    let distance: String
    let imageUrl: String
}

struct NearbyCityInformation: CityInformation {
    let destination: String
}

class LocationModel {
    private var popularDTO: [PopularCityInfomation] = []
    private var nearbyDTO: [NearbyCityInformation] = []
    private var locationViewMode: LocationViewMode = .popular
    
    private var dtoOnMode: [CityInformation] {
        locationViewMode == .popular ? popularDTO : nearbyDTO
    }
        
    subscript(index: Int) -> CityInformation? {
        get {
            if 0 <= index, index < dtoOnMode.count {
                return dtoOnMode[index]
            }
            return nil
        }
    }
    
    init() {
        popularDTO = make8CitiesInfo()
    }
    
    func changeMode(_ mode: LocationViewMode) {
        self.locationViewMode = mode
    }
    
    func getCount() -> Int {
        dtoOnMode.count
    }
    
    private func make8CitiesInfo() -> [PopularCityInfomation] {
        let locations: [String] = [
            "서울", "광주", "의정부시", "수원시",
            "대구", "울산", "대전", "부천시"
        ]
        let spandings: [String] = [
            "차로 30분 거리", "차로 4시간 거리", "차로 30분 거리", "차로 45분 거리",
            "차로 3.5시간 거리", "차로 4.5시간 거리", "차로 2시간 거리", "차로 30분 거리"
        ]
        
        return locations.enumerated().map { index, element in
            PopularCityInfomation(destination: element, distance: spandings[index], imageUrl: "")
        }
    }
    
    func makeTenNearbyCitiesInfo(nearby locations: [String]) {
        self.nearbyDTO = locations.map { NearbyCityInformation(destination: $0) }
    }
    
    enum LocationViewMode {
        case popular
        case nearby
    }
}
