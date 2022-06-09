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
    
    var queryParameter: QueryParameter = QueryParameter() {
        didSet {
            queryParameterStackView.setContent(queryParameter)
        }
    }
    
    private var toolbar = SearchNavigationToolbar()
    
    private lazy var queryParameterStackView: QueryParameterStackView = {
       return QueryParameterStackView(queryParameter: queryParameter)
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        
        setSubviews()
        setLayout()
        setPriceSettingHandler()
        searchPriceHistrgram()
    }
    
    private func searchPriceHistrgram() {
        let priceSuccessStub = PriceSuccessStub()
        let searchManager = SearchManager(httpService: priceSuccessStub)
        
        searchManager.searchPriceHistogram(queryComponent: queryParameter) { [weak self] price in
            guard let price = price, let self = self else { return }
            self.priceSettingView.setContents(price)
        }
    }

    private func setSubviews() {
        view.addSubview(priceSettingView)
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
        
        priceSettingView.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            priceSettingView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
            priceSettingView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            priceSettingView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            priceSettingView.bottomAnchor.constraint(equalTo: queryParameterStackView.topAnchor, constant: -16)
        ])
    }
    
    private func setPriceSettingHandler() {
        priceSettingView.didChangePriceHistogram = { [weak self] (min,max) in
            guard let self = self else { return }
            self.queryParameter.priceRange = (min,max)
        }
    }

}
