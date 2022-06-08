//
//  HeadCountDataSource.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/08.
//

import UIKit

class HeadCountDataSource: NSObject, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        HeadCountCell()
    }
}
