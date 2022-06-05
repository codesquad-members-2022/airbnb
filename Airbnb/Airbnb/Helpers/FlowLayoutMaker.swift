//
//  FlowLayoutMaker.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/25.
//

import UIKit
import HorizonCalendar

enum HomeSection: Int {
    case banner
    case localSite
    case randomSite
}

enum FilterSection: Int {
    case container
    case filterList
}

protocol LayoutProvidable {
    func createSection(at section: Int, env: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection?
}

enum FlowLayout {

    static func makeCompositionalLayout (_ provider: LayoutProvidable) -> UICollectionViewCompositionalLayout {
        let layout = UICollectionViewCompositionalLayout { (sectionIndex: Int, layoutEnvironment: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection? in
            guard let section = provider.createSection(at: sectionIndex, env: layoutEnvironment) else {return nil}
            return section
        }
        return layout
    }
}

struct HomeLayout: LayoutProvidable {

    func createSection(at section: Int, env: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection? {
        let section = HomeSection.init(rawValue: section)

        switch section {
        case .banner:
            let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                                          heightDimension: .fractionalHeight(1.0))
            let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                                   heightDimension: .fractionalHeight(0.5))
            let item = NSCollectionLayoutItem(layoutSize: itemSize)
            let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
            let section = NSCollectionLayoutSection(group: group)
            return section

        case .localSite:
            let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1), heightDimension: .fractionalHeight(0.5))
            let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(0.7), heightDimension: .fractionalHeight(0.2))
            let item = NSCollectionLayoutItem(layoutSize: itemSize)
            item.contentInsets.trailing = 10
            item.contentInsets.bottom = 10
            let group = NSCollectionLayoutGroup.vertical(layoutSize: groupSize, subitems: [item])
            let section = NSCollectionLayoutSection(group: group)
            section.boundarySupplementaryItems = [.init(layoutSize: .init(widthDimension: .fractionalWidth(1), heightDimension: .absolute(70)), elementKind: UICollectionView.elementKindSectionHeader, alignment: .topLeading)]
            section.contentInsets.leading = 10
            section.orthogonalScrollingBehavior = .groupPaging
            return section

        case .randomSite:
            let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1), heightDimension: .fractionalHeight(1))
            let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(0.8), heightDimension: .fractionalHeight(0.6))
            let item = NSCollectionLayoutItem(layoutSize: itemSize)
            item.contentInsets.bottom = 10
            item.contentInsets.trailing = 10
            let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
            let section = NSCollectionLayoutSection(group: group)
            section.boundarySupplementaryItems = [.init(layoutSize: .init(widthDimension: .fractionalWidth(1), heightDimension: .absolute(100)), elementKind: UICollectionView.elementKindSectionHeader, alignment: .topLeading)]
            section.contentInsets.leading = 10
            section.orthogonalScrollingBehavior = .groupPaging
            return section

        case .none:
            return nil
        }
    }
}

 struct FilterLayout: LayoutProvidable {
     func createSection(at section: Int, env: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection? {
        let section = FilterSection.init(rawValue: section)
        switch section {

        case .container:
            let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                                          heightDimension: .fractionalHeight(1.0))
            let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                                   heightDimension: .fractionalHeight(0.7))
            let item = NSCollectionLayoutItem(layoutSize: itemSize)
            let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
            let section = NSCollectionLayoutSection(group: group)
            return section

        case .filterList:
            let configuration = UICollectionLayoutListConfiguration(appearance: .plain)
            let section = NSCollectionLayoutSection.list(using: configuration, layoutEnvironment: env)
            return section

        case .none:
            return nil
        }

    }
 }
