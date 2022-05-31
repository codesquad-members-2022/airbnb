//
//  CalendarViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/30.
//

import UIKit

class CalendarViewController: UIViewController, CommonViewControllerProtocol {
    
    
    
    var reservationModel: ReservationModel
    
    init(reservationModel: ReservationModel) {
        self.reservationModel = reservationModel
        super.init(nibName: nil, bundle: nil)
        attribute()
        layout()
        bind()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .darkGray
    }
    
    func attribute() {
        var items = [UIBarButtonItem]()
        items.append(
            UIBarButtonItem(title: "건너뛰기", style: .plain, target: self, action: #selector(pushNextVC))
        )
        items.append(
            UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        )
        items.append(
            UIBarButtonItem(title: "다음", style: .plain, target: self, action: nil)
        )
        self.toolbarItems = items
    }
    
    func layout() {
        
    }
    
    func bind() {
        
    }
    
    @objc func pushNextVC() {
        //TODO: - graphic 관련한 뷰컨트롤러로 변경
        let nextVC = UIViewController()
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
}
