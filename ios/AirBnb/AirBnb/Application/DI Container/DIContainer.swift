//
//  DIContainer.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

protocol DIContainer {
  func makeCoordinator(navigationController: UINavigationController) -> Coordinator
}
