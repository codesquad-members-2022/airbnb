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
        (1...7).forEach { weekdayNumber in
            let weekdayLabel: UILabel = {
                let label = UILabel()
                label.font = .systemFont(ofSize: 12, weight: .thin)
                label.textColor = UIColor.getGrayScale(.Grey3)
                label.textAlignment = .center
                return label
            }()
            
            weekdayLabel.text = getWeekdayText(for: weekdayNumber)
            weekdayStackView.addArrangedSubview(weekdayLabel)
        }
    }
    
    private func getWeekdayText(for weekdayNumber: Int) -> String {
        var text: String = ""
        switch weekdayNumber {
        case 1:
            text = "일"
        case 2:
            text = "월"
        case 3:
            text = "화"
        case 4:
            text = "수"
        case 5:
            text = "목"
        case 6:
            text = "금"
        default:
            text = "토"
        }
        return text
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        
        weekdayStackView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
}
