//
//  PriceGraphViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import UIKit
import SnapKit

class PriceGraphViewController: SearchInfoTrackingViewController, CommonViewControllerProtocol {
    
    private let viewPadding: CGFloat = 16
    
    private let graph = ColumnGraphView()
    private var editableLeading: Constraint?
    private var editableTrailing: Constraint?
    private var slider = CustomRangeSlider(frame: .zero)
    
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
    
    private let lowestPrice: UInt = 100000
    private let highestPrice: UInt = 1000000
    private let distribution: [Float] = [0.3, 0.4, 0.9, 0.65, 1, 0.65, 0.8, 0.8, 0.75, 0.8, 0.25, 0.5, 0.2, 0.05, 0.23, 0.4, 0.2, 0.0, 0.5, 0.1]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        attribute()
        layout()
        bind()
    }
    
    func attribute() {
        setPriceRange(lowestPrice, highestPrice)
        graph.drawGraph(distribution: distribution)
        view.backgroundColor = .systemBackground
        navigationItem.title = "숙소 찾기"
        self.toolbarItems = setUpToolBarItems()
    }
    
    func layout() {
        
        let localizedDecimal: (UInt) -> String = {
            "₩\(NumberFormatter.localizedString(from: $0 as NSNumber, number: .decimal))"
        }
        
        let titleLabel = priceLabel("가격 범위")
        let priceRangeLabel = priceLabel(localizedDecimal(lowestPrice) + " - " + localizedDecimal(highestPrice) + "+")
        
        let labelFont: (CGFloat) -> UIFont? = { size in
            UIFont(name: titleLabel.font.fontName, size: size)
        }
        
        titleLabel.font = labelFont(17)
        priceRangeLabel.font = labelFont(17)
        
        titleLabel.snp.makeConstraints { make in
            make.top.equalTo(self.contentView).inset(32)
            make.leading.equalTo(self.contentView).offset(viewPadding)
            make.trailing.equalTo(self.contentView).inset(viewPadding)
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
        
        contentView.addSubview(graph)
        graph.addSubview(lightGrayView)
        graph.addSubview(semanticGrayView)
        
        contentView.addSubview(slider)
        
        graph.snp.makeConstraints { make in
            make.top.equalTo(descriptionLabel.snp.bottom).offset(48)
            make.leading.trailing.equalTo(titleLabel)
            make.height.equalTo(100)
        }
        
        graph.layoutIfNeeded()
        
        lightGrayView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }

        semanticGrayView.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
            self.editableLeading = $0.leading.equalTo(graph).inset(graph.frame.width * slider.lowerValue).constraint
            self.editableTrailing = $0.trailing.equalTo(graph).inset(graph.frame.width * (slider.maximumValue - slider.upperValue)).constraint
        }
        
        slider.snp.makeConstraints { make in
            make.top.equalTo(self.graph.snp.bottom).inset(9)
            make.leading.trailing.equalTo(graph)
            make.height.equalTo(20)
        }
        
        slider.layoutIfNeeded()
        slider.updateLayerFrames()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
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
        contentView.addSubview(label)
        return label
    }
    
    private func setUpToolBarItems() -> [UIBarButtonItem] {
        let spacing = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        let skipButton = UIBarButtonItem(title: "건너뛰기", style: .plain, target: self, action: #selector(nextButtonTouchUpInside(_:)))
        let nextButton = UIBarButtonItem(title: "다음", style: .plain, target: self, action: #selector(nextButtonTouchUpInside(_:)))
        nextButton.isEnabled = true
        return [skipButton, spacing, nextButton]
    }
    
    @objc func sliderValueChanged(_ sender: CustomRangeSlider) {
        
        let lowerSliderValue = Float(sender.lowerValue)
        let upperSliderValue = Float(sender.upperValue)
        
        editableLeading?.update(inset: sender.lowerValue * graph.frame.width)
        editableTrailing?.update(inset: (sender.maximumValue - sender.upperValue) * graph.frame.width)
        
        reloadTableView(dict: [.price: PricePercentageRange(lowPercent: lowerSliderValue, highPercent: upperSliderValue)])
        
        updateViewConstraints()
    }
    
    @objc func nextButtonTouchUpInside(_ sender: UIBarButtonItem) {
        let nextVC = HeadCountViewController()
        nextVC.setModel(model)
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
}


