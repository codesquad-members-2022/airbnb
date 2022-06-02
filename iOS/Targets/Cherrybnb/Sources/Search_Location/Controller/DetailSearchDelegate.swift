//
//  DetailSearchDelegate.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/02.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class DetailSearchDelegate: NSObject, UICollectionViewDelegate {
    
    let searchDateVC = SearchDateViewController()
    let navigationController: UINavigationController?
    let collectionView: UICollectionView?
    
    init(navigation: UINavigationController, collectionView: UICollectionView){
        self.navigationController = navigation
        self.collectionView = collectionView
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        
        guard let datasource = self.collectionView?.dataSource as? DetailSearchLocationDataSource else { return }
        let mapItem = datasource.searchResultData[0]
        guard let placeName = mapItem.name else { return }
        let latitude = mapItem.placemark.coordinate.latitude as Coordinate.Degree
        let longitude = mapItem.placemark.coordinate.longitude as Coordinate.Degree
        let coordinate = Coordinate(latitude: latitude, longitude: longitude)
        
        let place = Place(name: placeName, location: Location(coordinate: coordinate), estimatedTime: 0)
      
        searchDateVC.queryParameter?.place = place
        self.navigationController?.pushViewController(searchDateVC, animated: true)
    }
}


extension DetailSearchDelegate: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        guard let collectionView = self.collectionView else { return CGSize()}
        let size = CGSize(width: collectionView.frame.width, height: 64)
        return size
    }
}
