//
//  SearchViewModel.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/24.
//

import Foundation

struct SearchViewModel: Hashable {
    let imageData: Data
    let titleLabel: String
    let subTitleLabel: String
    
    private let identifier = UUID()
    
    func hash(into hasher: inout Hasher) {
      hasher.combine(identifier)
    }
}
