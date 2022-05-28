//
//  CalenderViewController.swift
//  airbnb
//
//  Created by seongha shin on 2022/05/25.
//

import RxSwift
import UIKit
import WARangeSlider

final class PriceViewController: UIViewController {
    
    private enum Contants {
        static let sliderThumbSize: CGFloat = 30
    }
    
    private let titleLabel: UILabel = {
        let label = UILabel()
        label.text = "가격 범위"
        label.font = .systemFont(ofSize: 17, weight: .semibold)
        label.textColor = .grey1
        return label
    }()
    
    private let priceRangeLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 17, weight: .regular)
        label.textColor = .grey1
        return label
    }()
    
    private let graphBackground: UIView = {
        let view = UIView()
        view.backgroundColor = .grey4
        return view
    }()
    
    private let graphforeground: UIView = {
        let view = UIView()
        view.backgroundColor = .grey3
        return view
    }()
    
    private let rangeSlider: RangeSlider = {
        let rangeSlider = RangeSlider()
        rangeSlider.minimumValue = 0
        rangeSlider.maximumValue = 1
        rangeSlider.thumbBorderWidth = 0
        rangeSlider.trackTintColor = .clear
        rangeSlider.trackHighlightTintColor = .clear
        rangeSlider.backgroundColor = .clear
        rangeSlider.thumbTintColor = .clear
        rangeSlider.thumbBorderColor = .clear
        return rangeSlider
    }()
    
    private let sliderMinIcon: UIImageView = {
        let view = UIImageView()
        view.image = UIImage(named: "Icon_thumb")
        view.isUserInteractionEnabled = false
        return view
    }()
    
    private let sliderMaxIcon: UIImageView = {
        let view = UIImageView()
        view.image = UIImage(named: "Icon_thumb")
        view.isUserInteractionEnabled = false
        return view
    }()
    
    private let bezierPathView: BezierPathView = {
        let bezierPathView = BezierPathView()
        bezierPathView.backgroundColor = .clear
        bezierPathView.lineWidth = 0
        bezierPathView.isHiddenStrock = true
        
        bezierPathView.points = [
            CGPoint(x: 0, y: 0),
            CGPoint(x: 0.1, y: 0.1),
            CGPoint(x: 0.2, y: 0.2),
            CGPoint(x: 0.3, y: 0.3),
            CGPoint(x: 0.4, y: 0.4),
            CGPoint(x: 0.5, y: 0),
            CGPoint(x: 0.6, y: 0.6),
            CGPoint(x: 0.7, y: 0.7),
            CGPoint(x: 0.8, y: 0.8),
            CGPoint(x: 0.9, y: 0.9),
            CGPoint(x: 1, y: 1)
        ]
        return bezierPathView
    }()
    
    private let viewModel: PriceViewModelProtocol
    private let disposeBag = DisposeBag()
    
    init(viewModel: PriceViewModelProtocol) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
        bind()
        attribute()
        layout()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func bind() {
        rx.viewDidLoad
            .bind(to: viewModel.action().loadLodgment)
            .disposed(by: disposeBag)
        
        viewModel.state().updatedGraphPoints
            .bind(to: bezierPathView.rx.points)
            .disposed(by: disposeBag)
        
        viewModel.state().updatedPriceRange
            .bind(to: priceRangeLabel.rx.text)
            .disposed(by: disposeBag)
        
        viewModel.state().updatedSliderValue
            .observe(on: MainScheduler.asyncInstance)
            .bind(onNext: updateSliderValue)
            .disposed(by: disposeBag)
        
        rangeSlider.rx.changeValue
            .map { value in (min: value.0, max: value.1) }
            .bind(to: viewModel.action().changeSliderValue)
            .disposed(by: disposeBag)
    }
    
    private func attribute() {
        view.backgroundColor = .white
    }
    
    private func layout() {
        view.addSubview(titleLabel)
        view.addSubview(priceRangeLabel)
        view.addSubview(bezierPathView)
        view.addSubview(rangeSlider)
        bezierPathView.addSubview(graphBackground)
        bezierPathView.addSubview(graphforeground)
        rangeSlider.addSubview(sliderMinIcon)
        rangeSlider.addSubview(sliderMaxIcon)
        
        titleLabel.snp.makeConstraints {
            $0.top.equalToSuperview().offset(32)
            $0.leading.equalToSuperview().inset(16)
        }
        
        priceRangeLabel.snp.makeConstraints {
            $0.top.equalTo(titleLabel.snp.bottom).offset(16)
            $0.leading.equalToSuperview().offset(16)
        }
        
        bezierPathView.snp.makeConstraints {
            $0.top.equalTo(priceRangeLabel.snp.bottom).offset(48)
            $0.leading.trailing.equalToSuperview().inset(16)
            $0.height.equalTo(86)
        }
        
        graphBackground.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
        
        graphforeground.snp.makeConstraints {
            $0.top.bottom.equalToSuperview()
            $0.leading.equalToSuperview()
            $0.trailing.equalToSuperview()
        }
        
        rangeSlider.snp.makeConstraints {
            $0.leading.trailing.equalTo(bezierPathView).inset(Contants.sliderThumbSize / -2)
            $0.centerY.equalTo(bezierPathView.snp.bottom)
            $0.height.equalTo(Contants.sliderThumbSize)
        }
        
        sliderMinIcon.snp.makeConstraints {
            $0.width.height.equalTo(Contants.sliderThumbSize)
            $0.centerY.leading.equalToSuperview()
        }
        
        sliderMaxIcon.snp.makeConstraints {
            $0.width.height.equalTo(Contants.sliderThumbSize)
            $0.centerY.trailing.equalToSuperview()
        }
    }
    
    private func updateSliderValue(min: Double, max: Double) {
        let width = Double(bezierPathView.frame.width)
        
        graphforeground.snp.updateConstraints {
            $0.leading.equalToSuperview().offset(width * min)
            $0.trailing.equalToSuperview().inset(width * (1 - max))
        }
        
        sliderMinIcon.snp.updateConstraints {
            $0.leading.equalToSuperview().offset(width * min)
        }
        
        sliderMaxIcon.snp.updateConstraints {
            $0.trailing.equalToSuperview().inset(width * (1 - max))
        }
        
        rangeSlider.lowerValue = min
        rangeSlider.upperValue = max
    }
}
