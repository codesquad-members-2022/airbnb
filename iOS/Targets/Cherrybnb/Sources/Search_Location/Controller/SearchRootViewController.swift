//
//  SearchViewController.swift
//  Cherrybnb
//
//  Created by 최예주 on 2022/05/24.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit
import CoreLocation

class SearchRootViewController: UIViewController {

    @IBOutlet var searchBar: UISearchBar!
    var nextViewController: ListCollectionViewController?

    override func viewDidLoad() {
        super.viewDidLoad()
        configureNavBar()
        askPermission()

    }

    override func viewWillAppear(_ animated: Bool) {
        self.tabBarController?.tabBar.isHidden = false
    }

    private func configureNavBar() {
        searchBar.delegate = self
        searchBar.placeholder = "어디로 여행가세요?"
    }

    private func askPermission() {
        let locationManager = CLLocationManager()
        locationManager.delegate = self
        locationManager.requestAlwaysAuthorization()
        locationManager.desiredAccuracy = kCLLocationAccuracyHundredMeters
        locationManager.startUpdatingLocation()
    }
}

extension SearchRootViewController: CLLocationManagerDelegate {
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    }

}

extension SearchRootViewController: UISearchBarDelegate {
    func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {
        nextViewController = ListCollectionViewController()
        self.navigationController?.pushViewController(nextViewController ?? UIViewController(), animated: true)
        nextViewController?.tabBarController?.tabBar.isHidden = true
        self.searchBar.endEditing(true)
    }
}
