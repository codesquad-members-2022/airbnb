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

    init(navigation: UINavigationController, collectionView: UICollectionView) {
        self.navigationController = navigation
        self.collectionView = collectionView
    }

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {

        guard let datasource = self.collectionView?.dataSource as? DetailSearchLocationDataSource else { return }
        guard let mapItem = datasource.searchResultData.first else { return }
        guard let place = PlaceFactory.makePlace(with: mapItem) else { return }
        searchDateVC.queryParameter.place = place
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
