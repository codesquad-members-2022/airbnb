//
//  ReservationViewController.swift
//  AirBnb
//
//  Created by 송태환 on 2022/05/25.
//

import SnapKit
import UIKit

final class ReservationViewController: UIViewController {
  // MARK: - Life Cycles
  override func viewDidLoad() {
    super.viewDidLoad()
    configureUI()
  }

  // MARK: - UI Configuration
  private func configureUI() {
    view.backgroundColor = .systemBackground
  }
}
