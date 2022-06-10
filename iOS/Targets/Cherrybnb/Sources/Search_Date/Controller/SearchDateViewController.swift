//
//  SearchDateViewController.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/31.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class SearchDateViewController: UIViewController {

    var queryParameter: QueryParameter = QueryParameter() {
        didSet {
            queryParameterStackView.setContent(queryParameter)
        }
    }

    private var toolbar = SearchNavigationToolbar()

    private var calendarPickerVC = CalendarPickerViewController(baseDate: Date(), numOfMonths: CalendarPickerViewController.defaultNumberOfMonths)

    private lazy var queryParameterStackView: QueryParameterStackView = {
        return QueryParameterStackView(queryParameter: queryParameter)
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        
        setSubviews()
        setLayout()
        setCalendarPickerHandler()
        setToolbarHandler()
    }

    private func setSubviews() {
        addChild(calendarPickerVC)
        view.addSubview(calendarPickerVC.view)
        calendarPickerVC.didMove(toParent: self)

        view.addSubview(queryParameterStackView)
        view.addSubview(toolbar)
    }

    private func setLayout() {
        NSLayoutConstraint.activate([
            toolbar.bottomAnchor.constraint(equalToSystemSpacingBelow: view.safeAreaLayoutGuide.bottomAnchor, multiplier: 0),
            toolbar.leadingAnchor.constraint(equalToSystemSpacingAfter: view.safeAreaLayoutGuide.leadingAnchor, multiplier: 0),
            toolbar.trailingAnchor.constraint(equalToSystemSpacingAfter: view.safeAreaLayoutGuide.trailingAnchor, multiplier: 0)
        ])

        NSLayoutConstraint.activate([
            queryParameterStackView.bottomAnchor.constraint(equalTo: toolbar.topAnchor),
            queryParameterStackView.leadingAnchor.constraint(equalTo: view.readableContentGuide.leadingAnchor),
            queryParameterStackView.trailingAnchor.constraint(equalTo: view.readableContentGuide.trailingAnchor),
            queryParameterStackView.heightAnchor.constraint(equalToConstant: 44*4)
        ])

        NSLayoutConstraint.activate([
            calendarPickerVC.view.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
            calendarPickerVC.view.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            calendarPickerVC.view.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            calendarPickerVC.view.bottomAnchor.constraint(equalTo: queryParameterStackView.topAnchor, constant: -16)
        ])
    }

}

// MARK: - Handling CalendarPicker

extension SearchDateViewController {
    private func setCalendarPickerHandler() {
        calendarPickerVC.didSelectDate { [weak self] daySelection in
            self?.queryParameter.dateRange = (daySelection.checkIn?.date, daySelection.checkOut?.date)
            self?.updateToolbarItems(daySelection: daySelection)
        }
    }
}

// MARK: - Handling Navigation Toolbar

extension SearchDateViewController {

    private func setToolbarHandler() {
        toolbar.didTouchNext = { [weak self] in
            guard let self = self else { return }
            let nextVC = PriceSettingViewController()
            nextVC.queryParameter = self.queryParameter
            self.navigationController?.pushViewController(nextVC, animated: true)
            
        }

        toolbar.didTouchSkip = { [weak self] in
            let nextVC = UIViewController()
            // TODO: query 파라미터 초기화 후 주입
            self?.navigationController?.pushViewController(nextVC, animated: true)
        }

        toolbar.didTouchReset = { [weak self] in
            self?.calendarPickerVC.deselectAll()
        }
    }

    func updateToolbarItems(daySelection: DaySelection) {
        switch (daySelection.checkIn, daySelection.checkOut) {
        case (.some, .some):
            toolbar.enableNextButton()
        case (.some, nil):
            toolbar.showResetButton()
            toolbar.disableNextButton()
        case (nil, nil):
            toolbar.showSkipButton()
            toolbar.disableNextButton()
        default:
            break
        }
    }
}
