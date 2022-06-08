//
//  HomeViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/26.
//

 import Foundation

 final class HomeViewModel {

     var heroVM = [HeroCellViewModel]()
     var cityVM = [CityCellViewModel]()
     var randomSiteVM = [RandomSiteCellViewModel]()

     private let heroData = [Hero(title: "슬기로운\n자연생활", content: "에어비엔비가 엄선한\n위시리스트를 만나보세요.", badge: "여행 아이디어 얻기", image: "HeroImage")]
     private let cityData = [City(name: "서울", image: "서울", travelTime: "30"), City(name: "광주", image: "광주", travelTime: "240"), City(name: "의정부시", image: "의정부시", travelTime: "30"), City(name: "수원시", image: "수원시", travelTime: "45"), City(name: "대구", image: "대구", travelTime: "210"), City(name: "울산", image: "울산", travelTime: "270"), City(name: "대전", image: "대전", travelTime: "120"), City(name: "부천시", image: "부천시", travelTime: "30")]
     private let randomSiteData = [RandomSite(image: "randomSite1", content: "자연생활을 만끽할 수 있는 숙소"), RandomSite(image: "randomSite1", content: "자연생활을 만끽할 수 있는 숙소")]

     private var dataCounter: [CategoryType: Int] {
         [.hero: heroVM.count,
          .city: cityVM.count,
          .randomSite: randomSiteVM.count]
     }

     func loadAllCategories() {
         loadHeroVM()
         loadCityVM()
         loadRandomSiteVM()
     }

     func loadHeroVM() {
         heroData.forEach({heroVM.append(HeroCellViewModel(model: $0))})
     }

     func loadCityVM() {
         cityData.forEach({cityVM.append(CityCellViewModel(model: $0))})
     }

     func loadRandomSiteVM() {
         randomSiteData.forEach({randomSiteVM.append(RandomSiteCellViewModel(model: $0))})
     }

     func getCount(for type: CategoryType) -> Int {
         return dataCounter[type] == nil ? 0 : dataCounter[type]!
     }
}
