//
//  HeroCollectionViewCell.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/27.
//

import SnapKit
import UIKit

final class HeroCollectionViewCell: UICollectionViewCell {
  private let backgroundImageView = UIImageView(frame: .zero)
  private let title = UILabel()
  private let subtitle = UILabel()
  private let button = UIButton(frame: .zero)

  override init(frame: CGRect) {
    super.init(frame: frame)
    configureUI()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configureUI()
  }

  private func configureUI() {
    configureLayout()
    configureViewAttributes()
  }

  private func configureViewAttributes() {
    configureTitleLabel()
    configureSubTitleLabel()
    configureButton()
  }

  private func configureTitleLabel() {
    title.text = "슬기로운\n자연생활"
    title.numberOfLines = 0
    title.font = .preferredFont(forTextStyle: .title1)
    title.adjustsFontSizeToFitWidth = true
  }

  private func configureSubTitleLabel() {
    subtitle.text = "에어비앤비가 엄선한\n위시리스트를 만나보세요."
    subtitle.numberOfLines = 0
    subtitle.font = .preferredFont(forTextStyle: .title3)
    subtitle.adjustsFontSizeToFitWidth = true
  }

  private func configureButton() {
    var config = UIButton.Configuration.filled()
    config.background.backgroundColor = .gray1
    config.title = "여행 아이디어 얻기"
    button.configuration = config
  }

  private func configureLayout() {
    contentView.addSubview(backgroundImageView)
    backgroundImageView.snp.makeConstraints { make in
      make.edges.equalTo(contentView)
    }

    let stack = UIStackView(arrangedSubviews: [title, subtitle])
    stack.axis = .vertical
    stack.spacing = 10
    stack.alignment = .top
    stack.distribution = .fillProportionally

    contentView.addSubview(stack)
    stack.snp.makeConstraints { make in
      make.top.equalTo(contentView).offset(16)
      make.leading.equalTo(contentView).offset(16)
      make.trailing.lessThanOrEqualTo(contentView).offset(16)
    }

    contentView.addSubview(button)
    button.snp.makeConstraints { make in
      make.top.equalTo(stack.snp.bottom).offset(10)
      make.leading.equalTo(contentView).offset(16)
      make.trailing.lessThanOrEqualTo(contentView).offset(16)
      make.bottom.lessThanOrEqualTo(contentView)
    }
  }
}

// MARK: - Functionalties
extension HeroCollectionViewCell {
  func setImage(_ image: UIImage?) {
    backgroundImageView.image = image
  }
}
