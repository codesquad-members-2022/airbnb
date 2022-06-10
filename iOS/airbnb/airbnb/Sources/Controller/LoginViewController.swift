//
//  LoginViewController.swift
//  airbnb
//
//  Created by Jihee hwang on 2022/06/10.
//

import UIKit
import SnapKit

final class LoginViewController: UIViewController {
    
    private let gitHubLoginButton: UIButton = {
        let button = UIButton()
        button.setTitle("", for: <#T##UIControl.State#>)
        return button
    }()
    
    let googleLoginButton: UIButton = {
        var config = UIButton.Configuration.bordered()
        config.baseBackgroundColor = .white
        config.cornerStyle = .capsule
        config.background.cornerRadius = 20
        config.background.strokeColor = .grey3
        config.title = "구글 로그인"
        config.baseForegroundColor = .black
        config.image = UIImage(named: "Google_Logo")
        config.imagePadding = 10
        config.imagePlacement = .leading
       
        let button = UIButton(configuration: config)
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        layout()
    }
    
    private func configureView() {
        view.backgroundColor = .white
        title = "로그인"
        navigationItem.backBarButtonItem = UIComponents.backButton
        
        navigationController?.tabBarController?.tabBar.isHidden = true
    }
    
    private func layout() {
        view.addSubview(UIComponents.navigationBarUnderLineView)
        
        UIComponents.navigationBarUnderLineView.snp.makeConstraints {
            $0.top.leading.trailing.equalTo(view.safeAreaLayoutGuide)
            $0.height.equalTo(1)
        }
    }
}
