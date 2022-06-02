//
//  PlaceCollectionViewCell.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class PlaceCell: UICollectionViewCell {

    static let reuseIdentifier = String(describing: PlaceCell.self)

    lazy var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.image = UIImage.recommendationDefault
        imageView.layer.cornerRadius = 10
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()

    lazy var nameLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.cherrybnbBody
        label.text = "서울"
        return label
    }()

    lazy var distanceLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.cherrybnbBody
        label.textColor = .systemGray
        label.text = "차로 30분 거리"
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        contentView.addSubview(imageView)
        contentView.addSubview(nameLabel)
        contentView.addSubview(distanceLabel)
        setLayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }

    private func setLayout() {
        NSLayoutConstraint.activate([
        imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
        imageView.topAnchor.constraint(equalTo: contentView.topAnchor),
        imageView.widthAnchor.constraint(equalToConstant: 64),
        imageView.heightAnchor.constraint(equalToConstant: 64),
        imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])

        NSLayoutConstraint.activate([
        nameLabel.leadingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: 16),
        nameLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
        nameLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
        nameLabel.heightAnchor.constraint(equalToConstant: 22)
        ])

        NSLayoutConstraint.activate([
        distanceLabel.leadingAnchor.constraint(equalTo: nameLabel.leadingAnchor),
        distanceLabel.topAnchor.constraint(equalTo: nameLabel.bottomAnchor, constant: 4),
        distanceLabel.heightAnchor.constraint(equalToConstant: 22),
        distanceLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -16)
        ])
    }

    func setPlaceCell(_ place: Place) {
        nameLabel.text = place.name
        let timeFormatter = TimeFormatter()
        let estimatedTimeString = timeFormatter.string(from: place.estimatedTime) ?? "?"
        distanceLabel.text = "차로 \(estimatedTimeString) 거리"
    }

}
