//
//  HomeController.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/23.
//

import SnapKit
import UIKit

final class HomeViewController: UIViewController {
  private let searchBar = UISearchBar()
  private lazy var collectionView = UICollectionView(frame: .zero, collectionViewLayout: createLayout())
  private lazy var dataSource: UICollectionViewDiffableDataSource<Section, SectionDataSource> = configureDataSource()

  private var viewModel: HomeViewModel?

  static func create(with viewModel: HomeViewModel) -> HomeViewController {
    let viewController = HomeViewController()
    viewController.viewModel = viewModel
    return viewController
  }

  // MARK: - Life Cycles
  override func viewDidLoad() {
    super.viewDidLoad()
    configureUI()

    guard let viewModel = viewModel else {
      return
    }

    bind(to: viewModel)
  }

  // MARK: - UI Configuration
  private func configureUI() {
    view.backgroundColor = .systemBackground
    configureSearchBarAttributes()
    configureCollectionViewLayout()
  }

  private func configureSearchBarAttributes() {
    navigationItem.titleView = searchBar
    searchBar.placeholder = "어디로 여행가세요?"
    searchBar.delegate = self
  }

  private func configureCollectionViewLayout() {
    view.addSubview(collectionView)
    collectionView.snp.makeConstraints { make in
      make.edges.equalTo(self.view.safeAreaLayoutGuide)
    }
  }
}

// MARK: - SearchBar Delegation
extension HomeViewController: UISearchBarDelegate {
  func searchBarTextDidBeginEditing(_: UISearchBar) {
    searchBar.resignFirstResponder()

    DispatchQueue.main.async {
      self.viewModel?.action.showLocationSearch()
    }
  }
}

// MARK: - Compositional Layout Configuration
private extension HomeViewController {
  private enum Section: Int {
    case hero
    case nearCities
    case recommendation
  }

  private enum SectionDataSource: Hashable {
    case image(String)
    case city(City)
    case accommodation(Accommodation)
  }

  private func createLayout() -> UICollectionViewCompositionalLayout {
    let config = UICollectionViewCompositionalLayoutConfiguration()
    config.interSectionSpacing = 40

    let layout = UICollectionViewCompositionalLayout(sectionProvider: { (sectionIndex: Int, _) in
      guard let section = Section(rawValue: sectionIndex) else {
        return nil
      }

      switch section {
      case .hero:
        return SectionFactory.createHeroSectionLayout()
      case .nearCities:
        return SectionFactory.createListPagingSectionLayout()
      case .recommendation:
        return SectionFactory.createPagingSectionLayout()
      }
    }, configuration: config)

    return layout
  }
}

// MARK: - CollectionView's UI Component Registration
private extension HomeViewController {
  private func createSectionHeaderRegistration() -> UICollectionView.SupplementaryRegistration<TitleSupplementaryView> {
    UICollectionView.SupplementaryRegistration<TitleSupplementaryView>(elementKind: UICollectionView.elementKindSectionHeader) { supplementaryView, _, indexPath in
      supplementaryView.label.text = self.viewModel?.getSectionTitle(at: indexPath.section)
      supplementaryView.label.numberOfLines = 0
    }
  }

  private func createHeroCellRegistration() -> UICollectionView.CellRegistration<HeroCollectionViewCell, String> {
    UICollectionView.CellRegistration<HeroCollectionViewCell, String> { cell, _, item in
      URLSession.shared.dataTask(with: URL(string: item)!) { data, _, error in
        guard let data = data, error == nil else {
          return
        }

        DispatchQueue.main.async {
          cell.setImage(UIImage(data: data))
        }

      }.resume()
    }
  }

  private func createNearCityCellRegistration() -> UICollectionView.CellRegistration<NearCityCollectionViewCell, City> {
    UICollectionView.CellRegistration<NearCityCollectionViewCell, City> { cell, _, item in
      let imageUrl = item.imageUrl

      URLSession.shared.dataTask(with: URL(string: imageUrl)!) { data, _, error in
        guard let data = data, error == nil else {
          return
        }

        DispatchQueue.main.async {
          cell.setData(title: item.name, subtitle: item.distance, image: UIImage(data: data))
        }

      }.resume()
    }
  }

  private func createRecommendationCellRegistration() -> UICollectionView.CellRegistration<RecommendationCollectionViewCell, Accommodation> {
    UICollectionView.CellRegistration<RecommendationCollectionViewCell, Accommodation> { cell, _, item in
      let imageUrl = item.imageUrl

      URLSession.shared.dataTask(with: URL(string: imageUrl)!) { data, _, error in
        guard let data = data, error == nil else {
          return
        }

        DispatchQueue.main.async {
          cell.setData(title: item.description, image: UIImage(data: data))
        }

      }.resume()
    }
  }
}

// MARK: - CollectionView Diffable DataSource
private extension HomeViewController {
  private func configureDataSource() -> UICollectionViewDiffableDataSource<Section, SectionDataSource> {
    let heroCellRegistration = createHeroCellRegistration()
    let cityCellRegistration = createNearCityCellRegistration()
    let recommendationCellRegistration = createRecommendationCellRegistration()

    let dataSource = UICollectionViewDiffableDataSource<Section, SectionDataSource>(collectionView: collectionView, cellProvider: { collectionView, indexPath, item in
      guard let section = Section(rawValue: indexPath.section) else {
        return nil
      }

      switch item {
      case let .image(image) where section == .hero:
        return collectionView.dequeueConfiguredReusableCell(
          using: heroCellRegistration,
          for: indexPath,
          item: image
        )
      case let .city(city) where section == .nearCities:
        return collectionView.dequeueConfiguredReusableCell(
          using: cityCellRegistration,
          for: indexPath,
          item: city
        )
      case let .accommodation(accommodation) where section == .recommendation:
        return collectionView.dequeueConfiguredReusableCell(
          using: recommendationCellRegistration,
          for: indexPath,
          item: accommodation
        )
      default:
        return nil
      }
    })

    let sectionHeaderRegistration = createSectionHeaderRegistration()

    dataSource.supplementaryViewProvider = { collectionView, _, indexPath in
      collectionView.dequeueConfiguredReusableSupplementary(
        using: sectionHeaderRegistration, for: indexPath
      )
    }

    return dataSource
  }

  private func bind(to viewModel: HomeViewModel) {
    viewModel.state.bannerImage.bind(to: self) { [weak self] image in

      guard !image.isEmpty else {
        return
      }

      var heroSnapshot = NSDiffableDataSourceSectionSnapshot<SectionDataSource>()
      heroSnapshot.append([SectionDataSource.image(image)])

      self?.dataSource.apply(heroSnapshot, to: .hero, animatingDifferences: true)
    }

    viewModel.state.cities.bind(to: self) { [weak self] items in
      guard !items.isEmpty else {
        return
      }

      let cityList = items.map { SectionDataSource.city($0) }

      var nearCitySnapshot = NSDiffableDataSourceSectionSnapshot<SectionDataSource>()
      nearCitySnapshot.append(cityList)

      self?.dataSource.apply(nearCitySnapshot, to: .nearCities, animatingDifferences: true)
    }

    viewModel.state.recommendations.bind(to: self, with: { [weak self] items in
      guard !items.isEmpty else {
        return
      }

      let accommodationList = items.map { SectionDataSource.accommodation($0) }

      var recommendSnapshot = NSDiffableDataSourceSectionSnapshot<SectionDataSource>()
      recommendSnapshot.append(accommodationList)

      self?.dataSource.apply(recommendSnapshot, to: .recommendation, animatingDifferences: true)
    })
  }
}
