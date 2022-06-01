//
//  ListCollectionViewController.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class SearchLocationViewController: UIViewController {

    private var collectionView: UICollectionView!
    private var recommendationDataSource: RecommendationDataSource?
    private var searchLocationDataSource: SearchLocationDataSource?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        
        setCollectionView()
        setLayout()
        setSearchBar()
        setDataSource()
    }
    
    private func setDataSource() {
        self.recommendationDataSource = RecommendationDataSource {
            DispatchQueue.main.async {
                self.collectionView.reloadData()
            }
        }
        
        self.searchLocationDataSource = SearchLocationDataSource {
            DispatchQueue.main.async {
                self.collectionView.reloadData()
            }
        }
        
        collectionView.dataSource = recommendationDataSource
    }
    
    private func setSearchBar() {
        self.navigationItem.title = "숙소찾기"
        self.navigationItem.searchController = UISearchController(searchResultsController: nil)
        self.navigationItem.hidesSearchBarWhenScrolling = false
        self.navigationController?.hidesBarsOnSwipe = false
        self.navigationItem.searchController?.searchBar.delegate = self

        navigationItem.searchController?.isActive = true
        navigationItem.searchController?.searchBar.becomeFirstResponder()
    }

    private func setCollectionView() {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .vertical
        collectionView = UICollectionView(frame: CGRect(x: 0, y: 0, width: 0, height: 0), collectionViewLayout: layout)

        self.view.addSubview(collectionView)

        collectionView.delegate = self
        collectionView.register(PlaceCell.self, forCellWithReuseIdentifier: PlaceCell.reuseIdentifier)
        collectionView.register(LocationCell.self, forCellWithReuseIdentifier: LocationCell.reuseIdentifier)
    }

    private func setLayout() {
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.topAnchor.constraint(equalTo: self.view.topAnchor).isActive = true
        collectionView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        collectionView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        collectionView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
    }
}

extension SearchLocationViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let searchDateVC = SearchDateViewController()
        // TODO: 선택된 Location 정보를 QueryParameter에 담아 주입해주기
        navigationController?.pushViewController(searchDateVC, animated: true)
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
        if searchText == "" {
            collectionView.dataSource = recommendationDataSource
            collectionView.reloadData()
        } else {
            guard let searchLocationDataSource = searchLocationDataSource else { return }
            collectionView.dataSource = searchLocationDataSource
            searchLocationDataSource.setQueryFragment(searchText)
        }
    }
}

