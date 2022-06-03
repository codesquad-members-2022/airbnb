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
        setUpNavigationAppearance()
        setUpToolBarAppearance()
    }
    
    private func setUpNavigationAppearance() {
        navigationItem.backButtonTitle = "뒤로"
        let appearance = UINavigationBarAppearance()
        appearance.configureWithOpaqueBackground()
        appearance.backgroundColor = .systemGray6
        navigationItem.standardAppearance = appearance
        navigationItem.scrollEdgeAppearance = appearance
    }
    
    private func setUpToolBarAppearance() {
        navigationController?.toolbar.tintColor = .label
        let toolBarAppearance = UIToolbarAppearance()
        toolBarAppearance.configureWithOpaqueBackground()
        toolBarAppearance.backgroundColor = .systemGray6
        navigationController?.toolbar.isTranslucent = true
        navigationController?.toolbar.standardAppearance = toolBarAppearance
        navigationController?.toolbar.compactAppearance = toolBarAppearance
        if #available(iOS 15.0, *) {
            navigationController?.toolbar.scrollEdgeAppearance = toolBarAppearance
        }
    }
}
