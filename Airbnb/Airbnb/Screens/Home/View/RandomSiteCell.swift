//
//  RandomSiteCell.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/25.
//

import UIKit

final class RandomSiteCell: UICollectionViewCell {

    static let id = "RandomSiteCell"

    var cellViewModel: RandomSiteCellViewModel? {
         didSet {
             guard let randomSiteCellVM = cellViewModel else {return}
             content.text = randomSiteCellVM.content
             imageView.image = UIImage(named: "\(randomSiteCellVM.image)")
         }
     }

    private var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleToFill
        imageView.layer.cornerRadius = 10
        return imageView
    }()

    private var content: UILabel = {
        let label  = UILabel()
        label.font = .smallBold
        return label
    }()

    private lazy var stackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: [imageView, content])
        stackView.axis = .vertical
        stackView.spacing = 4
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        configureDisplay()
        configureConstraints()
    }

    private func configureDisplay() {
        contentView.addSubview(stackView)
    }

    private func configureConstraints() {
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            stackView.heightAnchor.constraint(equalTo: contentView.heightAnchor)
        ])
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

}
