//
//  NearCityCollectionViewCell.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/27.
//

import SnapKit
import UIKit

final class NearCityCollectionViewCell: UICollectionViewCell {
  private let thumbnailView = UIImageView(frame: .zero)
  private let title = UILabel()
  private let subtitle = UILabel()

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
    configureAttributes()
  }

  private func configureAttributes() {
    configureThumbnailView()
    configureCityNameLabel()
    configureDistanceLabel()
  }

  private func configureThumbnailView() {
    thumbnailView.layer.masksToBounds = true
    thumbnailView.layer.cornerCurve = .continuous
    thumbnailView.layer.cornerRadius = 10
  }

  private func configureCityNameLabel() {
    title.adjustsFontSizeToFitWidth = true
  }

  private func configureDistanceLabel() {
    subtitle.adjustsFontSizeToFitWidth = true
    subtitle.textColor = .gray3
  }

  private func configureLayout() {
    contentView.addSubview(thumbnailView)
    thumbnailView.snp.makeConstraints { make in
      make.size.equalTo(contentView.snp.height)
    }

    let stack = UIStackView(arrangedSubviews: [title, subtitle])
    stack.axis = .vertical
    stack.spacing = 4

    contentView.addSubview(stack)
    stack.snp.makeConstraints { make in
      make.centerY.equalTo(thumbnailView)
      make.leading.equalTo(thumbnailView.snp.trailing).offset(6)
    }
  }
}

// MARK: - Functionalities
extension NearCityCollectionViewCell {
  private func setImage(_ image: UIImage?) {
    thumbnailView.image = image
  }

  private func setTitle(_ text: String) {
    title.text = text
  }

  private func setSubtitle(_ text: String) {
    subtitle.text = text
  }

  func setData(title: String, subtitle: String, image: UIImage? = nil) {
    setTitle(title)
    setSubtitle(subtitle)
    setImage(image)
  }
}
