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
    private var dataSource: SearchInfoTrackingTableViewDataSource?
    
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
            $0.height.equalTo(CGFloat(cellHeight * 4))
        }
        
        contentView.layoutIfNeeded()
        
        tableView.register(SearchInfoTrackingTableViewCell.self, forCellReuseIdentifier: SearchInfoTrackingTableViewCell.reuseIdentifier)
        dataSource = SearchInfoTrackingTableViewDataSource()
        tableView.dataSource = dataSource
        tableView.rowHeight = cellHeight
    }
    
    func setTableViewHidden(_ hidden: Bool = true) {
        tableView.snp.updateConstraints {
            $0.height.equalTo(CGFloat(hidden ? 0 : cellHeight*4))
        }
    }
    
    func reloadTableView(_ dto: SearchInfo) {
        dataSource?.searchInfo = dto
        tableView.reloadData()
    }
}
