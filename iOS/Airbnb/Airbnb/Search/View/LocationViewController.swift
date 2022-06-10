//
//  LocationViewController.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/24.
//

import UIKit
import SnapKit
import MapKit

class LocationViewController: BackgroundViewController, CommonViewControllerProtocol {
     
    let model = LocationModel()
    
    private var searchCompleter: MKLocalSearchCompleter?
    
    private var searchResults = [MKLocalSearchCompletion]()
    
    private var searchRegion: MKCoordinateRegion = MKCoordinateRegion(MKMapRect.world)
    
    private let searchController: UISearchController = {
        let searchController = UISearchController(searchResultsController: nil)
        let searchBar = searchController.searchBar
        searchBar.searchBarStyle = .minimal
        searchBar.placeholder = "어디로 여행가세요?"
        searchBar.searchTextField.clearButtonMode = .never
        searchBar.searchTextField.returnKeyType = .go
        searchController.hidesNavigationBarDuringPresentation = false
        searchController.automaticallyShowsCancelButton = false
        return searchController
    }()
        
    private(set) var nearbyLoactionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .vertical
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: layout)
        collectionView.register(LocationCollectionViewCell.self, forCellWithReuseIdentifier: LocationCollectionViewCell.reuseIdentifier)
        collectionView.register(HeaderReusableView.self,
                                forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: HeaderReusableView.reuseIdentifier)
        return collectionView
    }()
    
    lazy var searchInitializeButton: UIBarButtonItem = {
        let barButton = UIBarButtonItem(title: "지우기", style: .done,
                                        target: self, action: #selector(self.clearSearchField(_:)))
        barButton.tintColor = .gray
        return barButton
    }()
    
    func attribute() {
        setUpDelegates()
        startProvidingCompletions()
        navigationController?.isToolbarHidden = true
        navigationItem.searchController = searchController
        navigationItem.title = "숙소 찾기"
        view.backgroundColor = .systemBackground
    }
    
    func layout() {
        view.addSubview(nearbyLoactionView)
        
        nearbyLoactionView.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }
    
    func bind() {
        
    }
    
    private func setUpDelegates() {
        nearbyLoactionView.delegate = self
        nearbyLoactionView.dataSource = self
        searchController.searchBar.delegate = self
        searchController.searchResultsUpdater = self
        definesPresentationContext = true
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        attribute()
        layout()
        bind()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.isToolbarHidden = true
    }
    
}

extension LocationViewController: UISearchBarDelegate, UITextFieldDelegate, UISearchResultsUpdating
{
    func updateSearchResults(for searchController: UISearchController) {
        guard let query = searchController.searchBar.text else { return }
        searchCompleter?.queryFragment = query
    }
    
    @objc func clearSearchField(_ sender: Any) {
        searchController.searchBar.text = nil
        self.navigationItem.rightBarButtonItem = nil
        model.changeMode(.popular)
        nearbyLoactionView.reloadData()
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        searchController.searchBar.resignFirstResponder()
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        searchController.searchBar.resignFirstResponder()
        return true
    }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        let searchTextIsEnable = !searchText.isEmpty
        navigationItem.rightBarButtonItem = searchTextIsEnable ? searchInitializeButton : nil

        if searchTextIsEnable {
            model.changeMode(.nearby)
        } else {
            model.changeMode(.popular)
            nearbyLoactionView.reloadData()
        }
    }
}

extension LocationViewController: UICollectionViewDelegateFlowLayout, UICollectionViewDelegate, UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        model.getCount()
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = nearbyLoactionView.dequeueReusableCell(withReuseIdentifier: LocationCollectionViewCell.reuseIdentifier, for: indexPath) as? LocationCollectionViewCell else {
            return UICollectionViewCell()
        }
        guard let item = model[indexPath.row] else {
            return UICollectionViewCell()
        }

        cell.updateInfomation(item)
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) ->
    UICollectionReusableView {
        switch kind {
        case UICollectionView.elementKindSectionHeader:
            let headerView = nearbyLoactionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: HeaderReusableView.reuseIdentifier, for: indexPath)
            return headerView
        default:
            assert(false, "header, footer, withReuseIdentifier 를 확인하세요.")
        }
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard let cell = collectionView.cellForItem(at: indexPath)
                as? LocationCollectionViewCell else { return }
        let reservationModel = ReservationModel()
        reservationModel.location = cell.cityName.text
        let nextVC = CalendarViewController(reservationModel: reservationModel)
        let model = SearchInfoTrackingModel()
        model.setModelData(using: [.location: cell.cityName.text ?? ""])
        nextVC.setModel(model)
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let sideMargin: CGFloat = 16
        let width:CGFloat = UIScreen.main.bounds.width - sideMargin * 2
        return CGSize(width: width, height: 64)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        let headerViewHeight: CGFloat = ((model[0] as? PopularCityInfomation) == nil ? 0 : 78)
        return CGSize(width: 0, height: headerViewHeight)
    }
}

extension LocationViewController: MKLocalSearchCompleterDelegate {
    private func startProvidingCompletions() {
        searchCompleter = MKLocalSearchCompleter()
        searchCompleter?.delegate = self
        searchCompleter?.region = searchRegion
    }
    
    private func stopProvidingCompletions() {
        searchCompleter = nil
    }
    
    func completerDidUpdateResults(_ completer: MKLocalSearchCompleter) {
        searchResults = completer.results
        let nearbyAddress: [String] = searchResults.map {
            $0.title
        }
        model.makeTenNearbyCitiesInfo(nearby: nearbyAddress)
        nearbyLoactionView.reloadData()
    }
}
