//
//  ViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/24.
//

import UIKit

final class HomeViewController: UIViewController, UISearchBarDelegate {

    private var searchController: UISearchController!
    private var homeCollectionView: UICollectionView!
    private var homeViewModel = HomeViewModel()

    override func viewDidLoad() {
        super.viewDidLoad()
        configureDisplay()
        configureConstraints()
        homeViewModel.loadAllCategories()

    }

    private func configureDisplay() {
        setNavigationBar()
        setSearchBar()
        setCollectionView()
    }

    private func setNavigationBar() {
        view.backgroundColor = .gray6
        let navigationBar = navigationController?.navigationBar
        let navigationBarAppearance = UINavigationBarAppearance()
        navigationBar?.backgroundColor = .gray6
        navigationBarAppearance.shadowColor = .black
        navigationBar?.scrollEdgeAppearance = navigationBarAppearance
    }

    private func setSearchBar() {
        let searchBar = UISearchBar()
        searchBar.placeholder = "어디로 여행가세요?"
        searchBar.delegate = self
        navigationItem.titleView = searchBar
    }

    func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {
        let searchController = SearchViewController()
        navigationController?.pushViewController(searchController, animated: true)
        searchBar.resignFirstResponder()
    }

    private func setCollectionView() {
        let layoutProvider = HomeLayout()
        let layout = FlowLayout.makeCompositionalLayout(layoutProvider)
        homeCollectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        homeCollectionView.dataSource = self
        homeCollectionView.register(HeroCell.self, forCellWithReuseIdentifier: HeroCell.id)
        homeCollectionView.register(CityCell.self, forCellWithReuseIdentifier: CityCell.id)
        homeCollectionView.register(RandomSiteCell.self, forCellWithReuseIdentifier: RandomSiteCell.id)
        homeCollectionView.register(SectionHeader.self, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: SectionHeader.id)
        homeCollectionView.translatesAutoresizingMaskIntoConstraints = false
    }

    private func configureConstraints() {
        view.addSubview(homeCollectionView)
        NSLayoutConstraint.activate([
            homeCollectionView.topAnchor.constraint(equalTo: view.topAnchor, constant: 50),
            homeCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            homeCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            homeCollectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

extension HomeViewController: UICollectionViewDataSource {

    func numberOfSections(in collectionView: UICollectionView) -> Int {
        3
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        guard let categoryType = CategoryType.init(rawValue: section) else {return 0}
        return homeViewModel.getCount(for: categoryType)
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {

        guard let categoryType = CategoryType.init(rawValue: indexPath.section) else {return UICollectionViewCell()}

        switch categoryType {
        case .hero:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: HeroCell.id, for: indexPath) as? HeroCell else {return UICollectionViewCell()}
            cell.cellViewModel = homeViewModel.heroVM[indexPath.item]
            return cell
        case .city:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: CityCell.id, for: indexPath) as? CityCell else {return UICollectionViewCell()}
            cell.cellViewModel = homeViewModel.cityVM[indexPath.item]
            return cell

        case .randomSite:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: RandomSiteCell.id, for: indexPath) as? RandomSiteCell else {return UICollectionViewCell()}
            cell.cellViewModel = homeViewModel.randomSiteVM[indexPath.item]
            return cell
        }
    }

    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        guard let header = collectionView.dequeueReusableSupplementaryView(ofKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: SectionHeader.id, for: indexPath) as? SectionHeader else {return UICollectionReusableView()}

        if indexPath.section == 1 {
            header.configureCell(title: "가까운 여행지 둘러보기")

        } else if indexPath.section == 2 {
            header.configureCell(title: "어디에서나, 여행은\n살아보는거야!")
        }

        return header
    }

}
