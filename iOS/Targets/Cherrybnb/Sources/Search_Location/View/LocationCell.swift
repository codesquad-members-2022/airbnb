//
//  LocationCell.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class LocationCell: UICollectionViewCell {
    static let reuseIdentifier = String(describing: LocationCell.self)
    
    lazy var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.image = UIImage(systemName: "mappin.and.ellipse")
        imageView.layer.cornerRadius = 10
        return imageView
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = .systemFont(ofSize: 17)
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        contentView.addSubview(imageView)
        contentView.addSubview(titleLabel)
        setLayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
        
    private func setLayout(){
        NSLayoutConstraint.activate([
            imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor),
            imageView.widthAnchor.constraint(equalToConstant: 64),
            imageView.heightAnchor.constraint(equalToConstant: 64),
            imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
    
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: 16),
            titleLabel.centerYAnchor.constraint(equalTo: contentView.centerYAnchor),
            titleLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            titleLabel.heightAnchor.constraint(equalToConstant: 22)
        ])
    }

    func setLocationData(_ title: String) {
        titleLabel.text = title
    }
}
