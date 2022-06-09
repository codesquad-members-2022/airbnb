//
//  SearchViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/27.
//

import UIKit
import MapKit

final class SearchViewController: UIViewController, UISearchResultsUpdating {

    private var citySearchViewModel = SearchViewModel()
    private var collectionView: UICollectionView!
    private var searchCompleter: MKLocalSearchCompleter?
    private var searchRegion: MKCoordinateRegion = MKCoordinateRegion(MKMapRect.world)
    private var completerResults: [MKLocalSearchCompletion]?

    override func viewDidLoad() {
        super.viewDidLoad()
        configureDisplay()
        configureConstraints()
        configureViewModel()
        configureSearchCompleter()
    }

    private func configureDisplay() {
        setViewController()
        setSearchController()
        setCollectionView()
    }

    private func configureSearchCompleter() {
        searchCompleter = MKLocalSearchCompleter()
        searchCompleter?.delegate = self
        searchCompleter?.resultTypes = .address
        searchCompleter?.region = searchRegion
    }

    private func configureViewModel() {
        citySearchViewModel.reset()

        citySearchViewModel.headerVM.bind {[weak self] _ in
            DispatchQueue.main.async {
                self?.collectionView.reloadData()
            }
        }

        citySearchViewModel.cityVM.bind {[weak self] _ in
            DispatchQueue.main.async {
                self?.collectionView.reloadData()
            }
        }
    }

    private func setViewController() {
        title = "숙소 찾기"
        view.backgroundColor = .white
    }

    private func setSearchController() {
        let searchVC = UISearchController()
        searchVC.searchResultsUpdater = self
        searchVC.hidesNavigationBarDuringPresentation = false
        navigationItem.searchController = searchVC
        navigationItem.hidesSearchBarWhenScrolling = false
        navigationItem.searchController?.searchBar.placeholder = "어디로 여행가세요?"
    }

    private func setCollectionView() {
        let flowLayout = UICollectionViewFlowLayout()
        collectionView = UICollectionView(frame: .zero, collectionViewLayout: flowLayout)
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.dataSource = self
        collectionView.delegate = self
        collectionView.register(CityCell.self, forCellWithReuseIdentifier: CityCell.id)
        collectionView.register(SectionHeader.self, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: SectionHeader.id)
    }

    private func configureConstraints() {
        view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            collectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }

    func updateSearchResults(for searchController: UISearchController) {
        guard let text = searchController.searchBar.text else {return}
        if text.isEmpty {
            citySearchViewModel.reset()
            completerResults = nil
            return
        }
        searchCompleter?.queryFragment = text
    }
}

extension SearchViewController: UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        citySearchViewModel.cityVM.value.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: CityCell.id, for: indexPath) as? CityCell else {return UICollectionViewCell()}
        cell.cellViewModel = citySearchViewModel.cityVM.value[indexPath.item]
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        guard let header = collectionView.dequeueReusableSupplementaryView(ofKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: SectionHeader.id, for: indexPath) as? SectionHeader else {return UICollectionReusableView()}
        header.viewModel = citySearchViewModel.headerVM.value
        return header
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.frame.width - 100, height: 64)
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        CGSize(width: collectionView.frame.width, height: 50)
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: -100, bottom: 0, right: 0)
    }
}

extension SearchViewController: UICollectionViewDelegate {

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard let completerResults = completerResults else {return}
        let selectedRegion = completerResults[indexPath.item]
        let searchRequest = MKLocalSearch.Request(completion: selectedRegion)
        let search = MKLocalSearch(request: searchRequest)

        search.start { [weak self] (response, error) in
            guard error == nil else {return}
            guard let placeMark = response?.mapItems[0].placemark, let title = placeMark.title else {return}
            let location = Location(name: title, latitude: placeMark.coordinate.latitude, longitude: placeMark.coordinate.longitude)
            let filterViewModel = FilterViewModel()
            filterViewModel.location.value = location
            let nextVC = FilterViewController(filterViewModel: filterViewModel)
            self?.navigationController?.pushViewController(nextVC, animated: true)
        }

    }

}

extension SearchViewController: MKLocalSearchCompleterDelegate {

    func completerDidUpdateResults(_ completer: MKLocalSearchCompleter) {
        var cities = [City]()
        completer.results.forEach({
            cities.append(City(name: $0.title, image: "defaultCity", travelTime: nil))
        })
        citySearchViewModel.update(models: cities)
        completerResults = completer.results
    }
}
