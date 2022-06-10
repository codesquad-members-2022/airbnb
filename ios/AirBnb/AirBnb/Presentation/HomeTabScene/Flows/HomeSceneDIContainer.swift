//
//  HomeDIContainer.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/03.
//

import UIKit

final class HomeSceneDIContainer: DIContainer {
  // MARK: - Reusable Objects throughout the app flow
  private let imageCacheStorage = DefaultImageCacheStorage()
  private let imageService = DefaultImageService()

  // MARK: - Use Case
  func makeFetchImageUseCase() -> FetchImageUseCase {
    FetchImageUseCase(imageRepository: makeImageRepository())
  }

  // MARK: - Repository
  func makeImageRepository() -> ImageRepository {
    DefaultImageRepository(dataTransferService: imageService, cache: imageCacheStorage)
  }

  // MARK: - ViewModel
  func makeHomeViewModel(actions: HomeViewDependencyActions) -> HomeViewModel {
    DefaultHomeViewModel(dependencyActions: actions, fetchImageUseCase: makeFetchImageUseCase())
  }

  func makeCoordinator(navigationController: UINavigationController) -> Coordinator {
    HomeSceneFlowCoordinator(navigationController: navigationController, dependencies: self)
  }
}

extension HomeSceneDIContainer: HomeSceneFlowCoordinatorDependencies {
  func makeLocationSearchViewController() -> LocationSearchController {
    LocationSearchController()
  }

  func makeHomeViewController(actions: HomeViewDependencyActions) -> HomeViewController {
    HomeViewController.create(with: makeHomeViewModel(actions: actions))
  }
}
