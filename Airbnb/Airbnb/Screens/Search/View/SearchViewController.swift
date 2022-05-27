//
//  SearchViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/27.
//

import UIKit

final class SearchViewController: UIViewController, UISearchResultsUpdating {

    private var homeViewModel = HomeViewModel()
    private var collectionView: UICollectionView!

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "숙소 찾기"
        view.backgroundColor = .white
        configureDisplay()
        configureConstraints()
        homeViewModel.loadCityVM()
    }

    private func configureDisplay() {
        setSearchController()
        setCollectionView()
    }

    private func setSearchController() {
        let searchVC = UISearchController()
        searchVC.searchResultsUpdater = self
        searchVC.hidesNavigationBarDuringPresentation = false
        navigationItem.searchController = searchVC
        navigationItem.hidesSearchBarWhenScrolling = false
        navigationItem.searchController?.searchBar.placeholder = "어디로 여행가세요?"
    }

    private func setCollectionView() {
        let flowLayout = UICollectionViewFlowLayout()
        collectionView = UICollectionView(frame: .zero, collectionViewLayout: flowLayout)
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.dataSource = self
        collectionView.delegate = self
        collectionView.register(CityCell.self, forCellWithReuseIdentifier: CityCell.id)
        collectionView.register(SectionHeader.self, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: SectionHeader.id)
        view.addSubview(collectionView)
    }

    private func configureConstraints() {

        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            collectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }

    func updateSearchResults(for searchController: UISearchController) {
        guard let text = searchController.searchBar.text else {return}
        print(text)
    }
}

extension SearchViewController: UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return homeViewModel.getCount(for: .city)
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: CityCell.id, for: indexPath) as? CityCell else {return UICollectionViewCell()}
        cell.cellViewModel = homeViewModel.cityVM[indexPath.item]
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        guard let header = collectionView.dequeueReusableSupplementaryView(ofKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: SectionHeader.id, for: indexPath) as? SectionHeader else {return UICollectionReusableView()}
        header.configureCell(title: "근처의 인기 여행지")
        return header
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.frame.width - 100, height: 64)
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        CGSize(width: collectionView.frame.width, height: 50)
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: -100, bottom: 0, right: 0)
    }
}
