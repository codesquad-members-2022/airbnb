//
//  Login.swift
//  airbnb
//
//  Created by Jihee hwang on 2022/06/09.
//

import UIKit
import Alamofire

class LoginManager {
    
    static let shared = LoginManager()
    
    private let clientId = "3cc980e29d87204c53ed"
    private let clientSecret = ""
    
    func requestCode() {
        let scope = "user,email" // 사용자의 깃헙에서 접근하려고 하는 위치. default는 empty list
        let urlString = "https://github.com/login/oauth/authorize?client_id=\(clientId)&scope=\(scope)"
        if let url = URL(string: urlString), UIApplication.shared.canOpenURL(url) { UIApplication.shared.open(url) }
    }
    
    // Access Token 서버에 보내주기
    func requestAccessToken(with code: String) {
        let url = "https://github.com/login/oauth/access_token"
        let parameters = ["client_id": clientId,
                          "client_secret": clientSecret,
                          "code": code]
        
        let headers: HTTPHeaders = ["Accept": "application/json"]
        let dataRequest = AF.request(url,
                                     method: .post,
                                     parameters: parameters,
                                     encoding: JSONEncoding.default,
                                     headers: headers)
    }
}
