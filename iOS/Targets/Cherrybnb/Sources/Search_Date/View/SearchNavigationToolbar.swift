//
//  SearchNavigationToolBar.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/06/07.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class SearchNavigationToolbar: UIToolbar {

    private var skipButton = UIBarButtonItem(title: "건너뛰기", style: .plain, target: nil, action: #selector(skipButtonTouched))
    private var emptySpace = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
    private var resetButton = UIBarButtonItem(title: "지우기", style: .plain, target: nil, action: #selector(resetButtonTouched))
    private var nextButton = UIBarButtonItem(title: "다음", style: .plain, target: nil, action: #selector(nextButtonTouched))

    override init(frame: CGRect) {
        super.init(frame: frame)
        self.translatesAutoresizingMaskIntoConstraints = false
        setSubviews()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    private func setSubviews() {
        nextButton.isEnabled = false
        setItems([skipButton, emptySpace, nextButton], animated: false)
    }

    var didTouchReset: (() -> Void)?
    var didTouchSkip: (() -> Void)?
    var didTouchNext: (() -> Void)?

    @objc private func nextButtonTouched(_ sender: UIButton) {
        didTouchNext?()
    }

    @objc private func skipButtonTouched(_ sender: UIButton) {
        didTouchSkip?()
    }

    @objc private func resetButtonTouched(_ sender: UIButton) {
        showSkipButton()
        didTouchReset?()
    }

    func enableNextButton() {
        nextButton.isEnabled = true
    }

    func disableNextButton() {
        nextButton.isEnabled = false
    }

    func showResetButton() {
        items?[0] = resetButton
    }

    func showSkipButton() {
        items?[0] = skipButton
    }
}
