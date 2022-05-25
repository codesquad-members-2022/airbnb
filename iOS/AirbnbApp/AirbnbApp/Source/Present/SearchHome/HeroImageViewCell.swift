//
//  HeroImageViewCell.swift
//  AirbnbApp
//
//  Created by dale on 2022/05/24.
//

import UIKit
import SnapKit

final class HeroImageViewCell: UICollectionViewCell {
    
    static var identifier: String {
        return "\(self)"
    }
    
    private lazy var heroImageView: UIImageView = {
        let imageView = UIImageView()
        return imageView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.text = "슬기로운\n자연생활"
        label.numberOfLines = 0
        label.font = .SFProDisplay.medium
        label.textColor = .Custom.black
        return label
    }()
    
    private lazy var descriptionLabel: UILabel = {
        let label = UILabel()
        label.text = "에어비앤비가 엄선한\n위시리스트를 만나보세요"
        label.numberOfLines = 0
        label.font = .SFProDisplay.regular(17)
        label.textColor = .Custom.gray1
        return label
    }()
    
    private lazy var containerStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.spacing = 16
        stackView.distribution = .equalSpacing
        [titleLabel, descriptionLabel].forEach { subview in
            stackView.addArrangedSubview(subview)
        }
        return stackView
    }()
    
    private lazy var receiveIdeaButton: UIButton = {
        let button = UIButton()
        button.backgroundColor = UIColor.Custom.gray1
        button.setTitle("여행 아이디어 얻기", for: .normal)
        button.setTitleColor(UIColor.Custom.white, for: .normal)
        button.layer.cornerRadius = 10
        var configuration = UIButton.Configuration.bordered()
        configuration.contentInsets = NSDirectionalEdgeInsets(top: 8, leading: 16, bottom: 8, trailing: 16)
        button.configuration = configuration
        return button
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        layoutHeroImageView()
        layoutContainerStackView()
        layoutReceiveIdeaButton()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init with coder is unavailable")
    }
}

// MARK: - View Layout

private extension HeroImageViewCell {
    
    func layoutHeroImageView() {
        addSubview(heroImageView)
        
        heroImageView.snp.makeConstraints { make in
            make.top.leading.bottom.trailing.equalToSuperview()
            make.height.width.equalToSuperview()
        }
    }
    
    func layoutContainerStackView() {
        heroImageView.addSubview(containerStackView)
        
        containerStackView.snp.makeConstraints { make in
            make.top.equalToSuperview().offset(24)
            make.leading.equalToSuperview().offset(16)
            make.trailing.equalToSuperview().offset(105)
        }
    }
    
    func layoutReceiveIdeaButton() {
        heroImageView.addSubview(receiveIdeaButton)
        
        receiveIdeaButton.snp.makeConstraints { make in
            make.top.equalTo(containerStackView.snp.bottom).offset(16)
            make.leading.equalToSuperview().offset(16)
            make.height.equalTo(38)
        }
    }
    
}

// MARK: - Providing Function

extension HeroImageViewCell {
    
    func setHeroImageView(image: UIImage) {
        heroImageView.image = image
    }
}
