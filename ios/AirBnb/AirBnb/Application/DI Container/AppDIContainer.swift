//
//  AppDIContainer.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/07.
//

import UIKit

// MARK: - DI Container 를 만드는 Top Level DI Container
// 각 Container 가 필요로 하는 공통의 의존성(Network 등)을 AppDIContainer 를 통해 주입
final class AppDIContainer {
  // MARK: - DI Containers of scene for instance, login, splash etc.
  func makeTabBarDIContainer() -> DIContainer {
    TabBarDIContainer(dependencies: .init(
      homeSceneDIContainer: makeHomeSceneDIContainer(),
      wishSceneDIContainer: makeWishSceneDIContainer(),
      reservationSceneDiContainer: makeReservationSceneDIContainer()
    ))
  }

  func makeHomeSceneDIContainer() -> DIContainer {
    // TODO: - Inject network dependencies
    HomeSceneDIContainer()
  }

  func makeWishSceneDIContainer() -> DIContainer {
    WishSceneDIContainer()
  }

  func makeReservationSceneDIContainer() -> DIContainer {
    ReservationSceneDIContainer()
  }
}
