//
//  BackgroundViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/26.
//

import UIKit

protocol CommonViewControllerProtocol {
    func attribute()
    func layout()
    func bind()
}

class BackgroundViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    func setUpNavigationAppearance() {
        let appearance = UINavigationBarAppearance()
        appearance.configureWithOpaqueBackground()
        appearance.backgroundColor = .yellow
        navigationItem.standardAppearance = appearance
        navigationItem.scrollEdgeAppearance = appearance
    }
}
