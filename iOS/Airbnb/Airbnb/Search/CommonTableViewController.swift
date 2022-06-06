//
//  CommonTableViewController.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/02.
//

import UIKit
import SnapKit

class CommonTableViewController: BackgroundViewController {
    
    let tableView = UITableView()
    let contentView = UIView()
    private var dataSource: CommonTableViewDataSource?
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
        setTableView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setTableView()
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        setTableView()
    }
    
    func setTableView() {
        
        view.addSubview(contentView)
        view.addSubview(tableView)
        
        contentView.snp.makeConstraints {
            $0.top.leading.trailing.equalTo(view.readableContentGuide) // view 는 전체 뷰를 말하고, view.readableContentGuide 는 전체 뷰 중 네비게이션 바와 툴 바를 제외한 뷰의 가이드를 말합니다.
            $0.bottom.equalTo(tableView.snp.top)
        }
        
        tableView.snp.makeConstraints {
            $0.leading.bottom.trailing.equalTo(view.readableContentGuide)
            $0.height.equalTo(CGFloat(44 * 4))
        }
        
        tableView.register(CommonTableViewCell.self, forCellReuseIdentifier: CommonTableViewCell.reuseIdentifier)
        dataSource = CommonTableViewDataSource()
        tableView.dataSource = dataSource
        tableView.rowHeight = 44
        tableView.reloadData()
    }
    
    func setTableViewHidden(_ hidden: Bool = true) {
        tableView.snp.updateConstraints {
            $0.height.equalTo(CGFloat(hidden ? 0 : 44*4))
        }
    }
    
    func reloadTableView(_ dto: SearchInfo) {
        dataSource?.searchInfo = dto
        tableView.reloadData()
    }
}
