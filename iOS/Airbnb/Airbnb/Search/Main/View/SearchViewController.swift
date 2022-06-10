//
//  SearchViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/23.
//

import UIKit
import SnapKit

class SearchViewController: BackgroundViewController, CommonViewControllerProtocol {
    
    enum Section {
        case searchMainBody
    }
    
    private let searchBar: UISearchBar = {
        let searchBar = UISearchBar()
        searchBar.placeholder = "어디로 여행가세요?"
        return searchBar
    }()
    
    private var searchMainCollectionViewLayout: UICollectionViewLayout {
        let inset = NSDirectionalEdgeInsets(
            top: 2, leading: 2, bottom: 2, trailing: 2)
        
        let titleSize = NSCollectionLayoutSize(
            widthDimension: .fractionalWidth(1.0),
            heightDimension: .fractionalHeight(0.05))
        let titleLayoutItem = NSCollectionLayoutItem(layoutSize: titleSize)
        titleLayoutItem.contentInsets = inset
        
        let twoRowCellSize = NSCollectionLayoutSize(
            widthDimension: .fractionalWidth(1.0),
            heightDimension: .fractionalHeight(0.2))
        let twoRowLayoutItem = NSCollectionLayoutItem(layoutSize: twoRowCellSize)
        twoRowLayoutItem.contentInsets = inset
        
        let oneRowCellSize = NSCollectionLayoutSize(
            widthDimension: .fractionalWidth(1.0),
            heightDimension: .fractionalHeight(0.44))
        let oneRowLayoutItem = NSCollectionLayoutItem(layoutSize: oneRowCellSize)
        oneRowLayoutItem.contentInsets = inset
        
        let mainViewLayoutGroup = NSCollectionLayoutGroup.vertical(
            layoutSize: .init(
                widthDimension: .fractionalWidth(1.0),
                heightDimension: .fractionalHeight(1.0)),
            subitems: [
                titleLayoutItem,
                twoRowLayoutItem,
                titleLayoutItem,
                oneRowLayoutItem
            ]
        )
        
        let section = NSCollectionLayoutSection(group: mainViewLayoutGroup)
        let layout = UICollectionViewCompositionalLayout(section: section)
        
        return layout
    }
    
    private var searchCollectionViewDataSource: (UICollectionView) -> UICollectionViewDiffableDataSource<Section, [SearchViewModel]> = { collectionView in
        UICollectionViewDiffableDataSource<Section, [SearchViewModel]>(collectionView: collectionView) { collectionView, indexPath, itemIdentifier in
            
            guard indexPath.item <= 3 else { return nil }
            
            var cell: UICollectionViewCell?
            
            switch indexPath.item {
            case 0, 2:
                cell = collectionView.dequeueReusableCell(
                    withReuseIdentifier: SearchTitleCollectionViewCell.reuseIdentifier,
                    for: indexPath)
                
                if let model = itemIdentifier.first {
                    (cell as? SearchTitleCollectionViewCell)?.setData(model: model)
                }
                
            case 1:
                cell = collectionView.dequeueReusableCell(
                    withReuseIdentifier: MultipleRowsCollectionViewContainerCell.reuseIdentifier,
                    for: indexPath)
                
                (cell as? MultipleRowsCollectionViewContainerCell)?
                    .applyAttributes(
                        cellType: SearchTwoInARowCollectionViewCell.self,
                        items: itemIdentifier,
                        cellWidth: collectionView.frame.width * 2/3,
                        rowCount: 2)
            default:
                cell = collectionView.dequeueReusableCell(
                    withReuseIdentifier: MultipleRowsCollectionViewContainerCell.reuseIdentifier,
                    for: indexPath)
                
                (cell as? MultipleRowsCollectionViewContainerCell)?
                    .applyAttributes(
                        cellType: SearchOneInARowCollectionViewCell.self,
                        items: itemIdentifier,
                        cellWidth: collectionView.frame.width * 4/5,
                        rowCount: 1)
            }
            
            return cell
        }
    }
    
    func getSnapshotForSearchMainCollectionView() -> NSDiffableDataSourceSnapshot<Section, [SearchViewModel]> {
        var snapshot = NSDiffableDataSourceSnapshot<Section, [SearchViewModel]>()
        snapshot.appendSections([Section.searchMainBody])
        
        var items = [[SearchViewModel]]()
        var oneRowItems = [SearchViewModel]()
        var twoRowItems = [SearchViewModel]()
        
        // 임시 코드입니다.
        for i in 0 ..< 18 {
            
            let model = SearchViewModel(imageData: Data(), titleLabel: "\(i)", subTitleLabel: "\(i)\(i)")
            
            if i == 0 || i == 9 {
                items.append([model])
            } else if 1...8 ~= i {
                twoRowItems.append(model)
            } else if i > 9 {
                oneRowItems.append(model)
            }
        }
        
        items.insert(twoRowItems, at: 1)
        items.append(oneRowItems)
        
        snapshot.appendItems(items)
        return snapshot
    }
    
    private var dataSourceContainer: UICollectionViewDiffableDataSource<Section, [SearchViewModel]>?
    
    private lazy var searchMainCollectionView: UICollectionView = {
        let collectionView = UICollectionView.init(frame: CGRect.zero, collectionViewLayout: searchMainCollectionViewLayout)
        collectionView.register(SearchTitleCollectionViewCell.self, forCellWithReuseIdentifier: SearchTitleCollectionViewCell.reuseIdentifier)
        collectionView.register(MultipleRowsCollectionViewContainerCell.self, forCellWithReuseIdentifier: MultipleRowsCollectionViewContainerCell.reuseIdentifier)
        
        let snapshot = getSnapshotForSearchMainCollectionView()
        dataSourceContainer = searchCollectionViewDataSource(collectionView)
        collectionView.dataSource = dataSourceContainer
        dataSourceContainer?.apply(snapshot, animatingDifferences: false)
        
        return collectionView
    }()
  
    override func viewDidLoad() {
        super.viewDidLoad()
        layout()
        attribute()
        bind()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
    }
    
    // MARK: - 객체간 통신을 담당할 메서드
    func bind() {
    }
    
    func attribute() {
        setUpSearchController()
    }
    
    func layout() {
        view.addSubview(searchMainCollectionView)

        searchMainCollectionView.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
    }
}

extension SearchViewController: UISearchBarDelegate {
    
    func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {
        searchBar.resignFirstResponder()
        let locationViewController = LocationViewController()
        locationViewController.hidesBottomBarWhenPushed = true
        navigationController?.pushViewController(locationViewController, animated: false)
    }
    
    private func setUpSearchController() {
        self.navigationItem.titleView = searchBar
        searchBar.delegate = self
    }
}
