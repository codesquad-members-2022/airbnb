//
//  LocationCell.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class LocationCell: UICollectionViewCell {
    private var imageView = UIImageView()
    private var titleLabel = UILabel()
    static let cellId = "LocationCell"
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setComponents()
        setLayout()
    }
    
    required init?(coder: NSCoder){
        super.init(coder: coder)
    }
    
    func setComponents(){
        setImageView()
        setNameLabel()
    }
    
    func setImageView(){
        self.contentView.addSubview(imageView)
        imageView.image = UIImage(systemName: "mappin.and.ellipse")
        imageView.layer.cornerRadius = 10
    }
    
    func setNameLabel(){
        self.contentView.addSubview(titleLabel)
        titleLabel.font = .systemFont(ofSize: 17)
    }
    
    
    func setLayout(){
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        imageView.topAnchor.constraint(equalTo: contentView.topAnchor).isActive = true
        imageView.widthAnchor.constraint(equalToConstant: 64).isActive = true
        imageView.heightAnchor.constraint(equalToConstant: 64).isActive = true
        imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor).isActive = true
        
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        titleLabel.leadingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: 16).isActive = true
        titleLabel.centerYAnchor.constraint(equalTo: contentView.centerYAnchor).isActive = true
        titleLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true
        titleLabel.heightAnchor.constraint(equalToConstant: 22).isActive = true
    }
    
    func setLocationData(_ title: String){
        titleLabel.text = title
    }
}
