//
//  SearchDateViewController.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/31.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

struct QueryParameter {
    var dateRange: Range<Date>?
    var place: Place?
    var priceRange: Range<Decimal>?
    var people: HeadCount?
}

struct HeadCount {
    let adults: Int
    let child: Int
    let infant: Int
}

class SearchDateViewController: UIViewController {

    var queryParameter: QueryParameter = QueryParameter() {
        didSet {
            queryParameterView.set(queryParameter)
        }
    }

    lazy var queryParameterView = QueryParameterStackView(queryParameter: queryParameter)
    
    lazy var calendarPickerVC = CalendarPickerViewController(baseDate: Date(), numOfMonths: CalendarPickerViewController.defaultNumberOfMonths)

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        setSubviews()
        setLayout()
    }

    private func setSubviews() {
        addChild(calendarPickerVC)
        view.addSubview(calendarPickerVC.view)
        calendarPickerVC.didMove(toParent: self)
        
        view.addSubview(queryParameterView)
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
            queryParameterView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor),
            queryParameterView.leadingAnchor.constraint(equalTo: view.readableContentGuide.leadingAnchor),
            queryParameterView.trailingAnchor.constraint(equalTo: view.readableContentGuide.trailingAnchor),
            queryParameterView.heightAnchor.constraint(equalToConstant: 44*4)
        ])

    }
}

