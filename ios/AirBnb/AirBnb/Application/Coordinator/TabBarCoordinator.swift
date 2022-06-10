//
//  TabCoordinator.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

enum TabBarType {
  case home
  case wish
  case reservation
}

// 상위 모듈에서 필요한 Container 를 가져옴
protocol TabBarCoordinatorDependency {
  func pull(_ type: TabBarType) -> DIContainer
}

final class TabBarCoordinator: Coordinator {
  private let navigationController: UINavigationController
  private let dependency: TabBarCoordinatorDependency

  init(navigationController: UINavigationController, dependency: TabBarCoordinatorDependency) {
    self.navigationController = navigationController
    self.dependency = dependency
  }

  func start() {
    let tabBarController = UITabBarController()

    let homeNavigationController = UINavigationController()
    let homeSceneDIContainer = dependency.pull(.home)
    let homeFlowCoordinator = homeSceneDIContainer.makeCoordinator(navigationController: homeNavigationController)

    homeNavigationController.tabBarItem = .init(
      title: "검색",
      image: .magnifier,
      selectedImage: .magnifier
    )

    let wishNavigationController = UINavigationController()
    let wishSceneDIContainer = dependency.pull(.wish)
    let wishFlowCoordinator = wishSceneDIContainer.makeCoordinator(navigationController: wishNavigationController)

    wishNavigationController.tabBarItem = .init(
      title: "위시리스트",
      image: .heart,
      selectedImage: .heartFilled
    )

    let reservationNavigationController = UINavigationController()
    let reservationSceneDIContainer = dependency.pull(.reservation)
    let reservationFlowCoordinator = reservationSceneDIContainer.makeCoordinator(navigationController: reservationNavigationController)

    reservationNavigationController.tabBarItem = .init(
      title: "예약",
      image: .profile,
      selectedImage: .profileFilled
    )

    tabBarController.viewControllers = [
      homeNavigationController,
      wishNavigationController,
      reservationNavigationController
    ]

    tabBarController.tabBar.backgroundColor = .gray6
    tabBarController.tabBar.addTopBorder(with: .gray4, andWidth: 0.5)

    navigationController.viewControllers = [tabBarController]
    navigationController.navigationBar.isHidden = true

    homeFlowCoordinator.start()
    wishFlowCoordinator.start()
    reservationFlowCoordinator.start()
  }
}
