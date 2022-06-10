//
//  SceneDelegate.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/23.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?
  var coordinator: AppFlowCoordinator?

  func scene(_ scene: UIScene, willConnectTo _: UISceneSession, options _: UIScene.ConnectionOptions) {
    guard let scene = (scene as? UIWindowScene) else {
      return
    }

    let navigationController = UINavigationController()

    window = UIWindow(windowScene: scene)
    window?.rootViewController = navigationController
    window?.makeKeyAndVisible()

    coordinator = AppFlowCoordinator(navigationController: navigationController, container: AppDIContainer())
    coordinator?.start()
  }
}
