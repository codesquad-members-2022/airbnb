//
//  NetworkCommonComponents.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/30.
//

import Foundation
import Alamofire

class NetworkCommonComponents {
    private(set) var baseURL: URL?
    let services = NetworkServices()
    
    init(urlString: String) {
        self.baseURL = URL(string: urlString)
    }
}
