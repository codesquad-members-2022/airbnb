//
//  BaseFilterViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/31.
//

import UIKit

final class FilterViewController: UIViewController {

    private var filterForm: UICollectionView?
    private var toolbar = UIToolbar(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: 35))
    private var filterViewModel: FilterViewModel?

    init(filterViewModel: FilterViewModel) {
        self.filterViewModel = filterViewModel
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        tabBarController?.tabBar.isHidden = false
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureDisplay()
        configureChildViewControllers()
        configureConstraints()
    }

    private func configureDisplay() {
        setViewController()
        setFilterForm()
        setToolBar()
        setDataBinding()
    }

    private func configureChildViewControllers() {
        let calendar = CalendarViewController()
        let price = UIViewController()
        price.view.backgroundColor = .darkGray
        let occupants = UIViewController()
        occupants.view.backgroundColor = .blue
        [calendar, price, occupants].forEach({addChild($0)})

        calendar.periodSelectionHandler = {[weak self] period in
            guard let self = self else {return}
            self.filterViewModel?.period.value = period
            self.filterViewModel?.toolBarStatus.value = FilterViewModel.ToolbarStatus(currentField: .period, isFilled: true)
        }

    }

    private func setViewController() {
        title = "숙소 찾기"
        view.backgroundColor = .white
    }

    private func setFilterForm() {
        let layoutProvider = FilterLayout()
        let layout = FlowLayout.makeCompositionalLayout(layoutProvider)
        filterForm = UICollectionView(frame: .zero, collectionViewLayout: layout)
        filterForm?.isScrollEnabled = false
        filterForm?.dataSource = self
        filterForm?.register(FilterListCell.self, forCellWithReuseIdentifier: FilterListCell.id)
        filterForm?.register(ContainerCell.self, forCellWithReuseIdentifier: ContainerCell.id)
        filterForm?.translatesAutoresizingMaskIntoConstraints = false
    }

    private func setToolBar() {
        tabBarController?.tabBar.isHidden = true
        toolbar.translatesAutoresizingMaskIntoConstraints = false
        toolbar.barTintColor = .gray6
        let flexibleSpace = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
        let fixedSpace = UIBarButtonItem(barButtonSystemItem: .fixedSpace, target: self, action: nil)
        fixedSpace.width = 16
        let skip = UIBarButtonItem(image: nil, style: .plain, target: self, action: #selector(didTapFirstToolItem))
        skip.title = "건너뛰기"
        let next = UIBarButtonItem(image: nil, style: .plain, target: self, action: #selector(didTapSecondToolItem))
        next.title = "다음"
        next.isEnabled = false
        toolbar.setItems([fixedSpace, skip, flexibleSpace, next, fixedSpace], animated: false)
    }

    private func configureConstraints() {
        guard let filterForm = filterForm else {return}
        view.addSubview(filterForm)
        view.addSubview(toolbar)
        NSLayoutConstraint.activate([
            filterForm.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            filterForm.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            filterForm.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            filterForm.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            toolbar.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            toolbar.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            toolbar.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
    }

    private func setDataBinding() {
        guard let filterForm = filterForm, let filterViewModel = filterViewModel else {return}

        filterViewModel.location.bind(listener: { model in
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .location, viewModel: viewModel)
            filterForm.reloadData()
        })

        filterViewModel.period.bind(listener: { model in
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .period, viewModel: viewModel)
            filterForm.reloadData()
        })

        filterViewModel.price.bind(listener: { model in
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .price, viewModel: viewModel)
            filterForm.reloadData()
        })

        filterViewModel.occupants.bind(listener: { model in
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .occupants, viewModel: viewModel)
            filterForm.reloadData()
        })

        filterViewModel.toolBarStatus.bind { currentField in
            if currentField.isFilled {
                self.toolbar.items?[1].title = "지우기"
                self.toolbar.items?[3].isEnabled = true
            } else {
                self.toolbar.items?[1].title = "건너 뛰기"
                self.toolbar.items?[3].isEnabled = false
            }
        }
    }

}

extension FilterViewController {
    private func isFilled(field: FilterFields) -> Bool {
        return filterViewModel?.listCellViewModel[field]?.fieldValue != nil ? true:false
    }

    @objc func didTapFirstToolItem() {
        guard let currentField = filterViewModel?.toolBarStatus.value.currentField else {return showNextViewController()}
        if isFilled(field: currentField) {
            switch currentField {
            case .location:
                return
            case .period:
                filterViewModel?.period.value = nil
                filterViewModel?.toolBarStatus.value = FilterViewModel.ToolbarStatus(currentField: .period, isFilled: false)
                let currentVC = self.children.first as? CalendarViewController
                currentVC?.resetCalendar()
            case .price:
                filterViewModel?.price.value = nil
            case .occupants:
                filterViewModel?.occupants.value = nil
            }
        } else {
            showNextViewController()
        }

    }

    @objc func didTapSecondToolItem() {
        showNextViewController()
    }

    private func showNextViewController() {
        if removeFirstChildViewController() {
            filterViewModel?.resetToolBarStatus()
            DispatchQueue.main.async {
                self.filterForm?.reloadData()
            }
        } else {
            showResultViewController()
        }
    }

    private func removeFirstChildViewController() -> Bool {
        if self.children.count > 1 {
            let viewControllers: [UIViewController] = self.children
            viewControllers.first?.willMove(toParent: nil)
            viewControllers.first?.removeFromParent()
            viewControllers.first?.view.removeFromSuperview()
            return true
        }
        return false
    }

    private func showResultViewController() {
        guard let filterViewModel = filterViewModel else {return}
        let filterSelection = FilterSelection(location: filterViewModel.location.value, period: filterViewModel.period.value, priceRange: filterViewModel.price.value, occupants: filterViewModel.occupants.value)

    }
}

extension FilterViewController: UICollectionViewDataSource {

    func numberOfSections(in collectionView: UICollectionView) -> Int {
        2
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        guard let sectionType = FilterSection.init(rawValue: section), let filterViewModel = filterViewModel else {return 0}
        return sectionType == .filterList ? filterViewModel.listCellViewModel.count : 1
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {

        guard let sectionType = FilterSection.init(rawValue: indexPath.section) else {return UICollectionViewCell()}

        switch sectionType {
        case .container:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: ContainerCell.id, for: indexPath) as? ContainerCell, let currentChildVC = children.first else {return UICollectionViewCell()}
            cell.fillContent(view: currentChildVC.view)
            return cell

        case .filterList:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: FilterListCell.id, for: indexPath) as? FilterListCell else {return UICollectionViewListCell()}
            cell.configure(filterViewModel?[indexPath])
            return cell
        }

    }

}
