//
//  SearchLocationDataSource.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/06/01.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit
import MapKit

class SearchLocationDataSource: NSObject, UICollectionViewDataSource {
    
    private var searchResultData = [MKLocalSearchCompletion]()
    private var searchCompleter = MKLocalSearchCompleter()
    private var didLoadData: () -> Void
    
    init(didLoadData: @escaping () -> Void) {
        self.didLoadData = didLoadData
        super.init()
        searchCompleter.delegate = self
    }
    
    func setQueryFragment(_ queryFragement: String) {
        searchCompleter.queryFragment = queryFragement
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return searchResultData.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LocationCell.reuseIdentifier, for: indexPath) as? LocationCell else { return UICollectionViewCell() }
        let data = searchResultData[indexPath.item]
        cell.setLocationData(data.title)
        return cell
    }
}

extension SearchLocationDataSource: MKLocalSearchCompleterDelegate {
    func completerDidUpdateResults(_ completer: MKLocalSearchCompleter) {
        searchResultData = searchCompleter.results
        didLoadData()
    }
}
