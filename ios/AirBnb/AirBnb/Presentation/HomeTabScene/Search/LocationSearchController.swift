//
//  LocationSearchController.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/26.
//

import UIKit

final class LocationSearchController: UIViewController {
  private let searchController = UISearchController()
  private var searchResultController: SearchResultViewController = {
    let config = UICollectionLayoutListConfiguration(appearance: .grouped)
    let layout = UICollectionViewCompositionalLayout.list(using: config)
    let collectionView = SearchResultViewController(collectionViewLayout: layout)
    return collectionView
  }()

  override func viewDidLoad() {
    super.viewDidLoad()
    configureUI()
  }

  private func configureUI() {
    view.backgroundColor = .systemBackground
    configureSearchBar()
  }

  private func configureSearchBar() {
    navigationController?.navigationBar.backItem?.title = "뒤로"
    navigationItem.searchController = searchController
  }
}

// MARK: - Configuration for Collection View
extension LocationSearchController: UICollectionViewDelegate {
  private func configureSearchResultController() {}
}

// MARK: - Configuration for Search Controller
extension LocationSearchController {
  private func configureSearchController() {}
}
