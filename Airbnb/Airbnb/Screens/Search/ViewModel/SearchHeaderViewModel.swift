//
//  SearchHeaderViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/30.
//

import Foundation

struct SearchHeaderViewModel {
    let title: String

    init(model: SearchHeader) {
        self.title = model.title
    }
}
