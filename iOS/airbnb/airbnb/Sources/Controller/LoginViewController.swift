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
        var config = UIButton.Configuration.bordered()
        config.baseBackgroundColor = .white
        config.cornerStyle = .capsule
        config.background.cornerRadius = 20
        config.background.strokeColor = .line
        config.baseForegroundColor = .black
        config.image = UIImage(named: "GitHub_Logo")
        config.imagePadding = 10
        config.imagePlacement = .leading
        
        let button = UIButton(configuration: config)
        button.addTarget(self, action: #selector(didTabGithubLogin(_:)), for: .touchUpInside)
        return button
    }()
    
    private let googleLoginButton: UIButton = {
        var config = UIButton.Configuration.bordered()
        config.baseBackgroundColor = .white
        config.cornerStyle = .capsule
        config.background.cornerRadius = 20
        config.background.strokeColor = .line
        config.baseForegroundColor = .black
        config.image = UIImage(named: "Google_Logo")
        config.imagePadding = 10
        config.imagePlacement = .leading
        
        let button = UIButton(configuration: config)
        button.addTarget(self, action: #selector(didTabGithubLogin(_:)), for: .touchUpInside)
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
        view.addSubview(gitHubLoginButton)
        view.addSubview(googleLoginButton)
        
        UIComponents.navigationBarUnderLineView.snp.makeConstraints {
            $0.top.leading.trailing.equalTo(view.safeAreaLayoutGuide)
            $0.height.equalTo(1)
        }
        
        gitHubLoginButton.snp.makeConstraints {
            $0.centerX.equalToSuperview()
            $0.centerY.equalToSuperview().offset(-40)
            $0.width.equalTo(300)
            $0.height.equalTo(60)
        }
        
        googleLoginButton.snp.makeConstraints {
            $0.centerX.equalToSuperview()
            $0.centerY.equalToSuperview().offset(40)
            $0.width.equalTo(300)
            $0.height.equalTo(60)
        }
    }
    
    @objc func didTabGithubLogin(_ sender: Any) {
        LoginManager.shared.requestCode()
    }
}
