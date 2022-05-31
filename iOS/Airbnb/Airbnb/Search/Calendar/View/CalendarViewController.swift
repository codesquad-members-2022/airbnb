//
//  CalendarViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/30.
//

import UIKit

class CalendarViewController: BackgroundViewController, CommonViewControllerProtocol {
    
    let reservationModel: ReservationModel
    let calendarModel = SearchCalendarModel()
    
    private let calendar = Calendar(identifier: .gregorian)
    
    private let collectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.minimumLineSpacing = 0
        layout.minimumInteritemSpacing = 0
        
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        collectionView.isScrollEnabled = false
        //TODO: - 캘린더 완성되면 지울 내용 - 빨간 배경색
        collectionView.backgroundColor = .red
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
    
    func attribute() {
        view.backgroundColor = .systemBackground
        navigationItem.title = "숙소 찾기"
        navigationController?.isToolbarHidden = false
        self.toolbarItems = setUpToolBarItems()
    }
    
    func layout() {
        view.addSubview(collectionView)
        
        collectionView.snp.makeConstraints {
            $0.top.leading.trailing.equalTo(view.readableContentGuide)
            $0.height.equalTo(view.snp.height).multipliedBy(0.6)
        }
    }
    
    func bind() {
        
    }
    
    private func setUpToolBarItems() -> [UIBarButtonItem] {
        let spacing = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        let skipButton = UIBarButtonItem(title: "건너뛰기", style: .plain, target: self, action: #selector(pushNextVC))
        let nextButton = UIBarButtonItem(title: "다음", style: .plain, target: self, action: nil)
        nextButton.isEnabled = false
        return [skipButton, spacing, nextButton]
    }
    
    @objc func pushNextVC() {
        //TODO: - graphic 관련한 뷰컨트롤러로 변경
        let nextVC = PriceGraphViewController()
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
}
