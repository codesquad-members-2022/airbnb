//
//  QueryParameterStackView.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/06/06.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class QueryParameterStackView: UIStackView {

    // MARK: - Subviews
    
    lazy var parameterRow: (String, String) -> UIStackView = { keyText, valueText in
        let stackView = UIStackView()
        stackView.axis = .horizontal
        let keyLabel = self.parameterKeyLabel(keyText)
        let valueLabel = self.parameterValueLabel(valueText)
        stackView.addArrangedSubview(keyLabel)
        stackView.addArrangedSubview(valueLabel)
        return stackView
    }

    lazy var parameterKeyLabel: (String) -> UILabel = { text in
        let label = UILabel()
        label.text = text
        label.textAlignment = .left
        return label
    }

    lazy var parameterValueLabel: (String) -> UILabel = { text in
        let label = UILabel()
        label.text = text
        label.textAlignment = .right
        label.textColor = .gray
        return label
    }
    
    // MARK: - Properties
    
    var queryParameter: QueryParameter?

    // MARK: - Public Methods
    
    init(queryParameter: QueryParameter?) {
        self.queryParameter = queryParameter
        super.init(frame: .zero)
        setDisplay()
        setSubviews()
    }

    required init(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func setContent(_ queryParameter: QueryParameter) {
        self.queryParameter = queryParameter
        removeSubviews()
        setSubviews()
    }
    
    // MARK: - Private (helper) methods

    private func removeSubviews() {
        self.subviews.forEach { subview in
            subview.removeFromSuperview()
        }
    }

    private func setDisplay() {
        self.translatesAutoresizingMaskIntoConstraints = false
        self.axis = .vertical
        self.spacing = 2
        self.distribution = .fillEqually
    }

    private func setSubviews() {
        for (keyText, valueText) in toString(queryParameter) {
            let parameterRow = parameterRow(keyText, valueText)
            addArrangedSubview(parameterRow)
        }
    }

    private func toString(_ queryParameter: QueryParameter?) -> [(String, String)] {
        let locationString = toString(queryParameter?.place)
        let dateString = toString(queryParameter?.dateRange)

        // TODO: Formatting Logic for price & headCount
        let priceString = ""
        let headCountString = ""

        return [
            ("위치", locationString),
            ("체크인/체크아웃", dateString),
            ("요금", priceString),
            ("인원", headCountString)
        ]
    }

    private func toString(_ place: Place?) -> String {
        return place?.name ?? ""
    }

    private func toString(_ range: (Date?, Date?)?) -> String {
        guard let range = range else { return "" }

        let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "MMM d일"
        dateFormatter.locale = Locale(identifier: "ko")

        switch range {
        case (.some(let checkIn), .some(let checkOut)):
            return dateFormatter.string(from: checkIn) + " - " + dateFormatter.string(from: checkOut)
        case (.some(let checkIn), _):
            return dateFormatter.string(from: checkIn)
        default: return ""
        }
    }
}
