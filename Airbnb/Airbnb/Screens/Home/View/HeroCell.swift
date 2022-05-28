//
//  testCell.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/25.
//

import UIKit

final class HeroCell: UICollectionViewCell {
    static let id = "HeroCell"

    var cellViewModel: HeroCellViewModel? {
         didSet {
             guard let heroCellVM = cellViewModel else {return}
             title.text = heroCellVM.title
             content.text = heroCellVM.content
             badge.setTitle(heroCellVM.badge, for: .normal)
             imageView.image = UIImage(named: "\(heroCellVM.image)")
         }
     }

    private var title: UILabel = {
        let label = UILabel()
        label.numberOfLines = 0
        label.font = .largeRegular
        label.setContentHuggingPriority(.defaultHigh, for: .vertical)
        return label
    }()

    private var content: UILabel = {
        let label = UILabel()
        label.numberOfLines = 0
        label.font = .smallRegular
        return label
    }()

    private var badge: UIButton = {
        let button = UIButton()
        button.backgroundColor = .gray1
        button.layer.cornerRadius = 10
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()

    private var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleToFill
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()

    private lazy var stackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: [title, content])
        stackView.axis = .vertical
        stackView.spacing = 16
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
        contentView.addSubview(badge)
    }

    private func configureConstraints() {
        NSLayoutConstraint.activate([
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor),
            imageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            stackView.topAnchor.constraint(equalTo: imageView.topAnchor, constant: 24),
            stackView.trailingAnchor.constraint(equalTo: imageView.trailingAnchor, constant: -105),
            stackView.leadingAnchor.constraint(equalTo: imageView.leadingAnchor, constant: 16),
            badge.topAnchor.constraint(equalTo: stackView.bottomAnchor, constant: 16),
            badge.widthAnchor.constraint(equalToConstant: 165),
            badge.leadingAnchor.constraint(equalTo: stackView.leadingAnchor),
            badge.heightAnchor.constraint(equalToConstant: 36)
        ])
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

}
