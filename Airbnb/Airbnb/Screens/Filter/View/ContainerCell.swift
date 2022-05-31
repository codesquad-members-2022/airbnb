//
//  ContainerCell.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/31.
//

import UIKit

final class ContainerCell: UICollectionViewCell {

    static let id = "ContainerCell"

    override init(frame: CGRect) {
        super.init(frame: frame)
        contentView.backgroundColor = .systemBrown
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
