//
//  SearchCellCommonType.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/24.
//

import Foundation
import UIKit

protocol SearchCellCommonType: UICollectionViewCell {
    func setData(model: SearchViewModel)
}

//extension UICollectionViewCell {
////    static var reuseIdentifier: String { String(describing: Self.self) }
//}
