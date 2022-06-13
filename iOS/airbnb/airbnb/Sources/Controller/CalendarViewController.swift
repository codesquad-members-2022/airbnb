//
//  CalendarViewController.swift
//  airbnb
//
//  Created by Jihee hwang on 2022/06/07.
//

import UIKit
import SnapKit
import FSCalendar

final class CalendarViewController: UIViewController {
    
    private let clearButton: UIBarButtonItem = {
        let buttonItem = UIBarButtonItem(title: "지우기", style: .plain, target: nil, action: nil)
        buttonItem.tintColor = .gray3
        return buttonItem
    }()
    
    private let nextButton: UIBarButtonItem = {
        let buttonItem = UIBarButtonItem(title: "다음", style: .plain, target: nil, action: nil)
        buttonItem.tintColor = .black
        return buttonItem
    }()
    
    private lazy var toolBar: UIToolbar = {
        let toolBar = UIToolbar()
        let flexibleSpace = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        toolBar.setItems([clearButton, flexibleSpace, nextButton], animated: true)
        return toolBar
    }()

    private let calendarView = FSCalendar(frame: .zero)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        layout()
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(false)
        navigationController?.tabBarController?.tabBar.isHidden = false
    }
    
    private func configureView() {
        view.backgroundColor = .white
        title = "숙소 찾기"
        
        navigationController?.tabBarController?.tabBar.isHidden = true
    }
    
    private func layout() {
        view.addSubview(toolBar)
        view.addSubview(calendarView)
        
        toolBar.snp.makeConstraints {
            $0.bottom.leading.trailing.equalTo(view.safeAreaLayoutGuide)
        }
        
        calendarView.snp.makeConstraints {
            $0.top.leading.trailing.bottom.equalTo(view.safeAreaLayoutGuide)
        }
    }
}
