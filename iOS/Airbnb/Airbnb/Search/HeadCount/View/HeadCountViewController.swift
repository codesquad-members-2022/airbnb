//
//  HeadCountViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import UIKit

class HeadCountViewController: SearchInfoTrackingViewController, CommonViewControllerProtocol {
    
    private let headCountTableView: UITableView = {
        let tableview = UITableView()
        tableview.isScrollEnabled = false
        tableview.separatorStyle = .none
        return tableview
    }()
    
    private var dataSource: HeadCountDataSource?
    private let headCountRowHeight: CGFloat = 84
    
    override func viewDidLoad() {
        super.viewDidLoad()
        attribute()
        layout()
        bind()
    }
    
    func attribute() {
        dataSource = HeadCountThreePersonDataSource()
        headCountTableView.dataSource = self.dataSource
        headCountTableView.register(HeadCountCell.self, forCellReuseIdentifier: HeadCountCell.reuseIdentifier)
    }
    
    func layout() {
        contentView.addSubview(headCountTableView)
        
        headCountTableView.snp.makeConstraints {
            $0.leading.trailing.bottom.equalToSuperview()
            $0.top.equalToSuperview().inset(32)
        }
        headCountTableView.rowHeight = headCountRowHeight
        
        contentView.layoutIfNeeded()
    }
    
    func bind() {
        dataSource?.onUpdate = { [weak self] dto in
            self?.headCountTableView.reloadData()
            self?.model?.setModelData(using: [.headCount: 0])
        }
    }
}
