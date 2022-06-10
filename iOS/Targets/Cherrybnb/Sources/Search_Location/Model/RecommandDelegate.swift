//
//  SearchLocationDelegate.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/03.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import UIKit

class RecommandationDelegate: NSObject, UICollectionViewDelegate {

    let navigationController: UINavigationController?
    let collectionView: UICollectionView?

    init(navigation: UINavigationController, collectionView: UICollectionView) {
        self.navigationController = navigation
        self.collectionView = collectionView
    }

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let searchDateVC = SearchDateViewController()

        guard let datasource = self.collectionView?.dataSource as? RecommendationDataSource else { return }

        let place = datasource.recommendationData[indexPath.item]
        searchDateVC.queryParameter.place = place
        self.navigationController?.pushViewController(searchDateVC, animated: true)
    }

}

extension RecommandationDelegate: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        guard let collectionView = self.collectionView else { return CGSize()}
        let size = CGSize(width: collectionView.frame.width, height: 64)
        return size
    }
}
