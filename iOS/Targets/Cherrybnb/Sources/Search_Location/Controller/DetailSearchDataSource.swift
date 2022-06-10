//
//  DetailSearchLocationDataSource.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/02.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit
import MapKit

class DetailSearchLocationDataSource: NSObject, UICollectionViewDataSource {

    private(set) var searchResultData = [MKMapItem]()

    func setSearchResultData(_ data: [MKMapItem]) {
        searchResultData = data
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return searchResultData.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: LocationCell.reuseIdentifier, for: indexPath) as? LocationCell else { return UICollectionViewCell() }
        let data = searchResultData[indexPath.item]
        if let name = data.name {
            cell.setLocationData(name)
        }

        return cell
    }

}
