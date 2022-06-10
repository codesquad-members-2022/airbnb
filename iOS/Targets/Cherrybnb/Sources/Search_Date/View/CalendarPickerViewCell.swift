//
//  CalendarPickerCollectionViewCell.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class CalendarPickerViewCell: UICollectionViewCell {
    static let reuseIdentifier = String(describing: CalendarPickerViewCell.self)

    // MARK: - Subviews

    private let dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "d"
        return dateFormatter
    }()

    private lazy var selectionBackgroundView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.layer.cornerRadius = 20
        view.clipsToBounds = true
        view.backgroundColor = .black
        view.isHidden = true
        return view
    }()

    private lazy var inBetweenSelectionBackgroundView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .lightGray
        view.isHidden = true
        return view
    }()

    private lazy var numberLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textAlignment = .center
        label.font = UIFont.systemFont(ofSize: 18, weight: .medium)
        label.textColor = .label
        return label
    }()

    // MARK: - Initializers

    override init(frame: CGRect) {
        super.init(frame: frame)
        setSubviews()
        setLayout()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Public Method

    func setContent(_ day: Day) {
        guard day.isWithinMonth else { return }

        let dateString = dateFormatter.string(from: day.date)

        if day.isSelected {
            selectionBackgroundView.isHidden = false
            numberLabel.attributedText = selected(dateString)
        } else if day.isBetweenSelection {
            inBetweenSelectionBackgroundView.isHidden = false
            numberLabel.attributedText = normal(dateString)
        } else if day.isPast {
            numberLabel.attributedText = strikethrough(dateString)
        } else {
            numberLabel.attributedText = normal(dateString)
        }
    }

    override func prepareForReuse() {
        numberLabel.text = nil
        numberLabel.attributedText = nil
        selectionBackgroundView.isHidden = true
        inBetweenSelectionBackgroundView.isHidden = true
    }

    // MARK: - Private (helper) methods

    private func setSubviews() {
        contentView.addSubview(inBetweenSelectionBackgroundView)
        contentView.addSubview(selectionBackgroundView)
        contentView.addSubview(numberLabel)
    }

    private func setLayout() {
        NSLayoutConstraint.activate([
            numberLabel.centerYAnchor.constraint(equalTo: centerYAnchor),
            numberLabel.centerXAnchor.constraint(equalTo: centerXAnchor)
        ])

        NSLayoutConstraint.activate([
            selectionBackgroundView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            selectionBackgroundView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            selectionBackgroundView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            selectionBackgroundView.topAnchor.constraint(equalTo: contentView.topAnchor)
        ])

        NSLayoutConstraint.activate([
            inBetweenSelectionBackgroundView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            inBetweenSelectionBackgroundView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            inBetweenSelectionBackgroundView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor),
            inBetweenSelectionBackgroundView.topAnchor.constraint(equalTo: contentView.topAnchor)
        ])
    }

    private func selected(_ string: String) -> NSAttributedString {
        let attributes: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 18, weight: .medium),
            .strikethroughStyle: "nil",
            .foregroundColor: UIColor.white
        ]

        return NSAttributedString(string: string, attributes: attributes)
    }

    private func strikethrough(_ string: String) -> NSAttributedString {
        let attributes: [NSAttributedString.Key: Any] = [
            .strikethroughStyle: NSUnderlineStyle.single.rawValue,
            .strikethroughColor: UIColor.systemGray,
            .foregroundColor: UIColor.systemGray]

        return NSAttributedString(string: string, attributes: attributes)
    }

    private func normal(_ string: String) -> NSAttributedString {
        let attributes: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 18, weight: .medium),
            .strikethroughStyle: "nil",
            .foregroundColor: UIColor.black
        ]

        return NSAttributedString(string: string, attributes: attributes)
    }
}
