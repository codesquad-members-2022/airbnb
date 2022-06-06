//
//  RecommendationDataSource.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/06/01.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class RecommendationDataSource: NSObject, UICollectionViewDataSource {

    private(set) var recommendationData = [Place]()

    private var didLoadData: () -> Void

    init(didLoadData: @escaping () -> Void) {

        self.didLoadData = didLoadData
        super.init()

        let location = Location.makeRandomInKR()
        let recommendSuccessStubRequest = DefaultRecommendator(httpService: ResponseSuccessStub())

        recommendSuccessStubRequest.recommend(for: location) { [weak self] place in
            guard let self = self, let place = place else { return }
            self.recommendationData = place
            didLoadData()
        }
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        recommendationData.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: PlaceCell.reuseIdentifier, for: indexPath) as? PlaceCell else { return UICollectionViewCell() }
        let data = recommendationData[indexPath.item]
        cell.setPlaceCell(data)
        return cell
    }
}
