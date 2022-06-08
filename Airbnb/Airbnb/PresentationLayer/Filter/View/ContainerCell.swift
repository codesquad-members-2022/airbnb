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
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func fillContent(view: UIView) {
        view.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(view)
        NSLayoutConstraint.activate([
            view.leadingAnchor.constraint(equalTo: contentView.layoutMarginsGuide.leadingAnchor),
            view.trailingAnchor.constraint(equalTo: contentView.layoutMarginsGuide.trailingAnchor),
            view.topAnchor.constraint(equalTo: contentView.layoutMarginsGuide.topAnchor),
            view.bottomAnchor.constraint(equalTo: contentView.layoutMarginsGuide.bottomAnchor)
        ])
    }

}
