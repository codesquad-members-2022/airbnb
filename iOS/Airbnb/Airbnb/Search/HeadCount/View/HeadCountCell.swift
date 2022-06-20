//
//  HeadCountCell.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import UIKit

class HeadCountCell: UITableViewCell {
    
    weak var dataSource: HeadCountDataSource?
    var headType: HeadCountType?
    
    static var reuseIdentifier: String {
        return String(describing: HeadCountCell.self)
    }
    
    private let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.getGrayScale(.Grey1)
        label.font = UIFont(name: label.font.fontName, size: 17)
        label.textAlignment = .left
        label.adjustsFontSizeToFitWidth = true
        return label
    }()
    
    private let descriptionLabel: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.getGrayScale(.Grey3)
        label.font = UIFont(name: label.font.fontName, size: 17)
        label.textAlignment = .left
        label.adjustsFontSizeToFitWidth = true
        return label
    }()
    
    private let plusButton: ManageButton = {
        let button = ManageButton()
        button.contentMode = .scaleAspectFit
        button.setImage(UIImage(named: "PlusCircle"), for: .normal)
        button.tintColor = UIColor.getGrayScale(.Grey1)
        return button
    }()
    
    private let numberLabel: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.getGrayScale(.Grey1)
        label.font = UIFont(name: label.font.fontName, size: 17)
        label.textAlignment = .center
        return label
    }()
    
    private let minusButton: ManageButton = {
        let button = ManageButton()
        button.imageView?.contentMode = .scaleAspectFit
        button.setImage(UIImage(named: "MinusCircle"), for: .normal)
        button.tintColor = UIColor.getGrayScale(.Grey1)
        button.setNeedsDisplay()
        return button
    }()
    
    private let buttonStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fillProportionally
        stackView.spacing = .zero
        return stackView
    }()
    
    private let separatorLineView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.getGrayScale(.Grey5)
        return view
    }()
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        setLayout()
        setHandler()
    }
    
    func setLayout() {
        contentView.addSubview(titleLabel)
        contentView.addSubview(descriptionLabel)
        contentView.addSubview(buttonStackView)
        contentView.addSubview(separatorLineView)
        
        separatorLineView.snp.makeConstraints {
            $0.leading.trailing.equalToSuperview().inset(16)
            $0.bottom.equalToSuperview()
            $0.height.equalTo(1)
        }
        
        buttonStackView.snp.makeConstraints {
            $0.top.equalToSuperview().inset(16)
            $0.bottom.equalTo(separatorLineView).inset(16)
            $0.trailing.equalToSuperview().inset(16)
            $0.width.width.greaterThanOrEqualTo(90)
        }
        
        buttonStackView.addArrangedSubview(minusButton)
        buttonStackView.addArrangedSubview(numberLabel)
        buttonStackView.addArrangedSubview(plusButton)
        
        minusButton.snp.makeConstraints { $0.width.equalTo(30) }
        numberLabel.snp.makeConstraints { $0.width.equalTo(30) }
        plusButton.snp.makeConstraints { $0.width.equalTo(30) }
        
        titleLabel.snp.makeConstraints {
            $0.top.leading.equalToSuperview().inset(16)
            $0.trailing.equalTo(buttonStackView.snp.leading).priority(.medium)
            $0.bottom.lessThanOrEqualTo(descriptionLabel.snp.top)
            $0.height.equalTo(22)
        }
        
        descriptionLabel.snp.makeConstraints {
            $0.bottom.equalTo(separatorLineView).inset(16)
            $0.leading.equalToSuperview().inset(16)
            $0.trailing.equalTo(buttonStackView.snp.leading).priority(.medium)
            $0.height.equalTo(22)
        }
        
        contentView.setNeedsDisplay()
    }
    
    func setHandler() {
        plusButton.addTarget(self, action: #selector(manageHeadCountButtonTouchUpInside(_:)), for: .touchUpInside)
        minusButton.addTarget(self, action: #selector(manageHeadCountButtonTouchUpInside(_:)), for: .touchUpInside)
    }
    
    func setTitle(_ title: String) {
        titleLabel.text = title
    }
    
    func setDescription(_ description: String) {
        descriptionLabel.text = description
    }
    
    func setNumber(_ number: Int, maxNumber: Int) {
        numberLabel.text = "\(number)"
        
        minusButton.isEnabled = true; plusButton.isEnabled = true
        
        if number == 0 {
            minusButton.isEnabled = false
        } else if number == maxNumber {
            plusButton.isEnabled = false
        }
    }
    
    func buttonEnableState(_ buttonType: HeadCountButton, isEnable: Bool) {
        let targetButton: UIButton = buttonType == .minus ? minusButton : plusButton
        targetButton.isEnabled = isEnable
    }
    
    func clearSeparatorView() {
        separatorLineView.backgroundColor = .clear
    }
    
    @objc private func manageHeadCountButtonTouchUpInside(_ sender: UIButton) {
        var inputType: HeadCountInputType?
        
        if sender == plusButton {
            inputType = .plus
        } else if sender == minusButton {
            inputType = .minus
        }
        
        if let headType = headType, let input = inputType {
            dataSource?.setHeadCount(headType: headType, inputType: input)
        }
    }
    
    enum HeadCountButton {
        case minus
        case plus
    }
    
    class ManageButton : UIButton {
        
        private var actionTouchEnable: Bool = false
        
        override var isHighlighted: Bool {
            get {
                return super.isHighlighted
            }
            set {
                UIView.animate(withDuration: 0.3) {
                    self.layer.opacity = self.isHighlighted ? 1.0 : 0.5
                }
                super.isHighlighted = newValue
            }
        }
        
        override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
            
            guard actionTouchEnable == false else { return }
            
            actionTouchEnable = true
            super.touchesBegan(touches, with: event)
            actionTouchEnable = false
        }
    }
}
