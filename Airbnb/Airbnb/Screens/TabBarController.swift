//
//  TabBarController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/02.
//

import UIKit

final class TabBarController: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()
        configureDisplay()
        configureLayout()
    }

    private func configureDisplay () {
        let homeViewController =  UINavigationController(rootViewController: HomeViewController())
        let wishListViewController = UIViewController()
        let reservationViewController = UIViewController()
        wishListViewController.view.backgroundColor = .primary
        reservationViewController.view.backgroundColor = .orange
        homeViewController.tabBarItem = UITabBarItem(title: "검색", image: UIImage(named: "search"), tag: 0)
        wishListViewController.tabBarItem = UITabBarItem(title: "위시리스트", image: UIImage(named: "like"), tag: 1)
        reservationViewController.tabBarItem = UITabBarItem(title: "내 예약", image: UIImage(named: "profile"), tag: 2)
        self.setViewControllers([homeViewController, wishListViewController, reservationViewController], animated: false)
        tabBar.backgroundColor = .gray6
        tabBar.tintColor = .gray1
    }

    private func configureLayout() {
        let lineView = UIView(frame: CGRect(x: 0, y: 0, width: tabBar.frame.size.width, height: 1))
        lineView.backgroundColor = .gray4
        tabBar.addSubview(lineView)
    }

}
