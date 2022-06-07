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

    lazy var queryParameterStackView = QueryParameterStackView(queryParameter: queryParameter)

    lazy var calendarPickerVC = CalendarPickerViewController(baseDate: Date(), numOfMonths: CalendarPickerViewController.defaultNumberOfMonths)

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        setSubviews()
        setLayout()
        setHandler()
    }

    private func setSubviews() {
        addChild(calendarPickerVC)
        view.addSubview(calendarPickerVC.view)
        calendarPickerVC.didMove(toParent: self)

        view.addSubview(queryParameterStackView)
    }

    private func setHandler() {
        calendarPickerVC.didSelectDate { [weak self] daySelection in
            self?.queryParameter.dateRange = (daySelection.checkIn?.date, daySelection.checkOut?.date)
        }
    }

    private func setLayout() {
        calendarPickerVC.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            calendarPickerVC.view.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
            calendarPickerVC.view.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            calendarPickerVC.view.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            calendarPickerVC.view.heightAnchor.constraint(equalTo: view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.7)
        ])

        NSLayoutConstraint.activate([
            queryParameterStackView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor),
            queryParameterStackView.leadingAnchor.constraint(equalTo: view.readableContentGuide.leadingAnchor),
            queryParameterStackView.trailingAnchor.constraint(equalTo: view.readableContentGuide.trailingAnchor),
            queryParameterStackView.heightAnchor.constraint(equalToConstant: 44*4)
        ])

    }
}
