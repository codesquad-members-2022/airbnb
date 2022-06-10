//
//  WishSceneFlowCoordinator.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

protocol WishSceneFlowCoordinatorDependencies {
  func makeWishListViewController() -> WishListViewController
}

final class WishSceneFlowCoordinator: Coordinator {
  private let navigationController: UINavigationController
  private let dependencies: WishSceneFlowCoordinatorDependencies

  init(navigationController: UINavigationController, dependencies: WishSceneFlowCoordinatorDependencies) {
    self.navigationController = navigationController
    self.dependencies = dependencies
  }

  func start() {
    // TODO: Action 만들어서 ViewController 만들 때 주입
    let viewController = dependencies.makeWishListViewController()
    navigationController.viewControllers = [viewController]
  }
}
