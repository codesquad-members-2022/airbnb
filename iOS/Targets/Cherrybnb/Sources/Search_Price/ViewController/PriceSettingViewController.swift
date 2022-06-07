//
//  PriceSettingViewController.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/07.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class PriceSettingViewController: UIViewController {
    
    private var priceSettingView = PriceSettingView()
    var queryParameter: QueryParameter?
    
    // TODO: Merge 후 QueryParameterStackView 로 변경
    lazy var queryParameterView: UIView = {
        let view = UIView()
        view.backgroundColor = .systemGray
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()

    override func viewWillAppear(_ animated: Bool) {
        view.backgroundColor = .white
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let priceSuccessStubRequest = SearchManager(httpService: PriceSuccessStub())
        priceSuccessStubRequest.searchPriceFrequency(queryComponent: queryParameter ?? QueryParameter()) { [weak self] price in
            guard let price = price, let self = self else { return }
            self.priceSettingView.setContents(price)
        }
        setSubviews()
        setLayout()
    }

    private func setSubviews() {
        view.addSubview(priceSettingView)
        view.addSubview(queryParameterView)
    }

    private func setLayout() {
        priceSettingView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            priceSettingView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
            priceSettingView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            priceSettingView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            priceSettingView.heightAnchor.constraint(equalTo: view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.7)
        ])

        NSLayoutConstraint.activate([
            queryParameterView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            queryParameterView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            queryParameterView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            queryParameterView.heightAnchor.constraint(equalTo: view.safeAreaLayoutGuide.heightAnchor, multiplier: 0.25)
        ])
    }

}
