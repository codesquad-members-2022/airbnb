//
//  SearchInfoTrackingTableViewDataSource.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/06.
//

import UIKit

class SearchInfoTrackingTableViewDataSource: NSObject, UITableViewDataSource {
    
    /// 뷰 컨트롤러의 DataSource를 나눈 시점에서 모델의 참조를 받는 상황은
    /// 모델을 소유한 뷰 컨트롤러가 사라질 때 Memory Leak 을 발생시킬 수 있다고 생각하여 weak으로 선언하였습니다.
    weak var model: SearchInfoTrackingModel?
    
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
