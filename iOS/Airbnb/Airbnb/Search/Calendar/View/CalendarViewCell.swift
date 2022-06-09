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
                fadeStateView.isHidden = true
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
    
    private var fadeStateView: UIView = {
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
        contentView.addSubview(fadeStateView)
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
        
        NSLayoutConstraint.activate([
            numberLabel.centerYAnchor.constraint(equalTo: centerYAnchor),
            numberLabel.centerXAnchor.constraint(equalTo: centerXAnchor),
            
            selectionBackgroundView.centerYAnchor
                .constraint(equalTo: numberLabel.centerYAnchor),
            selectionBackgroundView.centerXAnchor
                .constraint(equalTo: numberLabel.centerXAnchor),
            selectionBackgroundView.widthAnchor.constraint(equalToConstant: size),
            selectionBackgroundView.heightAnchor
                .constraint(equalTo: selectionBackgroundView.widthAnchor)
        ])
        
        fadeStateView.snp.makeConstraints {
            $0.edges.equalToSuperview().inset(-1)
        }
        
        selectionBackgroundView.layer.cornerRadius = size / 2
        
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        numberLabel.text = nil
        selectionBackgroundView.isHidden = true
        fadeStateView.isHidden = true
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
            fallthrough
        case .right:
            applySelectedStyle()
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
    
    private func applySelectedStyle() {
        accessibilityTraits.insert(.selected)
        accessibilityHint = nil
        
        numberLabel.textColor = isSmallScreenSize ? .systemRed : .white
        selectionBackgroundView.isHidden = isSmallScreenSize
        fadeStateView.isHidden = true
    }
    
    private func applyDefaultStyle() {
        guard let day = day else { return }
        accessibilityTraits.remove(.selected)
        accessibilityHint = "Tap to select"
        
        numberLabel.textColor = day.isBeforeToday ? .secondaryLabel : .label
        selectionBackgroundView.isHidden = true
        fadeStateView.isHidden = true
    }
    
    private func applyFadeStyle() {
        fadeStateView.isHidden = false
        numberLabel.textColor = .label
        selectionBackgroundView.isHidden = true
    }
}
