//
//  TitleSupplementaryView.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/27.
//

import SnapKit
import UIKit

final class TitleSupplementaryView: UICollectionReusableView {
  static let reuseIdentifier = "TitleSupplementaryView"

  let label = UILabel()

  override init(frame: CGRect) {
    super.init(frame: frame)
    configureUI()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configureUI()
  }

  private func configureUI() {
    configureLabel()
    configureLayout()
  }

  private func configureLabel() {
    label.adjustsFontForContentSizeCategory = true
    label.font = UIFont.preferredFont(forTextStyle: .title2)
  }

  private func configureLayout() {
    addSubview(label)
    label.snp.makeConstraints { make in
      make.edges.equalToSuperview()
    }
  }
}
