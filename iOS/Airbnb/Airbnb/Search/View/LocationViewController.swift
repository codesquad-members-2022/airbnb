//
//  LocationViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/24.
//

import UIKit

class LocationViewController: BackgroundViewController, CommonViewControllerProtocol {

    private let searchController: UISearchController = {
        let searchController = UISearchController(searchResultsController: nil)
        let searchBar = searchController.searchBar
        searchBar.placeholder = "어디로 여행가세요?"
        searchBar.searchTextField.clearButtonMode = .never
        searchBar.searchTextField.returnKeyType = .go
        searchController.hidesNavigationBarDuringPresentation = false
        searchController.automaticallyShowsCancelButton = false
        return searchController
    }()
        
    
    lazy var removeButton: UIBarButtonItem = {
        let barButton = UIBarButtonItem(title: "지우기", style: .done,
                                        target: self, action: #selector(self.clearSearchField(_:)))
        barButton.tintColor = .gray
        return barButton
    }()
    
    func attribute() {
        
    }
    
    func layout() {
        
    }
    
    func bind() {
        
    }
    
    private func setUpSearchController() {
        self.navigationItem.searchController = searchController
        searchController.searchBar.delegate = self
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        super.setUpNavigationAppearance()
        setUpSearchController()
    }
    
}

extension LocationViewController: UISearchBarDelegate, UITextFieldDelegate {
    
    @objc func clearSearchField(_ sender: Any) {
        searchController.searchBar.text = nil
        self.navigationItem.rightBarButtonItem = nil
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        searchController.searchBar.resignFirstResponder()
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        searchController.searchBar.resignFirstResponder()
        return true
    }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        !searchText.isEmpty
        ? (navigationItem.rightBarButtonItem = removeButton)
        : (navigationItem.rightBarButtonItem = nil)
    }
}
