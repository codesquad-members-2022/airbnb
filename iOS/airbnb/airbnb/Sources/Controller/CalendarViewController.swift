//
//  CalendarViewController.swift
//  airbnb
//
//  Created by Jihee hwang on 2022/06/07.
//

import UIKit
import SnapKit

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
    
    private let collectionView: UICollectionView = {
        let layout = Layout.calendar()
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        return collectionView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        setCollectionView()
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
    
    private func setCollectionView() {
        collectionView.dataSource = self
        
        collectionView.register(CalendarCell.self, forCellWithReuseIdentifier: CalendarCell.identifier)
    }
    
    private func layout() {
        view.addSubview(toolBar)
        view.addSubview(collectionView)
        
        toolBar.snp.makeConstraints {
            $0.bottom.leading.trailing.equalTo(view.safeAreaLayoutGuide)
        }
        
        collectionView.snp.makeConstraints {
            $0.top.leading.trailing.equalTo(view.safeAreaLayoutGuide)
            $0.bottom.equalTo(toolBar.snp.top)
        }
    }
}

extension CalendarViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        1
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: CalendarCell.identifier, for: indexPath) as? CalendarCell else { return UICollectionViewCell() }
        return cell
    }
}
