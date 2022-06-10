//
//  ReservationSceneFlowCoordinator.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

protocol ReservationSceneFlowCoordinatorDependencies {
  func makeReservationViewController() -> ReservationViewController
}

final class ReservationSceneFlowCoordinator: Coordinator {
  private let navigationController: UINavigationController
  private let dependencies: ReservationSceneFlowCoordinatorDependencies

  init(navigationController: UINavigationController, dependencies: ReservationSceneFlowCoordinatorDependencies) {
    self.navigationController = navigationController
    self.dependencies = dependencies
  }

  func start() {
    let viewController = dependencies.makeReservationViewController()
    navigationController.viewControllers = [viewController]
  }
}
