//
//  MultipleRowsCollectionViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/24.
//

import UIKit

class MultipleRowsCollectionViewController: UICollectionViewController {
    
    enum Section {
        case SearchMainBody
    }
    
    private var rowCountInMultipleCollectionView: Int = 1
    
    private var unitCellType: SearchCellCommonType.Type!
    
    private var customLayout: UICollectionViewLayout!
    
    var items = [SearchViewModel]() {
        didSet {
            applySnapshot()
        }
    }
    
    private var diffableDataSource: UICollectionViewDiffableDataSource<Section, SearchViewModel>?
    
    convenience init?(cellType: SearchCellCommonType.Type, items: [SearchViewModel], cellWidth: CGFloat, rowCount: UInt) {
        
        let horizontalUnitCount = ceil(CGFloat(items.count / Int(rowCount)))
        
        let rowItemSize = NSCollectionLayoutSize(
            widthDimension: .absolute(cellWidth),
            heightDimension: .fractionalHeight(1.0))
        let eachCellLayoutItem = NSCollectionLayoutItem(layoutSize: rowItemSize)
        
        eachCellLayoutItem.contentInsets = NSDirectionalEdgeInsets(
            top: 2, leading: 0, bottom: 2, trailing: 0)
                
        let verticalLayoutGroup = NSCollectionLayoutGroup.vertical(
            layoutSize: NSCollectionLayoutSize(
                widthDimension: .absolute(cellWidth),
                heightDimension: .fractionalHeight(1.0)),
            subitem: eachCellLayoutItem,
            count: Int(rowCount))
        
        let horizontalLayoutGroup = NSCollectionLayoutGroup.horizontal(
            layoutSize: NSCollectionLayoutSize.init(
                widthDimension: .absolute(cellWidth*horizontalUnitCount + 2*horizontalUnitCount),
                heightDimension: .fractionalHeight(1.0)),
            subitem: verticalLayoutGroup,
            count: Int(horizontalUnitCount))
        
        horizontalLayoutGroup.contentInsets = NSDirectionalEdgeInsets(
            top: 0, leading: 2, bottom: 2, trailing: 0)
        
        let section = NSCollectionLayoutSection(group: horizontalLayoutGroup)
        let layout = UICollectionViewCompositionalLayout(section: section)
        
        let configurationLayout = UICollectionViewCompositionalLayoutConfiguration()
        configurationLayout.interSectionSpacing = 0
        configurationLayout.scrollDirection = .horizontal
        
        layout.configuration = configurationLayout
        
        self.init(collectionViewLayout: layout)
        collectionView.register(cellType, forCellWithReuseIdentifier: cellType.reuseIdentifier)
        collectionView.showsVerticalScrollIndicator = false
        collectionView.showsHorizontalScrollIndicator = false
        
        self.unitCellType = cellType
        self.customLayout = layout
        self.items = items
        self.rowCountInMultipleCollectionView = Int(rowCount)
        
        self.diffableDataSource = getDiffableDataSource()
        collectionView.dataSource = self.diffableDataSource
        
        self.applySnapshot()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    private func getDiffableDataSource() -> UICollectionViewDiffableDataSource<Section, SearchViewModel> {
        UICollectionViewDiffableDataSource<Section, SearchViewModel>(
            collectionView: collectionView,
            cellProvider: { [weak self] collectionView, indexPath, itemIdentifier in
                
                guard let cellType = self?.unitCellType else { return nil }
                
                let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellType.reuseIdentifier, for: indexPath)
                let concreteCell: SearchCellCommonType? = (cell as? SearchCellCommonType)
                concreteCell?.setData(model: itemIdentifier)
                
                return concreteCell
            })
    }
    
    private func applySnapshot() {
        var snapshot = NSDiffableDataSourceSnapshot<Section, SearchViewModel>()
        snapshot.appendSections([Section.SearchMainBody])
        snapshot.appendItems(items)
        diffableDataSource?.apply(snapshot,animatingDifferences: true)
    }
}
