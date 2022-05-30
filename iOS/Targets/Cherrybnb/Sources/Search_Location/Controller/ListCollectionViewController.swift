//
//  ListCollectionViewController.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit
import MapKit

class ListCollectionViewController: UIViewController {

    private var collectionView: UICollectionView!
    private var searchCompleter = MKLocalSearchCompleter()
    private var searchResultData = [MKLocalSearchCompletion]()
    private var isSearching = false
    private var recommendationData = [Place]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        requestRecommand()
        setCollectionView()
        setLayout()
        connectSearchBar()
        
        searchCompleter.delegate = self
        
    }
    
    private func requestRecommand(){
        let location = Location.makeRandomInKR()
        let recommendSuccessStubRequest = DefaultRecommendator(httpService: ResponseSuccessStub())
        recommendSuccessStubRequest.recommend(for: location) { place in
            guard let place = place else {
                return
            }
            self.recommendationData += place
            DispatchQueue.main.async {
                self.collectionView.reloadData()
            }
        }
    }
    
    private func connectSearchBar(){
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
        collectionView.dataSource = self

        collectionView.register(PlaceCell.self, forCellWithReuseIdentifier: PlaceCell.cellId)
        collectionView.register(LocationCell.self, forCellWithReuseIdentifier: LocationCell.cellId)
    }

    private func setLayout() {
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.topAnchor.constraint(equalTo: self.view.topAnchor).isActive = true
        collectionView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
        collectionView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
        collectionView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
    }
}

extension ListCollectionViewController: UICollectionViewDelegate, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        if isSearching{
            return searchResultData.count
        }
        return recommendationData.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        
        if isSearching {
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LocationCell.cellId, for: indexPath) as? LocationCell else { return UICollectionViewCell() }
            let data = searchResultData[indexPath.item]
            cell.setLocationData(data.title)
            return cell
        }
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: PlaceCell.cellId, for: indexPath) as? PlaceCell else { return UICollectionViewCell() }
        let data = recommendationData[indexPath.item]
        cell.setPlaceCell(data)
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let size = CGSize(width: self.collectionView.frame.width, height: 64)
        return size
    }

}

extension ListCollectionViewController: UISearchBarDelegate{
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        if searchText == "" {
            isSearching = false
            searchResultData.removeAll()
            collectionView.reloadData()
        }
        else {
            isSearching = true
            searchCompleter.queryFragment = searchText
        }
    }
}


extension ListCollectionViewController: MKLocalSearchCompleterDelegate {
    func completerDidUpdateResults(_ completer: MKLocalSearchCompleter) {
        searchResultData = searchCompleter.results
        collectionView.reloadData()
    }
}
