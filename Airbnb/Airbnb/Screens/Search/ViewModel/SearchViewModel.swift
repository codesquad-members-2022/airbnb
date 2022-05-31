//
//  SearchViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/30.
//

import Foundation

final class SearchViewModel {

    var cityVM = Observable<[CityCellViewModel]>([])
    var headerVM = Observable<SearchHeaderViewModel>(SearchHeaderViewModel(model: SearchHeader(title: "")))

    let cityData = [City(name: "서울", image: "서울", travelTime: "30"), City(name: "광주", image: "광주", travelTime: "240"), City(name: "의정부시", image: "의정부시", travelTime: "30"), City(name: "수원시", image: "수원시", travelTime: "45"), City(name: "대구", image: "대구", travelTime: "210"), City(name: "울산", image: "울산", travelTime: "270"), City(name: "대전", image: "대전", travelTime: "120"), City(name: "부천시", image: "부천시", travelTime: "30")]
    let headerData = SearchHeader(title: "근처의 인기 여행지")

    func reset() {
        var cityCellVMs = [CityCellViewModel]()
        cityData.forEach({
            cityCellVMs.append(CityCellViewModel(model: $0))
        })
        self.cityVM.value = cityCellVMs
        headerVM.value = SearchHeaderViewModel(model: headerData)
    }

    func update(models: [City]) {
        var cityCellVMs = [CityCellViewModel]()
        models.forEach({
            cityCellVMs.append(CityCellViewModel(model: $0))
        })
        self.cityVM.value = cityCellVMs
        headerVM.value = SearchHeaderViewModel(model: SearchHeader(title: ""))
    }

}
