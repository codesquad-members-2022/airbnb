//
//  AppFlowCoordinator.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/07.
//

import UIKit

final class AppFlowCoordinator: Coordinator {
  private let navigationController: UINavigationController
  private let appContainer: AppDIContainer

  init(navigationController: UINavigationController, container: AppDIContainer) {
    self.navigationController = navigationController
    self.appContainer = container
  }

  func start() {
    // TODO: 인증 결과에 따라 다른 flow 실행
    coordinateToTabBar()
  }

  func coordinateToTabBar() {
    let tabBarContainer = appContainer.makeTabBarDIContainer()
    let flow = tabBarContainer.makeCoordinator(navigationController: navigationController)
    flow.start()
  }
}
