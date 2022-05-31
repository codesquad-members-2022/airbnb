//
//  PriceGraphViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import Foundation
import UIKit

class PriceGraphViewController: UIViewController {
    
    private let graph = ColumnGraphView()
    private let slider: UISlider = {
        let slider = UISlider()
        slider.minimumValue = 0
        slider.maximumValue = 100
        return slider
    }()
    
    private let priceFont = UIFont(name: "SF Pro Display", size: 17)
    private lazy var priceLabel: (String) -> UILabel = {
        let label = UILabel()
        label.text = $0
        label.font = self.priceFont
        self.view.addSubview(label)
        return label
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let titleLabel = priceLabel("가격 범위")
        let minimumLabel = priceLabel("\(NumberFormatter.localizedString(from: 11000, number: .currency))")
        let slashLabel = priceLabel("-")
        let maximumLabel = priceLabel("\(NumberFormatter.localizedString(from: 1000000, number: .currency))")
        
        titleLabel.snp.makeConstraints { make in
            make.top.equalTo(self.view.safeAreaLayoutGuide).inset(32)
            make.leading.equalTo(16)
        }
        
        minimumLabel.snp.makeConstraints { make in
            make.top.equalTo(titleLabel.snp.bottom).offset(32)
            make.leading.equalTo(16)
        }
        
        slashLabel.snp.makeConstraints { make in
            make.leading.equalTo(minimumLabel.snp.trailing).offset(8)
            make.centerY.equalTo(minimumLabel)
        }
        
        maximumLabel.snp.makeConstraints { make in
            make.leading.equalTo(slashLabel.snp.trailing).offset(8)
            make.centerY.equalTo(minimumLabel)
        }
        
        let descriptionLabel = priceLabel("평균 1박 요금은 ₩165,556 입니다.")
        descriptionLabel.font = UIFont(name: descriptionLabel.font.fontName, size: 12)
        descriptionLabel.textColor = UIColor(named: "Gray3")
        
        descriptionLabel.snp.makeConstraints { make in
            make.top.equalTo(minimumLabel.snp.bottom).offset(8)
            make.leading.equalTo(16)
        }
        
        graph.drawGraph(distribution: [30, 40, 90, 65, 100, 65, 80, 80, 75, 80, 25, 50, 20, 5, 23, 40, 20, 0, 5, 10])
        view.addSubview(graph)
        
        graph.snp.makeConstraints { make in
            make.top.equalTo(descriptionLabel.snp.bottom).offset(48)
            make.leading.equalTo(16)
            make.trailing.equalTo(-16)
            make.height.equalTo(100)
        }
        
        view.addSubview(slider)
        
        slider.snp.makeConstraints { make in
            make.top.equalTo(self.graph.snp.bottom)
            make.leading.equalTo(16)
            make.trailing.equalTo(-16)
        }
    }
}


