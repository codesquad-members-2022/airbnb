//
//  ReservationSceneDIContainer.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

final class ReservationSceneDIContainer: DIContainer {
  func makeCoordinator(navigationController: UINavigationController) -> Coordinator {
    ReservationSceneFlowCoordinator(navigationController: navigationController, dependencies: self)
  }
}

extension ReservationSceneDIContainer: ReservationSceneFlowCoordinatorDependencies {
  func makeReservationViewController() -> ReservationViewController {
    ReservationViewController()
  }
}
