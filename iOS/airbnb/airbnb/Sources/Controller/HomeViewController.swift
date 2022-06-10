//
//  HomeViewController.swift
//  airbnb
//
//  Created by Jihee hwang on 2022/05/25.
//

import UIKit
import SnapKit

final class HomeViewController: UIViewController {

    private let dataSource = HomeCollectionViewDataSource()
    
    private lazy var loginButton = UIBarButtonItem(image: UIImage(systemName: "person"), style: .plain, target: self, action: #selector(didTabLoginButton))

    private let searchBarController: UISearchController = {
        let searchController = UISearchController(searchResultsController: nil)
        searchController.searchBar.placeholder = Title.searchBarPlaceholder
        return searchController
    }()
    
    private let logoImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Logo.logoImage
        imageView.snp.makeConstraints {
            $0.width.equalTo(90)
            $0.height.equalTo(28)
        }
        return imageView
    }()

    private let collectionView: UICollectionView = {
        let layout = Layout.createLayout()
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        return collectionView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        setCollectionView()
        layout()
    }
    
    private func configureView() {
        view.backgroundColor = .white
        
        navigationItem.searchController = searchBarController
        navigationItem.titleView = logoImageView
        navigationItem.backBarButtonItem = UIComponents.backButton
        navigationItem.rightBarButtonItem = loginButton
        navigationItem.hidesSearchBarWhenScrolling = false
        loginButton.tintColor = .black
        
        searchBarController.searchBar.delegate = self
    }
    
    private func setCollectionView() {
        collectionView.dataSource = dataSource
        
        collectionView.register(HeroImageCell.self, forCellWithReuseIdentifier: HeroImageCell.identifier)
        collectionView.register(RecommendedTravelDestinationCell.self, forCellWithReuseIdentifier: RecommendedTravelDestinationCell.identifier)
        collectionView.register(CollectionHeaderView.self, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: CollectionHeaderView.identifier)
    }
    
    private func layout() {
        view.addSubview(collectionView)
        
        collectionView.snp.makeConstraints {
            $0.edges.equalTo(view.safeAreaLayoutGuide)
        }
    }
    
    @objc func didTabLoginButton(_ sender: Any) {
        let nextViewController = SearchViewController()
        navigationController?.pushViewController(nextViewController, animated: true)
//        LoginManager.shared.requestCode()
    }
}

// MARK: - extension

extension HomeViewController: UISearchBarDelegate {
    func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {
        let nextViewController = LoginViewController()
        navigationController?.pushViewController(nextViewController, animated: true)
    }
}
