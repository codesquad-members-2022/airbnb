//
//  CalendarViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/30.
//

import UIKit

class CalendarViewController: BackgroundViewController, CommonViewControllerProtocol {
    
    let reservationModel: ReservationModel
    let calendarModel: CalendarModel = CalendarModel(baseDate: Date())
    
    private let collectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.minimumLineSpacing = 0
        layout.minimumInteritemSpacing = 0
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        collectionView.isScrollEnabled = true
        collectionView.isPagingEnabled = true
        collectionView.backgroundColor = .systemBackground
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        return collectionView
    }()
    
    init(reservationModel: ReservationModel) {
        self.reservationModel = reservationModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
        
    override func viewDidLoad() {
        super.viewDidLoad()
        attribute()
        layout()
        bind()
    }
    
    private func setUpCollectionViewDelegates() {
        collectionView.register(CalendarViewCell.self, forCellWithReuseIdentifier: CalendarViewCell.reuseIdentifier)
        collectionView.delegate = self
        collectionView.dataSource = self
    }
    
    func attribute() {
        view.backgroundColor = .systemBackground
        navigationItem.title = "숙소 찾기"
        navigationController?.isToolbarHidden = false
        self.toolbarItems = setUpToolBarItems()
        setUpCollectionViewDelegates()
    }
    
    func layout() {
        view.addSubview(collectionView)
        
        collectionView.snp.makeConstraints {
            $0.top.leading.trailing.equalTo(view.readableContentGuide)
            $0.height.equalTo(view.snp.height).multipliedBy(0.6)
        }
    }
    
    func bind() {
        calendarModel.onUpdate = { [weak self] in
            self?.collectionView.reloadData()
        }
//
    }
    
    private func setUpToolBarItems() -> [UIBarButtonItem] {
        let spacing = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        let skipButton = UIBarButtonItem(title: "건너뛰기", style: .plain, target: self, action: #selector(pushNextVC))
        let nextButton = UIBarButtonItem(title: "다음", style: .plain, target: self, action: nil)
        nextButton.isEnabled = false
        return [skipButton, spacing, nextButton]
    }
    
    @objc func pushNextVC() {
        let nextVC = PriceGraphViewController()
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
}

extension CalendarViewController: UICollectionViewDelegate, UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return calendarModel.days.count
    }
    
//    func numberOfSections(in collectionView: UICollectionView) -> Int {
//        calendarModel.count
//    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = self.collectionView.dequeueReusableCell(withReuseIdentifier: CalendarViewCell.reuseIdentifier, for: indexPath) as? CalendarViewCell else {
            return UICollectionViewCell()
        }
        let day = calendarModel.days[indexPath.row]
        cell.day = day
        return cell
    }
}

extension CalendarViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: self.collectionView.frame.width / 7, height: self.collectionView.frame.width / 7)
    }
}
