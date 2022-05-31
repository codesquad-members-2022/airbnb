//
//  PriceGraphViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import Foundation
import UIKit
import SnapKit

class PriceGraphViewController: UIViewController {
    
    private let viewPadding: CGFloat = 16
    
    private let graph = ColumnGraphView()
    private var editableWidth: Constraint?
    private let slider: UISlider = {
        let slider = UISlider()
        slider.minimumValue = 0
        slider.maximumValue = 1
        slider.thumbTintColor = UIColor(named: "Grey3")
        slider.setThumbImage(UIImage(named: "PauseCircle"), for: .normal)
        return slider
    }()
    
    private lazy var priceLabel: (String) -> UILabel = {
        let label = UILabel()
        label.text = $0
        label.textColor = UIColor(named: "Grey1")
        self.view.addSubview(label)
        return label
    }
    
    private let lightGrayView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor(named: "Grey4")
        return view
    }()
    
    let semanticGrayView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor(named: "Grey3")
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let titleLabel = priceLabel("가격 범위")
        let minimumLabel = priceLabel("\(NumberFormatter.localizedString(from: 11000, number: .currency))")
        let slashLabel = priceLabel("-")
        let maximumLabel = priceLabel("\(NumberFormatter.localizedString(from: 1000000, number: .currency))")
        
        let largeFont = UIFont(name: titleLabel.font.fontName, size: 17)
        let smallFont = UIFont(name: titleLabel.font.fontName, size: 12)
        
        titleLabel.font = largeFont
        minimumLabel.font = largeFont
        maximumLabel.font = largeFont
        
        titleLabel.snp.makeConstraints { make in
            make.top.equalTo(self.view.safeAreaLayoutGuide).inset(32)
            make.leading.equalTo(viewPadding)
        }
        
        minimumLabel.snp.makeConstraints { make in
            make.top.equalTo(titleLabel.snp.bottom).offset(32)
            make.leading.equalTo(viewPadding)
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
        descriptionLabel.font = smallFont
        descriptionLabel.textColor = UIColor(named: "Grey3")
        
        descriptionLabel.snp.makeConstraints { make in
            make.top.equalTo(minimumLabel.snp.bottom).offset(8)
            make.leading.equalTo(viewPadding)
        }
        
        graph.drawGraph(distribution: [0.3, 0.4, 0.9, 0.65, 1, 0.65, 0.8, 0.8, 0.75, 0.8, 0.25, 0.5, 0.2, 0.05, 0.23, 0.4, 0.2, 0.0, 0.5, 0.1])
        view.addSubview(graph)
        
        graph.snp.makeConstraints { make in
            make.top.equalTo(descriptionLabel.snp.bottom).offset(48)
            make.leading.equalTo(viewPadding)
            make.trailing.equalTo(-1*viewPadding)
            make.height.equalTo(100)
        }
        
        graph.addSubview(lightGrayView)
        
        lightGrayView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
        
        view.addSubview(slider)
        
        graph.addSubview(semanticGrayView)

        semanticGrayView.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
            $0.leading.equalTo(viewPadding)
            self.editableWidth = $0.width.equalTo(self.graph.frame.width * CGFloat(self.slider.value)).constraint
        }
        
        slider.snp.makeConstraints { make in
            make.top.equalTo(self.graph.snp.bottom)
            make.leading.equalTo(viewPadding)
            make.trailing.equalTo(-1 * viewPadding)
        }
        
        slider.addTarget(self, action: #selector(sliderValueChanged(_:)), for: .valueChanged)
    }
    
    @objc func sliderValueChanged(_ sender: UISlider) {
        let width = self.graph.frame.width * CGFloat(slider.value)
        self.editableWidth?.update(offset: width)
        super.updateViewConstraints()
    }
}


