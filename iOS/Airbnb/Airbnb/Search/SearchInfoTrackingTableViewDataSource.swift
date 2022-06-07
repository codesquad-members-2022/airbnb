//
//  SearchInfoTrackingTableViewDataSource.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/06.
//

import UIKit

protocol SearchInfoDataSource: UITableViewDataSource {
    func setModel(_ model: SearchInfoModel)
}

class SearchInfoTrackingTableViewDataSource: NSObject, SearchInfoDataSource {
    
    private var model: SearchInfoModel?
    
    func setModel(_ model: SearchInfoModel) {
        self.model = model
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        4
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: SearchInfoTrackingTableViewCell.reuseIdentifier, for: indexPath) as? SearchInfoTrackingTableViewCell else {
            return UITableViewCell()
        }
        
        guard let model = model else {
            return UITableViewCell()
        }

        if let type = SearchInfoType.getType(from: indexPath.row) {
            cell.setInformation(model.searchInfo, infoType: type)
        }
        
        return cell
    }
}
