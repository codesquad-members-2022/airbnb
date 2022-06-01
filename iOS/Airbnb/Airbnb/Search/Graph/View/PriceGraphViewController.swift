//
//  PriceGraphViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import UIKit
import SnapKit

class PriceGraphViewController: BackgroundViewController, CommonViewControllerProtocol {
    
    private let viewPadding: CGFloat = 16
    
    private let graph = ColumnGraphView()
    private var editableWidth: Constraint?
    private let slider: UISlider = {
        let slider = UISlider()
        slider.minimumValue = 0
        slider.maximumValue = 1
        slider.thumbTintColor = UIColor.getGrayScale(.Grey3)
        slider.tintColor = UIColor.getGrayScale(.Grey3)
        return slider
    }()
    
    // 그래프의 선택되지 않는 희미한 부분
    private let lightGrayView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.getGrayScale(.Grey4)
        return view
    }()
    
    // 그래프에서 선택되는 진한 부분
    let semanticGrayView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.getGrayScale(.Grey3)
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        attribute()
        layout()
        bind()
    }
    
    func attribute() {
        graph.drawGraph(distribution: [0.3, 0.4, 0.9, 0.65, 1, 0.65, 0.8, 0.8, 0.75, 0.8, 0.25, 0.5, 0.2, 0.05, 0.23, 0.4, 0.2, 0.0, 0.5, 0.1])
        view.backgroundColor = .systemBackground
        navigationItem.title = "숙소 찾기"
    }
    
    func layout() {
        let titleLabel = priceLabel("가격 범위")
        let priceRangeLabel = priceLabel("₩\(NumberFormatter.localizedString(from: 11000, number: .decimal)) - ₩\(NumberFormatter.localizedString(from: 1000000, number: .decimal))")
        
        let labelFont: (CGFloat) -> UIFont? = { size in
            UIFont(name: titleLabel.font.fontName, size: size)
        }
        
        titleLabel.font = labelFont(17)
        priceRangeLabel.font = labelFont(17)
        
        titleLabel.snp.makeConstraints { make in
            make.top.equalTo(self.view.safeAreaLayoutGuide).inset(32)
            make.leading.equalTo(self.view.safeAreaLayoutGuide).offset(viewPadding)
            make.trailing.equalTo(self.view.safeAreaLayoutGuide).inset(viewPadding)
        }
        
        priceRangeLabel.snp.makeConstraints { make in
            make.top.equalTo(titleLabel.snp.bottom).offset(viewPadding)
            make.leading.trailing.equalTo(titleLabel)
        }
        
        let descriptionLabel = priceLabel("평균 1박 요금은 ₩165,556 입니다.")
        descriptionLabel.font = labelFont(12)
        descriptionLabel.textColor = UIColor.getGrayScale(.Grey3)
        descriptionLabel.snp.makeConstraints { make in
            make.top.equalTo(priceRangeLabel.snp.bottom).offset(8)
            make.leading.trailing.equalTo(titleLabel)
        }
        
        view.addSubview(graph)
        graph.addSubview(lightGrayView)
        graph.addSubview(semanticGrayView)
        view.addSubview(slider)
        
        graph.snp.makeConstraints { make in
            make.top.equalTo(descriptionLabel.snp.bottom).offset(48)
            make.leading.trailing.equalTo(titleLabel)
            make.height.equalTo(100)
        }
        
        lightGrayView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }

        semanticGrayView.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
            $0.leading.equalTo(graph)
            self.editableWidth = $0.width.equalTo(self.graph.frame.width * CGFloat(self.slider.value)).constraint
        }
        
        slider.snp.makeConstraints { make in
            make.top.equalTo(self.graph.snp.bottom)
            make.leading.trailing.equalTo(graph)
        }
    }
    
    func bind() {
        slider.addTarget(self, action: #selector(sliderValueChanged(_:)), for: .valueChanged)
    }
    
    private func priceLabel(_ labelText: String) -> UILabel {
        let label = UILabel()
        label.text = labelText
        label.textColor = UIColor.getGrayScale(.Grey1)
        label.textAlignment = .left
        label.adjustsFontSizeToFitWidth = true
        view.addSubview(label)
        return label
    }
    
    @objc func sliderValueChanged(_ sender: UISlider) {
        let width = self.graph.frame.width * CGFloat(slider.value)
        self.editableWidth?.update(offset: width)
        super.updateViewConstraints()
    }
}


