//
//  PriceSettingView.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/06/07.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit
import MultiSlider

class PriceSettingView: UIView {
    
    var price: Price?

    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "가격 범위"
        label.font = UIFont.cherrybnbBoldBody
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    lazy var rangeLabel: UILabel = {
        let label = UILabel()
        label.font = UIFont.cherrybnbBody
        
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    lazy var averageLabel: UILabel = {
        let label = UILabel()
        label.font = UIFont.systemFont(ofSize: 12)
        label.textColor = .systemGray
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var slider: MultiSlider = {
        let slider = MultiSlider()
        slider.orientation = .horizontal
        slider.addTarget(slider, action: #selector(sliderChanged(_:)), for: .valueChanged)
        slider.translatesAutoresizingMaskIntoConstraints = false
        slider.outerTrackColor = .systemGray
        slider.tintColor = .blue
        return slider
    }()
    
    var didChangePriceHistogram: ((Price,Price) -> Void)?
    
    override init(frame: CGRect){
        super.init(frame: frame)
        setSubviews()
        setLayout()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setSubviews(){
        self.addSubview(titleLabel)
        self.addSubview(rangeLabel)
        self.addSubview(averageLabel)
        self.addSubview(slider)
    }
    
    private func setLayout(){
        NSLayoutConstraint.activate([
            titleLabel.topAnchor.constraint(equalTo: self.safeAreaLayoutGuide.topAnchor, constant: 32),
            titleLabel.leadingAnchor.constraint(equalTo: self.safeAreaLayoutGuide.leadingAnchor, constant: 16),
            titleLabel.heightAnchor.constraint(equalToConstant: 22)
        ])
        
        NSLayoutConstraint.activate([
            rangeLabel.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 16),
            rangeLabel.leadingAnchor.constraint(equalTo: titleLabel.leadingAnchor),
            rangeLabel.heightAnchor.constraint(equalToConstant: 22)
        ])
        
        NSLayoutConstraint.activate([
            averageLabel.topAnchor.constraint(equalTo: rangeLabel.bottomAnchor, constant: 8),
            averageLabel.leadingAnchor.constraint(equalTo: titleLabel.leadingAnchor),
            averageLabel.heightAnchor.constraint(equalToConstant: 16)
        ])
        
        NSLayoutConstraint.activate([
            slider.centerXAnchor.constraint(equalTo: self.safeAreaLayoutGuide.centerXAnchor),
            slider.centerYAnchor.constraint(equalTo: self.safeAreaLayoutGuide.centerYAnchor),
            slider.widthAnchor.constraint(equalTo: self.safeAreaLayoutGuide.widthAnchor, constant: -32),
            slider.heightAnchor.constraint(equalToConstant: 10)
        ])
    }
    
    @objc private func sliderChanged(_ sender: MultiSlider){
        let min = Price(sender.value[0])
        let max = Price(sender.value[1])
        didChangePriceHistogram?(min,max)
    }
    
    func setContents(_ priceHistogram: PriceHistogram) {
        rangeLabel.text = "\(priceHistogram.min)₩ - \(priceHistogram.max)₩"
        averageLabel.text = "평균 1박 요금 가격은 \(priceHistogram.average)원 입니다."
        slider.minimumValue = CGFloat(priceHistogram.min)
        slider.maximumValue = CGFloat(priceHistogram.max)
        slider.value = [slider.minimumValue, slider.maximumValue]
    }
}
