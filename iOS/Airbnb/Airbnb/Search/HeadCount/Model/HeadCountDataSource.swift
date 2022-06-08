//
//  HeadCountDataSource.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import UIKit

class HeadCountDataSource: NSObject, UITableViewDataSource {
    
    var headCountModel = HeadCountModel()
    var onUpdate: ((HeadCountDTO) -> Void)?
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: HeadCountCell.reuseIdentifier, for: indexPath) as? HeadCountCell else {
            return UITableViewCell()
        }
        
        var titleText = ""
        var descriptionText = ""
        var headCount = 0
        
        if indexPath.row == 0 {
            titleText = "성인"
            descriptionText = "만 13세 이상"
            headCount = headCountModel.currentHeadCount.adults
        } else if indexPath.row == 1 {
            titleText = "어린이"
            descriptionText = "만 2-12세"
            headCount = headCountModel.currentHeadCount.children
        } else if indexPath.row == 2 {
            titleText = "유아"
            descriptionText = "만 2세 미만"
            headCount = headCountModel.currentHeadCount.infants
        }
        
        cell.setTitle(titleText)
        cell.setDescription(descriptionText)
        cell.setNumber(headCount)
        cell.selectionStyle = .none
        
        return cell
    }
}

enum HeadCountType: Int {
    case adult = 0
    case child = 1
    case infant = 2
}

