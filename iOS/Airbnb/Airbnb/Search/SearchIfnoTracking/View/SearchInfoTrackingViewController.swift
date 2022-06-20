//
//  SearchInfoTrackingViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/02.
//

import UIKit
import SnapKit

class SearchInfoTrackingViewController: BackgroundViewController {
    
    let tableView = UITableView()
    let contentView = UIView()
    private var dataSource = SearchInfoTrackingTableViewDataSource()
    private(set) var model: SearchInfoModel?
    
    private let cellHeight: CGFloat = 44
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setTableView()
    }
    
    func setTableView() {
        
        view.addSubview(contentView)
        view.addSubview(tableView)
        
        contentView.snp.makeConstraints {
            $0.leading.trailing.equalTo(view)
            $0.top.equalTo(view.safeAreaLayoutGuide)
            $0.bottom.equalTo(tableView.snp.top)
        }
        
        tableView.snp.makeConstraints {
            $0.leading.bottom.trailing.equalTo(view.safeAreaLayoutGuide)
            $0.height.equalTo(cellHeight * 4)
        }
        
        contentView.layoutIfNeeded()
        
        tableView.register(SearchInfoTrackingTableViewCell.self, forCellReuseIdentifier: SearchInfoTrackingTableViewCell.reuseIdentifier)
        
        tableView.dataSource = dataSource
        tableView.rowHeight = cellHeight
        tableView.isScrollEnabled = false
        
        if let model = model {
            dataSource.setModel(model)
        }
        
        tableView.reloadData()
    }
    
    func setModel(_ model: SearchInfoModel?) {
        self.model = model
        
        if let model = model {
            dataSource.setModel(model)
        }
    }
    
    func setTableViewHidden(_ hidden: Bool = true) {
        tableView.snp.updateConstraints {
            $0.height.equalTo(hidden ? 0 : cellHeight*4)
        }
    }
    
    func setPriceRange(_ lowest: UInt, _ highest: UInt) {
        guard let model = model as? SearchInfoTrackingModel else {
            return
        }

        model.highestPrice = highest
        model.lowestPrice = lowest
        tableView.reloadData()
    }
    
    func reloadTableView(dict: [SearchInfoType: Any]) {
        model?.setModelData(using: dict)
        tableView.reloadData()
    }
}
