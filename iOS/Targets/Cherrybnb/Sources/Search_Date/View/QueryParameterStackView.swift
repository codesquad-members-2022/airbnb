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
        stackView.spacing = 8
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
        label.setContentCompressionResistancePriority(.defaultHigh, for: .horizontal)
        return label
    }

    lazy var parameterValueLabel: (String) -> UILabel = { text in
        let label = UILabel()
        label.text = text
        label.textAlignment = .right
        label.textColor = .gray
        label.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)
        return label
    }

    // MARK: - Properties

    var queryParameter: QueryParameter?
    var formatter = QueryParameterFormatter()

    // MARK: - Initializers

    init(queryParameter: QueryParameter?) {
        self.queryParameter = queryParameter
        super.init(frame: .zero)
        setDisplay()
        setSubviews()
    }

    required init(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Public Method

    func setContent(_ queryParameter: QueryParameter) {
        self.queryParameter = queryParameter
        removeSubviews()
        setSubviews()
    }

    // MARK: - Private (helper) Method

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
        for (keyText, valueText) in formatter.toString(queryParameter) {
            let parameterRow = parameterRow(keyText, valueText)
            addArrangedSubview(parameterRow)
        }
    }

    
}
