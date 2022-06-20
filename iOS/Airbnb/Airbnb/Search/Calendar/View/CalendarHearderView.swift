//
//  CalendarHearderView.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/31.
//

import UIKit
import SnapKit

class CalendarHearderView: UICollectionReusableView {
    
    static let sectionHeaderElementKind = "section-header-element-kind"
    
    var baseDate: Date? {
        didSet {
            guard let date = baseDate else { return }
            yearMonthLabel.text = dateFormatter.string(from: date)
        }
    }
    
    private lazy var dateFormatter = DateFormatter.formatting(from: "yyyy년 M월")
    
    private let yearMonthLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = .systemFont(ofSize: 17, weight: .bold)
        label.accessibilityTraits = .header
        label.isAccessibilityElement = true
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        translatesAutoresizingMaskIntoConstraints = false
        
        addSubview(yearMonthLabel)
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        yearMonthLabel.snp.makeConstraints {
            $0.leading.equalToSuperview()
            $0.centerY.equalToSuperview()
        }
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        yearMonthLabel.text = nil
    }
}

extension UICollectionReusableView {
    static var reuseIdentifier: String { String(describing: Self.self) }
}

