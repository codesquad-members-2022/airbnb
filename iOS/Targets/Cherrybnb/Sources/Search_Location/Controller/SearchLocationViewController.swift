//
//  ListCollectionViewController.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit
import MapKit

class SearchLocationViewController: UIViewController {

    static let defaultNavTitle = "숙소찾기"

    private var collectionView: UICollectionView!
    private var recommendationDataSource: RecommendationDataSource?
    private var recommendationDelegate: RecommandationDelegate?
    private var searchLocationDataSource: SearchLocationDataSource?
    private var detailSearchDataSource: DetailSearchLocationDataSource?
    private var detailSearchDelegate: DetailSearchDelegate?

    private lazy var clearButton: UIBarButtonItem = {
            let button = UIBarButtonItem(title: "지우기", style: .plain, target: self, action: #selector(buttonPressed(_:)))
            return button
        }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white

        setCollectionView()
        setLayout()
        setSearchBar()
        setDataSource()
    }

    override func viewWillAppear(_ animated: Bool) {
        collectionView.delegate = recommendationDelegate
        collectionView.dataSource = recommendationDataSource
        self.navigationItem.searchController?.searchBar.text = nil
    }

    private func setDataSource() {
        self.recommendationDataSource = RecommendationDataSource {
            DispatchQueue.main.async {
                self.collectionView.reloadData()
            }
        }
        self.recommendationDelegate = RecommandationDelegate(navigation: self.navigationController ?? UINavigationController(), collectionView: self.collectionView)

        self.searchLocationDataSource = SearchLocationDataSource {
            DispatchQueue.main.async {
                self.collectionView.reloadData()
            }
        }

        self.detailSearchDataSource = DetailSearchLocationDataSource()
        self.detailSearchDelegate = DetailSearchDelegate(navigation: self.navigationController ?? UINavigationController(), collectionView: self.collectionView)

        collectionView.dataSource = recommendationDataSource
        collectionView.delegate = recommendationDelegate
    }

    private func setSearchBar() {
        self.navigationItem.title = SearchLocationViewController.defaultNavTitle
        self.navigationItem.searchController = UISearchController(searchResultsController: nil)
        self.navigationItem.searchController?.searchBar.delegate = self
        self.navigationItem.setRightBarButton(clearButton, animated: true)

        self.navigationController?.hidesBarsOnSwipe = false
        self.navigationItem.hidesSearchBarWhenScrolling = false
        self.navigationItem.searchController?.searchBar.showsCancelButton = false
        self.navigationItem.searchController?.hidesNavigationBarDuringPresentation = false

        navigationItem.searchController?.isActive = true
        navigationItem.searchController?.searchBar.becomeFirstResponder()
    }

    private func setCollectionView() {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .vertical
        collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)

        self.view.addSubview(collectionView)

        collectionView.delegate = self
        collectionView.register(PlaceCell.self, forCellWithReuseIdentifier: PlaceCell.reuseIdentifier)
        collectionView.register(LocationCell.self, forCellWithReuseIdentifier: LocationCell.reuseIdentifier)
    }

    private func setLayout() {
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.topAnchor.constraint(equalTo: self.view.topAnchor).isActive = true
        collectionView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor, constant: 16).isActive = true
        collectionView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor, constant: 16).isActive = true
        collectionView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
    }

    @objc
    private func buttonPressed(_ sender: Any) {
        collectionView.delegate = recommendationDelegate
        collectionView.dataSource = recommendationDataSource
        self.navigationItem.searchController?.searchBar.text = nil
        DispatchQueue.main.async {
            self.collectionView.reloadData()
        }
    }
}

extension SearchLocationViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let searchDateVC = SearchDateViewController()

        guard let searchCompletion = searchLocationDataSource?.getResult(of: indexPath.item) else { return }

        let request = MKLocalSearch.Request(completion: searchCompletion)
        let localSearch = MKLocalSearch(request: request)

        localSearch.start { [weak self] response, error in
            guard let self = self, let response = response else { return }
            guard error == nil else { return }

            if response.mapItems.count > 1 {
                self.toSearchDetail(with: response)
                DispatchQueue.main.async {
                    self.collectionView.reloadData()
                }
            } else {
                // 검색한 Mapitem 을 nextVC로 넘겨주어야 함
                guard let mapItem = response.mapItems.first else { return }
                guard let place = PlaceFactory.makePlace(with: mapItem) else { return }
                searchDateVC.queryParameter.place = place
                self.navigationController?.pushViewController(searchDateVC, animated: true)
            }
        }

    }

    private func toSearchDetail(with response: MKLocalSearch.Response) {
        self.detailSearchDataSource?.setSearchResultData(response.mapItems)
        collectionView.dataSource = self.detailSearchDataSource
        collectionView.delegate = self.detailSearchDelegate
    }

}

extension SearchLocationViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let size = CGSize(width: self.collectionView.frame.width, height: 64)
        return size
    }
}

extension SearchLocationViewController: UISearchBarDelegate {

    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        if searchText.isEmpty {
            collectionView.dataSource = recommendationDataSource
            collectionView.delegate = recommendationDelegate
            collectionView.reloadData()
        } else {
            guard let searchLocationDataSource = searchLocationDataSource else { return }
            collectionView.dataSource = searchLocationDataSource
            collectionView.delegate = self
            searchLocationDataSource.setQueryFragment(searchText)
        }
    }
}
