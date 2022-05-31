//
//  FilterForm.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/31.
//

import UIKit

final class FilterListCell: UICollectionViewListCell {

    static let id = "FilterFormCell"

    var field: UILabel = {
        let label = UILabel()
        label.font = .mediumRegular
        label.textAlignment = .left
        return label
    }()

    var fieldValue: UILabel = {
        let label = UILabel()
        label.font = .mediumRegular
        label.textColor = .secondarySystemBackground
        label.textAlignment = .right
        return label
    }()

    lazy var stackView: UIStackView = {
        let stackView = UIStackView(arrangedSubviews: [field, fieldValue])
        stackView.distribution = .fillProportionally
        stackView.axis = .horizontal
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
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            stackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            stackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
