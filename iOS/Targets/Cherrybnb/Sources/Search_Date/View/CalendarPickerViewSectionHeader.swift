//
//  CalendarPickerViewSectionHeader.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/30.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class CalendarPickerViewSectionHeader: UICollectionReusableView {
    static let reuseIdentifier = String(describing: CalendarPickerViewSectionHeader.self)

    private lazy var headerLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 18, weight: .medium)
        label.textColor = .label
        return label
    }()

    private let monthFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy년 MM월"
        dateFormatter.locale = Locale(identifier: "ko_KR")
        return dateFormatter
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = .white
        setSubviews()
        setLayout()
    }

    private var month: Month?

    func setMonth(_ month: Month) {
        self.month = month
        headerLabel.text = monthFormatter.string(from: month.firstDay)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setSubviews() {
        self.addSubview(headerLabel)
    }

    private func setLayout() {
        NSLayoutConstraint.activate([
            headerLabel.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor, constant: 8),
            headerLabel.trailingAnchor.constraint(equalTo: self.layoutMarginsGuide.trailingAnchor),
            headerLabel.topAnchor.constraint(equalTo: self.layoutMarginsGuide.topAnchor),
            headerLabel.bottomAnchor.constraint(equalTo: self.layoutMarginsGuide.bottomAnchor)
        ])
    }
}
