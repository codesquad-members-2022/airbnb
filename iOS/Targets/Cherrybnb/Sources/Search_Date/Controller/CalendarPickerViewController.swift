//
//  CalendarPickerViewController.swift
//  Cherrybnb
//
//  Created by Bumgeun Song on 2022/05/27.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import UIKit

class CalendarPickerViewController: UIViewController {
    
    lazy var collectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.minimumLineSpacing = 0
        layout.minimumInteritemSpacing = 0

        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        collectionView.isScrollEnabled = false
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        return collectionView
    }()
    
    let calendarPresenter = CalendarPresenter()

    private let didDateSelect: ((Date) -> Void)?
    private let didDataRangeSelect: ((Range<Date>) -> Void)?

    init(didDateSelect: ((Date) -> Void)?, didDataRangeSelect: ((Range<Date>) -> Void)?) {
        self.didDateSelect = didDateSelect
        self.didDataRangeSelect = didDataRangeSelect
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(collectionView)
        collectionView.register(CalendarPickerViewCell.self, forCellWithReuseIdentifier: CalendarPickerViewCell.reuseIdentifier)
        collectionView.delegate = self
        collectionView.dataSource = self
        setLayout()
    }

    private func setLayout() {
        NSLayoutConstraint.activate([
          collectionView.leadingAnchor.constraint(equalTo: view.readableContentGuide.leadingAnchor),
          collectionView.trailingAnchor.constraint(equalTo: view.readableContentGuide.trailingAnchor),
          collectionView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
          collectionView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
    }
}

extension CalendarPickerViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return calendarPresenter.dayCount ?? 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: CalendarPickerViewCell.reuseIdentifier, for: indexPath) as? CalendarPickerViewCell, let day = calendarPresenter[indexPath.item] else {
            return UICollectionViewCell()
        }
        
        cell.setDay(day)
        
        return cell
    }
}

extension CalendarPickerViewController: UICollectionViewDelegate {
    
}
