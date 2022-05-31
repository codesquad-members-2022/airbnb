//
//  BaseFilterViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/31.
//

import UIKit

final class FilterViewController: UIViewController {

    var filterForm: UICollectionView!

    override func viewDidLoad() {
        super.viewDidLoad()
        configureDisplay()
        configureConstraints()
    }

    private func configureDisplay() {
        setViewController()
        setFilterForm()
    }

    private func setViewController() {
        title = "숙소 찾기"
        view.backgroundColor = .white
    }

    private func setFilterForm() {
        let layoutProvider = FilterLayout()
        let layout = FlowLayout.makeCompositionalLayout(layoutProvider)
        filterForm = UICollectionView(frame: .zero, collectionViewLayout: layout)
        filterForm.dataSource = self
        filterForm.register(FilterListCell.self, forCellWithReuseIdentifier: FilterListCell.id)
        filterForm.register(ContainerCell.self, forCellWithReuseIdentifier: ContainerCell.id)
        view.addSubview(filterForm)
        filterForm.translatesAutoresizingMaskIntoConstraints = false
    }

    private func configureConstraints() {
        NSLayoutConstraint.activate([
            filterForm.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            filterForm.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            filterForm.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            filterForm.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
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
            return 4
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
            cell.contentView.backgroundColor = .blue
            return cell
        }

    }

}
