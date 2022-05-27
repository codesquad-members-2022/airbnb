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

    private let didStartDateChanged: ((Date) -> Void)? = nil
    private let didEndDateChanged: ((Date) -> Void)? = nil

    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(collectionView)
        setLayout()
    }

    func setLayout() {
        NSLayoutConstraint.activate([
          collectionView.leadingAnchor.constraint(equalTo: view.readableContentGuide.leadingAnchor),
          collectionView.trailingAnchor.constraint(equalTo: view.readableContentGuide.trailingAnchor),
          collectionView.topAnchor.constraint(equalTo: view.readableContentGuide.topAnchor),
          collectionView.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
    }
}
