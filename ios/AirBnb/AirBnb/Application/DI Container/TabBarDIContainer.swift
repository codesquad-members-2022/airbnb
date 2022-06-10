//
//  TabBarDIContainer.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

final class TabBarDIContainer: DIContainer {
  struct Dependencies {
    let homeSceneDIContainer: DIContainer
    let wishSceneDIContainer: DIContainer
    let reservationSceneDiContainer: DIContainer
  }

  private let dependencies: Dependencies

  init(dependencies: Dependencies) {
    self.dependencies = dependencies
  }

  // MARK: - Coordinator
  func makeCoordinator(navigationController: UINavigationController) -> Coordinator {
    TabBarCoordinator(navigationController: navigationController, dependency: self)
  }
}

extension TabBarDIContainer: TabBarCoordinatorDependency {
  func pull(_ type: TabBarType) -> DIContainer {
    switch type {
    case .home:
      return dependencies.homeSceneDIContainer
    case .wish:
      return dependencies.wishSceneDIContainer
    case .reservation:
      return dependencies.reservationSceneDiContainer
    }
  }
}
