//
//  LocalSiteCell.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/25.
//

import UIKit

final class CityCell: UICollectionViewCell {

    static let id = "CityCell"

    var cellViewModel: CityCellViewModel? {
         didSet {
             guard let cityCellVM = cellViewModel else {return}
             cityName.text = cityCellVM.name
             timeToTravel.text = cityCellVM.travelToTime
             imageView.image = UIImage(named: "\(cityCellVM.image)")
         }
     }

    private var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleToFill
        imageView.layer.cornerRadius = 10
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()

    private var cityName: UILabel = {
        let label  = UILabel()
        label.font = .smallBold
        return label
    }()

    private var timeToTravel: UILabel = {
        let label = UILabel()
        label.font = .smallRegular
        label.textColor = .gray3
        return label
    }()

    private lazy var stackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: [cityName, timeToTravel])
        stackView.axis = .vertical
        stackView.spacing = 4
        stackView.distribution = .fill
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        configureDisplay()
        configureConstraints()
    }

    private func configureDisplay() {
        contentView.addSubview(imageView)
        contentView.addSubview(stackView)
    }

    private func configureConstraints() {
        NSLayoutConstraint.activate([
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor),
            imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            imageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -contentView.frame.width/1.4),
            imageView.heightAnchor.constraint(equalTo: contentView.heightAnchor),
            stackView.leadingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: 16),
            stackView.centerYAnchor.constraint(equalTo: imageView.centerYAnchor)
        ])
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

}
