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

    private let dateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "d"
        return dateFormatter
    }()

    private lazy var selectionBackgroundView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.clipsToBounds = true
        view.backgroundColor = .black
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

    override init(frame: CGRect) {
        super.init(frame: frame)
        setSubviews()
        setLayout()
    }

    var day: CalendarPicker.Day?

    func setDay(_ day: CalendarPicker.Day) {
        self.day = day
        guard let date = day.date, let isPast = day.isPast else { return }

        let dateString = dateFormatter.string(from: date)

        if isPast {
            numberLabel.attributedText = strikethrough(dateString)
        } else {
            numberLabel.text = dateString
        }
    }

    func strikethrough(_ string: String) -> NSAttributedString {
        let attributes: [NSAttributedString.Key: Any] = [.strikethroughStyle: NSUnderlineStyle.single.rawValue, .strikethroughColor: UIColor.systemGray, .foregroundColor: UIColor.systemGray]

        return NSAttributedString(string: string, attributes: attributes)

    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setSubviews() {
        contentView.addSubview(numberLabel)
    }

    private func setLayout() {
        NSLayoutConstraint.activate([
            numberLabel.centerYAnchor.constraint(equalTo: centerYAnchor),
            numberLabel.centerXAnchor.constraint(equalTo: centerXAnchor)
        ])
    }

    override func prepareForReuse() {
        day = nil
        numberLabel.text = ""
    }
}
