//
//  CalendarViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/30.
//

import UIKit


class CalendarViewController: SearchInfoTrackingViewController, CommonViewControllerProtocol {
    
    let reservationModel: ReservationModel
    var calendarModel: CalenderModelProtocol
    
    private let collectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.minimumLineSpacing = 0
        layout.minimumInteritemSpacing = 0
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        collectionView.backgroundColor = .systemBackground
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.showsVerticalScrollIndicator = false
        return collectionView
    }()
    
    var dataSource: UICollectionViewDiffableDataSource<Int, Day>!
    
    private let weekdayView: UIView = WeekdayView()
    
    init(reservationModel: ReservationModel, calendarModel: CalenderModelProtocol) {
        self.reservationModel = reservationModel
        self.calendarModel = calendarModel
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
        
        collectionView.delegate = self
        let cellRegistration = UICollectionView.CellRegistration<CalendarViewCell, Day> {
            [weak self] (cell, indexPath, identifier) in
            DispatchQueue.main.async {
                guard let day = self?.calendarModel.getADay(at: indexPath) else { return }
                cell.day = day
            }
        }
        
        let headerRegister = UICollectionView.SupplementaryRegistration<CalendarHearderView>(
            elementKind: UICollectionView.elementKindSectionHeader) {
                [weak self] (supplementaryView, elementKind, indexPath) in
                DispatchQueue.main.async {
                    supplementaryView.baseDate = self?.calendarModel.getLastDate(at: indexPath)
                }
            }
        
        dataSource = UICollectionViewDiffableDataSource<Int, Day>(
            collectionView: collectionView,
            cellProvider: { collectionView, indexPath, itemIdentifier in
                collectionView.dequeueConfiguredReusableCell(
                    using: cellRegistration,
                    for: indexPath,
                    item: itemIdentifier)
            })
        
        dataSource.supplementaryViewProvider = { (_, _, index) in
            return self.collectionView.dequeueConfiguredReusableSupplementary(
                using: headerRegister, for: index)
        }
        
        // initail date
        performQuery()
    }
    
    
    
    func performQuery(days: [Day]? = nil) {
        var snapshot = NSDiffableDataSourceSnapshot<Int, Day>()
        if let days = days {
            var newSnapshot = dataSource.snapshot()
            newSnapshot.reloadItems(days)
            dataSource.apply(newSnapshot, animatingDifferences: true)
        }
        //MARK: - 초기 설정
        else {
            let month = calendarModel.month
            let sections = Array(0..<month.count)
            sections.forEach {
                snapshot.appendSections([$0])
                snapshot.appendItems(month[$0].result)
            }
            dataSource.apply(snapshot, animatingDifferences: true)
        }
    }
    
    
    func attribute() {
        contentView.backgroundColor = .systemBackground
        navigationItem.title = "숙소 찾기"
        navigationController?.isToolbarHidden = false
        self.toolbarItems = setUpToolBarItems(isEmpty: true)
        setUpCollectionViewDelegates()
    }
    
    func layout() {
        view.addSubview(weekdayView)
        view.addSubview(collectionView)
        
        weekdayView.snp.makeConstraints {
            $0.leading.trailing.equalTo(view.readableContentGuide)
            $0.top.equalTo(view.readableContentGuide).offset(32)
        }
        
        collectionView.snp.makeConstraints {
            $0.leading.trailing.equalTo(weekdayView)
            $0.top.equalTo(weekdayView.snp.bottom)
            $0.height.equalTo(view.snp.height).multipliedBy(0.5)
        }
        
    }
    
    func bind() {
        calendarModel.onUpdate = { [weak self] days in
            self?.performQuery(days: days)
            self?.toolbarItems = self?.setUpToolBarItems(isEmpty: false)
            if days.count > 1 {
                self?.reloadTableView(dict: [.date: CheckInOutRange(checkIn: days.first?.date, checkOut: days.last?.date)])
            }
            else if days.count == 1 {
                self?.reloadTableView(dict: [.date: CheckInOutRange(checkIn: days.first?.date, checkOut: nil)])
            }
        }
        
        calendarModel.onUpdateBeforeDays = { [weak self] days in
            self?.performQuery(days: days)
        }
    }
    
    @objc func pushNextVC() {
        let nextVC = PriceGraphViewController()
        nextVC.setModel(model)
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
    
    @objc func clearReservationField() {
        calendarModel.checkinDayIndex = nil
        calendarModel.checkoutDayIndex = nil
        reloadTableView(dict: [.date: CheckInOutRange(checkIn: nil, checkOut: nil)])
        self.toolbarItems = setUpToolBarItems(isEmpty: true)
    }
}

extension CalendarViewController {
    private func setUpToolBarItems(isEmpty: Bool) -> [UIBarButtonItem] {
        let spacing = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        let skipButton =  UIBarButtonItem(title: "건너뛰기", style: .plain, target: self, action: #selector(pushNextVC))
        let nextButton = UIBarButtonItem(title: "다음", style: .plain, target: self, action: #selector(pushNextVC))
        let clearButton = UIBarButtonItem(title: "지우기", style: .plain, target: self, action: #selector(clearReservationField))
        if isEmpty {
            nextButton.isEnabled = false
            return [skipButton, spacing, nextButton]
        } else {
            nextButton.isEnabled = true
            return [clearButton, spacing, nextButton]
        }
    }
    
}

extension CalendarViewController: UICollectionViewDelegate {
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard
            let cell = collectionView.cellForItem(at: indexPath) as? CalendarViewCell,
            cell.day?.isWithInDisplayedMonth == true,
            cell.day?.isBeforeToday == false else { return }
        calendarModel.validateCheckDate(at: indexPath)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        let width: CGFloat = self.collectionView.frame.width
        let height: CGFloat = 60
        return CGSize(width: width, height: height)
    }
    
}

extension CalendarViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let width: Int = Int(self.collectionView.frame.width / 7)
        let height: Int = 50
        return CGSize(width: width, height: height)
    }
}
