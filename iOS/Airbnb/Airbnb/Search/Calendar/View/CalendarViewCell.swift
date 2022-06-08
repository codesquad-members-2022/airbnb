//
//  CalendarViewCell.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/31.
//

import UIKit
import SnapKit

class CalendarViewCell: UICollectionViewCell {
    
    var day: Day? {
        didSet {
            guard let day = day else { return }
            if day.isWithInDisplayedMonth {
                numberLabel.text = day.number
                accessibilityLabel = accessibilityDateFormatter.string(from: day.date)
                updateSelectionStatus()
            } else {
                selectionBackgroundView.isHidden = true
                leftFadeBackgroundView.isHidden = true
                rightFadeBackgroundView.isHidden = true
            }
        }
    }
    
    
    private lazy var selectionBackgroundView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.clipsToBounds = true
        view.backgroundColor = UIColor.getGrayScale(.Grey1)
        return view
    }()
    
    private lazy var leftFadeBackgroundView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.clipsToBounds = true
        view.backgroundColor = UIColor.getGrayScale(.Grey6)
        return view
    }()
    
    private lazy var rightFadeBackgroundView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.clipsToBounds = true
        view.backgroundColor = UIColor.getGrayScale(.Grey6)
        return view
    }()
    
    private lazy var numberLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textAlignment = .center
        label.font = UIFont.systemFont(ofSize: 18, weight: .medium)
        label.textColor = .label
        return label
    }()
    
    private lazy var accessibilityDateFormatter: DateFormatter = {
        let dateFormatter = DateFormatter()
        dateFormatter.calendar = Calendar(identifier: .gregorian)
        dateFormatter.setLocalizedDateFormatFromTemplate("EEEE, MMMM d")
        return dateFormatter
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        isAccessibilityElement = true
        accessibilityTraits = .button
        contentView.addSubview(leftFadeBackgroundView)
        contentView.addSubview(rightFadeBackgroundView)
        contentView.addSubview(selectionBackgroundView)
        contentView.addSubview(numberLabel)
        
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        NSLayoutConstraint.deactivate(selectionBackgroundView.constraints)
        
        let size = traitCollection.horizontalSizeClass == .compact ?
        min(min(frame.width, frame.height) - 10, 60) : 45
    
        numberLabel.snp.makeConstraints {
            $0.center.equalToSuperview()
        }
        
        selectionBackgroundView.snp.makeConstraints {
            $0.center.equalTo(numberLabel)
            $0.width.equalTo(size)
            $0.height.equalTo(selectionBackgroundView.snp.width)
        }
        
        leftFadeBackgroundView.snp.makeConstraints {
            $0.top.bottom.equalToSuperview().inset(3)
            $0.trailing.equalToSuperview()
            $0.width.equalToSuperview().dividedBy(2)
        }
        
        rightFadeBackgroundView.snp.makeConstraints {
            $0.top.bottom.equalToSuperview().inset(3)
            $0.leading.equalToSuperview()
            $0.width.equalToSuperview().dividedBy(2)
        }
        
        selectionBackgroundView.layer.cornerRadius = size / 2
        
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        numberLabel.text = nil
        selectionBackgroundView.isHidden = true
        leftFadeBackgroundView.isHidden = true
        rightFadeBackgroundView.isHidden = true
    }
    
    func tabGenerated(for day: Day) {
        if !day.isBeforeToday {
            prepareForReuse()
            self.day = day
        }
    }

}

// MARK: - Appearance
private extension CalendarViewCell {
    
    func updateSelectionStatus() {
        guard let day = day else { return }
        
        switch day.fadeState {
        case .left:
            applyLeftSelectedStyle()
        case .right:
            applyRightSelectedStyle()
        case .fill:
            applyFadeStyle()
        case .none:
            applyDefaultStyle()
        }
    }
    
    var isSmallScreenSize: Bool {
        let isCompact = traitCollection.horizontalSizeClass == .compact
        let smallWidth = UIScreen.main.bounds.width <= 350
        let widthGreaterThanHeight =
        UIScreen.main.bounds.width > UIScreen.main.bounds.height
        
        return isCompact && (smallWidth || widthGreaterThanHeight)
    }
    
    private func applyLeftSelectedStyle() {
        accessibilityTraits.insert(.selected)
        accessibilityHint = nil
        
        numberLabel.textColor = isSmallScreenSize ? .systemRed : .white
        selectionBackgroundView.isHidden = isSmallScreenSize
        rightFadeBackgroundView.isHidden = true
        leftFadeBackgroundView.isHidden = false
    }
    
    private func applyRightSelectedStyle() {
        accessibilityTraits.insert(.selected)
        accessibilityHint = nil
        
        numberLabel.textColor = isSmallScreenSize ? .systemRed : .white
        selectionBackgroundView.isHidden = isSmallScreenSize
        rightFadeBackgroundView.isHidden = false
        leftFadeBackgroundView.isHidden = true
    }
    
    private func applyDefaultStyle() {
        guard let day = day else { return }
        accessibilityTraits.remove(.selected)
        accessibilityHint = "Tap to select"
        
        numberLabel.textColor = day.isBeforeToday ? .secondaryLabel : .label
        selectionBackgroundView.isHidden = true
        leftFadeBackgroundView.isHidden = true
        rightFadeBackgroundView.isHidden = true
    }
    
    private func applyFadeStyle() {
        numberLabel.textColor = .label
        selectionBackgroundView.isHidden = true
        leftFadeBackgroundView.isHidden = false
        rightFadeBackgroundView.isHidden = false
    }
}
