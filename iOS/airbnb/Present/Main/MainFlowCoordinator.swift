//
//  MainFlowCoordinator.swift
//  airbnb
//
//  Created by 안상희 on 2022/05/27.
//

import UIKit

protocol MainFlow: AnyObject {
    
}

class MainFlowCoordinator: Coordinator, MainFlow {
    weak var navigationController: UINavigationController?
    
    init(navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func start() {
        let mainViewController = MainViewController()
        navigationController?.pushViewController(mainViewController, animated: false)
    }
}
