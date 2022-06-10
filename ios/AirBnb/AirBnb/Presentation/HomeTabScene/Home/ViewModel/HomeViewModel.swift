//
//  HomeViewModel.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/27.
//

import Foundation

let imageUrl = "https://s3-alpha-sig.figma.com/img/21b4/b910/27e59a819a2b8cb93633590403acaa63?Expires=1654473600&Signature=H3UXgUlg2p-2iL4ODel45qKyZNWKDe3PqxxtcSFK6mlVeuw5PXeIE4UwPggmnSWYNOyKq6cOnACwNGYqKkg45EtuoqWFn3mp8l4tZuEx7ViFNx0rGp-guxfBvDw4jlIQP5n9hQsrkneEuEzgcwjM7SLzg6PzXmkoC0qRZL0lCGu6tbvymD5VWxSNvNXCoRsMELNOUVeLJcB4YuYp4J8LISfF4Mh9NazJZCZHqRozUKPDkXSLMcm48ttdf7hfUzdeHP8vW~OCE3RiaiR2iozG-brxdZQ4kUh2CLVeA9r7SEhJB1T9VSlQkk3zEL7SH5tJopnM81EaHSdcBxzLqi-P1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

// Action for data input & view Event
protocol HomeViewModelAction {
  func getNearCityList()
  func getRecommendationList()
  func showLocationSearch()
}

// Action for data output
protocol HomeViewModelState {
  var bannerImage: Observable<String> { get }
  var cities: Observable<[City]> { get }
  var recommendations: Observable<[Accommodation]> { get }

  func getSectionTitle(at index: Int) -> String
}

protocol HomeViewModel: HomeViewModelAction, HomeViewModelState {
  var action: HomeViewModelAction { get }
  var state: HomeViewModelState { get }
}

struct NearCity {
  let title: String
  let subtitle: String
  var image: String = imageUrl
}

struct HomeViewDependencyActions {
  let showLocationSearch: () -> Void
}

struct DefaultHomeViewModel: HomeViewModel {
  var action: HomeViewModelAction { self }
  var state: HomeViewModelState { self }

  private let sectionTitles = ["", "가까운 여행지 둘러보기", "어디에서나, 여행은\n살아보는거야!"]

  var bannerImage = Observable(value: imageUrl)

  var cities = Observable(value: [
    City(id: 1, name: "서울", distance: "차로 30분 거리", imageUrl: imageUrl),
    City(id: 2, name: "서울", distance: "차로 30분 거리", imageUrl: imageUrl),
    City(id: 3, name: "서울", distance: "차로 30분 거리", imageUrl: imageUrl),
    City(id: 4, name: "서울", distance: "차로 30분 거리", imageUrl: imageUrl),
    City(id: 5, name: "서울", distance: "차로 30분 거리", imageUrl: imageUrl),
    City(id: 6, name: "서울", distance: "차로 30분 거리", imageUrl: imageUrl)
  ])

  var recommendations = Observable(value: [
    Accommodation(id: 1, description: "자연생활을 만끽할 수 있는 숙소", imageUrl: imageUrl),
    Accommodation(id: 2, description: "자연생활을 만끽할 수 있는 숙소", imageUrl: imageUrl),
    Accommodation(id: 3, description: "자연생활을 만끽할 수 있는 숙소", imageUrl: imageUrl),
    Accommodation(id: 4, description: "자연생활을 만끽할 수 있는 숙소", imageUrl: imageUrl),
    Accommodation(id: 5, description: "자연생활을 만끽할 수 있는 숙소", imageUrl: imageUrl),
    Accommodation(id: 6, description: "자연생활을 만끽할 수 있는 숙소", imageUrl: imageUrl)
  ])

  private let fetchImageUseCase: FetchImageUseCase

  private let dependencyActions: HomeViewDependencyActions

  init(dependencyActions: HomeViewDependencyActions, fetchImageUseCase: FetchImageUseCase) {
    self.dependencyActions = dependencyActions
    self.fetchImageUseCase = fetchImageUseCase
  }

  func getSectionTitle(at index: Int) -> String {
    sectionTitles[index]
  }
}

// MARK: - Actions
extension DefaultHomeViewModel {
  func getBanngerImage() -> String {
    bannerImage.value
  }

  func getNearCityList() {}

  func getRecommendationList() {}

  func showLocationSearch() {
    dependencyActions.showLocationSearch()
  }
}
