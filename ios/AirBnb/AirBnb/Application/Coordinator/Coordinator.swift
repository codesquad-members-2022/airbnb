//
//  BaseCoordinator.swift
//  ExampleMVVM
//
//  Created by 송태환 on 2022/06/09.
//

import UIKit

protocol Coordinator: AnyObject {
  func start()
  func coordinate(to coordinator: Coordinator)
}

extension Coordinator {
  func coordinate(to coordinator: Coordinator) {
    coordinator.start()
  }
}
