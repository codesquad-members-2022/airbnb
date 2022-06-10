//
//  RecommendationCollectionViewCell.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/27.
//

import SnapKit
import UIKit

final class RecommendationCollectionViewCell: UICollectionViewCell {
  private let imageView = UIImageView(frame: .zero)
  private let title = UILabel(frame: .zero)

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
    configureTitleLabel()
    configureImageView()
  }

  private func configureTitleLabel() {
    title.numberOfLines = 0
    title.font = .systemFont(ofSize: 17, weight: .bold)
    title.textColor = .gray1
  }

  private func configureImageView() {
    imageView.layer.masksToBounds = true
    imageView.layer.cornerRadius = 10
    imageView.layer.cornerCurve = .continuous
  }

  private func configureLayout() {
    contentView.addSubview(imageView)
    imageView.snp.makeConstraints { make in
      make.top.equalTo(contentView)
      make.leading.equalTo(contentView)
      make.trailing.equalTo(contentView)
    }

    contentView.addSubview(title)
    title.snp.makeConstraints { make in
      make.top.equalTo(imageView.snp.bottom).inset(-16)
      make.bottom.equalTo(contentView)
      make.leading.equalTo(contentView)
      make.trailing.equalTo(contentView)
    }
  }
}

// MARK: - Functionalities
extension RecommendationCollectionViewCell {
  private func setTitle(_ text: String?) {
    title.text = text
  }

  private func setImage(_ image: UIImage?) {
    imageView.contentMode = .scaleToFill
    imageView.image = image
  }

  func setData(title: String, image: UIImage? = nil) {
    setTitle(title)
    setImage(image)
  }
}
