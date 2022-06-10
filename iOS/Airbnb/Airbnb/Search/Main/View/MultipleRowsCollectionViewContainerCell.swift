//
//  MultipleRowsCollectionViewContainerCell.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/24.
//

import UIKit
import SnapKit

class MultipleRowsCollectionViewContainerCell: UICollectionViewCell {
    
    private var multipleRowCollectionViewController: MultipleRowsCollectionViewController?
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    func applyAttributes(cellType: SearchCellCommonType.Type, items: [SearchViewModel], cellWidth: CGFloat, rowCount: UInt) {
        
        multipleRowCollectionViewController = MultipleRowsCollectionViewController(
            cellType: cellType,
            items: items,
            cellWidth: cellWidth,
            rowCount: rowCount)
        
        guard let collectionViewController = multipleRowCollectionViewController else {
            return
        }
        
        contentView.subviews.forEach({ $0.removeFromSuperview() })
        contentView.addSubview(collectionViewController.collectionView)
        layout()
    }
    
    private func layout() {
        multipleRowCollectionViewController?.collectionView.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
    }
}
