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
        configureConstraints()
    }

    private func configureDisplay() {
        setViewController()
        setFilterForm()
        setToolBar()
        setDataBinding()
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
        let skip = UIBarButtonItem(title: "건너뛰기", image: nil, primaryAction: nil, menu: nil)
        let next = UIBarButtonItem(title: "다음", image: nil, primaryAction: nil, menu: nil)
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
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .location, viewModel: viewModel)
            filterForm.reloadData()
        })
        filterViewModel.period.bind(listener: { model in
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
           filterViewModel.update(type: .period, viewModel: viewModel)
           filterForm.reloadData()
        })
        filterViewModel.price.bind(listener: { model in
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .price, viewModel: viewModel)
            filterForm.reloadData()
        })
        filterViewModel.occupants.bind(listener: { model in
            guard let model = model  else { return }
            let viewModel = FilterListCellViewModel(model: model)
            filterViewModel.update(type: .occupants, viewModel: viewModel)
            filterForm.reloadData()
        })
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
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: ContainerCell.id, for: indexPath) as? ContainerCell else {return UICollectionViewCell()}


            let calendar = CalendarViewController()
            self.addChild(calendar)
            cell.fillContent(view: calendar.view)

            return cell

        case .filterList:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: FilterListCell.id, for: indexPath) as? FilterListCell else {return UICollectionViewListCell()}
            cell.configure(filterViewModel?[indexPath])
            return cell
        }

    }

}
