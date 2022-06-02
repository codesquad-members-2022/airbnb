//
//  SearchDateViewController.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/31.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

struct QueryParameter {
    var location: Location?
    var dateRange: Range<Date>?
    var place: Place?
}

class SearchDateViewController: UIViewController {

    let calendarPickerVC = CalendarPickerViewController(baseDate: Date(), numOfMonths: CalendarPickerViewController.defaultNumberOfMonths)
    
    lazy var queryParameterView: UIView = {
        let view = UIView()
        view.backgroundColor = .systemGray
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    var queryParameter: QueryParameter?
    
    override func viewWillAppear(_ animated: Bool) {
        view.backgroundColor = .white
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
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
            calendarPickerVC.view.heightAnchor.constraint(equalTo: view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.7),
        ])
        
        NSLayoutConstraint.activate([
            queryParameterView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            queryParameterView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            queryParameterView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            queryParameterView.heightAnchor.constraint(equalTo: view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.25),
        ])
        
    }
}
