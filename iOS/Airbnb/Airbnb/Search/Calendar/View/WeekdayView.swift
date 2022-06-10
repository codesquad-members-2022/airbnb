//
//  WeekdayView.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/06/02.
//

import UIKit
import SnapKit

class WeekdayView: UIView {
    private let weekdayStackView: UIStackView = {
       let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .center
        stackView.distribution = .fillEqually
        return stackView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        generateWeekday()
        addSubview(weekdayStackView)
    }
    
    required init?(coder: NSCoder) {
        fatalError("\(#file), \(#function)에서 문제가 나네요")
    }
    
    private func generateWeekday() {
        Weekday.allCases.forEach { weekday in
            let weekdayLabel: UILabel = {
                let label = UILabel()
                label.font = .systemFont(ofSize: 12, weight: .thin)
                label.textColor = UIColor.getGrayScale(.Grey3)
                label.textAlignment = .center
                return label
            }()
            
            weekdayLabel.text = weekday.rawValue
            weekdayStackView.addArrangedSubview(weekdayLabel)
        }
    }
    
    enum Weekday: String, CaseIterable {
        case sunday = "일"
        case monday = "월"
        case tuesday = "화"
        case wednesday = "수"
        case thursday = "목"
        case friday = "금"
        case saturday = "토"
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        weekdayStackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
}
