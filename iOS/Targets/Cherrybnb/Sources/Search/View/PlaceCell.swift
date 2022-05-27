//
//  PlaceCollectionViewCell.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/25.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class PlaceCell: UICollectionViewCell {
    private var imageView = UIImageView()
    private var nameLabel = UILabel()
    private var distanceLabel = UILabel()
    static let cellId = "placeCell"
    
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
        setDistanceLabel()
    }
    
    func setImageView(){
        self.contentView.addSubview(imageView)
        imageView.image = UIImage(named: "Place_thumb_1")
        imageView.layer.cornerRadius = 10
    }
    
    func setNameLabel(){
        self.contentView.addSubview(nameLabel)
        nameLabel.font = .systemFont(ofSize: 17)
        nameLabel.text = "서울"
    }
    
    func setDistanceLabel(){
        self.contentView.addSubview(distanceLabel)
        distanceLabel.font = .systemFont(ofSize: 17)
        distanceLabel.textColor = .systemGray
        distanceLabel.text = "차로 30분 거리"
    }
    
    func setLayout(){
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        imageView.topAnchor.constraint(equalTo: contentView.topAnchor).isActive = true
        imageView.widthAnchor.constraint(equalToConstant: 64).isActive = true
        imageView.heightAnchor.constraint(equalToConstant: 64).isActive = true
        imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor).isActive = true
        
        nameLabel.translatesAutoresizingMaskIntoConstraints = false
        nameLabel.leadingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: 16).isActive = true
        nameLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8).isActive = true
        nameLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true
        nameLabel.heightAnchor.constraint(equalToConstant: 22).isActive = true
        
        distanceLabel.translatesAutoresizingMaskIntoConstraints = false
        distanceLabel.leadingAnchor.constraint(equalTo: nameLabel.leadingAnchor).isActive = true
        distanceLabel.topAnchor.constraint(equalTo: nameLabel.bottomAnchor, constant: 4).isActive = true
        distanceLabel.heightAnchor.constraint(equalToConstant: 22).isActive = true
        distanceLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -16).isActive = true
    }
    
    func setPlaceCell(_ place: Place){
        nameLabel.text = place.name
        distanceLabel.text = "차로 \(place.estimatedTime)분 거리"
        
    }
    
    
}
