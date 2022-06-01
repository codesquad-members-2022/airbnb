//
//  BaseFilterViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/31.
//

import UIKit

final class FilterViewController: UIViewController {

    private var filterForm: UICollectionView!
    private var filterViewModel: FilterViewModel?

    init(filterViewModel: FilterViewModel) {
        self.filterViewModel = filterViewModel
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureDisplay()
        configureConstraints()

    }

    private func configureDisplay() {
        setViewController()
        setFilterForm()
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
        filterForm.isScrollEnabled = false
        filterForm.dataSource = self
        filterForm.register(FilterListCell.self, forCellWithReuseIdentifier: FilterListCell.id)
        filterForm.register(ContainerCell.self, forCellWithReuseIdentifier: ContainerCell.id)
        filterForm.translatesAutoresizingMaskIntoConstraints = false
    }

    private func configureConstraints() {
        view.addSubview(filterForm)
        NSLayoutConstraint.activate([
            filterForm.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            filterForm.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            filterForm.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            filterForm.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }

    private func setDataBinding() {
        filterViewModel?.location.bind(listener: { [weak self] model in
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
            self?.filterViewModel?.update(type: .location, viewModel: viewModel)
            self?.filterForm.reloadData()
        })
        filterViewModel?.period.bind(listener: { [weak self] model in
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
            self?.filterViewModel?.update(type: .period, viewModel: viewModel)
            self?.filterForm.reloadData()
        })
        filterViewModel?.price.bind(listener: { [weak self] model in
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
            self?.filterViewModel?.update(type: .price, viewModel: viewModel)
            self?.filterForm.reloadData()
        })
        filterViewModel?.occupants.bind(listener: { [weak self] model in
            guard let model = model else { return }
            let viewModel = FilterListCellViewModel(model: model)
            self?.filterViewModel?.update(type: .occupants, viewModel: viewModel)
            self?.filterForm.reloadData()
        })
    }

}

extension FilterViewController: UICollectionViewDataSource {

    func numberOfSections(in collectionView: UICollectionView) -> Int {
        2
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        guard let sectionType = FilterSection.init(rawValue: section) else {return 0}
        switch sectionType {
        case .container:
            return 1

        case .filterForm:
            return filterViewModel?.listCellViewModel.count ?? 0
        }
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {

        guard let sectionType = FilterSection.init(rawValue: indexPath.section) else {return UICollectionViewCell()}

        switch sectionType {
        case .container:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: ContainerCell.id, for: indexPath) as? ContainerCell else {return UICollectionViewCell()}
            return cell

        case .filterForm:
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: FilterListCell.id, for: indexPath) as? FilterListCell else {return UICollectionViewListCell()}
            cell.configure(filterViewModel?[indexPath])
            return cell
        }

    }

}
