//
//  CommonTableViewDataSource.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/06.
//

import UIKit

class CommonTableViewDataSource: NSObject, UITableViewDataSource {
    
    var searchInfo = SearchInfo()
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        4
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: CommonTableViewCell.reuseIdentifier, for: indexPath) as? CommonTableViewCell else {
            return UITableViewCell()
        }
        
        if let type = SearchInfoType.getType(from: indexPath.row) {
            cell.setInformation(searchInfo, infoType: type)
        }
        
        return cell
    }
}
