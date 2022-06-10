//
//  WishSceneDIContainer.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

final class WishSceneDIContainer: DIContainer {
  func makeCoordinator(navigationController: UINavigationController) -> Coordinator {
    WishSceneFlowCoordinator(navigationController: navigationController, dependencies: self)
  }
}

extension WishSceneDIContainer: WishSceneFlowCoordinatorDependencies {
  func makeWishListViewController() -> WishListViewController {
    WishListViewController()
  }
}
