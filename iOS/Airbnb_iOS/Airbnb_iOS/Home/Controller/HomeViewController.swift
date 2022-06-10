//
//  HomeViewController.swift
//  Airbnb_iOS
//
//  Created by juntaek.oh on 2022/05/24.
//

import UIKit
import CoreLocation

class HomeViewController: UIViewController {

    private lazy var homeView = HomeView(frame: view.frame)
    private let dataSource = HomeViewCollectionDataSource()

    private let homeViewDataManager = HomeDataManager()
    private var accessCase: LocationManager.AceessCase
    private(set) var nowLocation: CLLocation?

    let searchBar: UISearchBar = {
        let searcher = UISearchBar()
        searcher.placeholder = "어디로 여행가세요?"
        return searcher
    }()

    init(locationAccess: LocationManager.AceessCase) {
        self.accessCase = locationAccess
        super.init(nibName: nil, bundle: nil)
        setHomeDataManagerDelegate()
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError()
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        self.configureSettings()
        self.getHomeViewComponents()
        self.alertLocationAccessNeeded(isDenied: self.accessCase)
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.hidesBarsOnSwipe = true
        tabBarController?.tabBar.isHidden = false
    }

    func getHomeViewComponents() {
        NotificationCenter.default.addObserver(self, selector: #selector(didReceiveNotification), name: NSNotification.Name("location"), object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(reloadDataForLocation), name: NSNotification.Name("repository"), object: nil)
    }
    
    @objc
    func didReceiveNotification(_ notification: Notification) {
        guard let location = notification.userInfo?["location"] as? CLLocation else { return }

        self.nowLocation = location
        homeViewDataManager.getHomeViewComponents(currentLocation: location)
    }
    
    @objc
    func reloadDataForLocation() {
        DispatchQueue.main.async {
            self.homeView.reloadCollectionViewCell()
        }
    }
    
    func setNowLocation(location: CLLocation) {
        self.nowLocation = location
    }
}

private extension HomeViewController {

    func configureSettings() {
        self.setHomeView()
        self.setSearchBar()
    }

    func setHomeView() {
        self.view = homeView
        self.homeView.setDataSource(dataSource)
    }

    func setSearchBar() {
        searchBar.delegate = self
        self.navigationItem.titleView = searchBar
    }

    func setHomeDataManagerDelegate() {
        homeViewDataManager.setDelegate(self)
    }

    func alertLocationAccessNeeded(isDenied: LocationManager.AceessCase) {
        var settingsAppURL: URL?

        if #available(iOS 15.4, *) {
            settingsAppURL = URL(string: UIApplicationOpenNotificationSettingsURLString)
        } else {
            settingsAppURL = URL(string: UIApplication.openSettingsURLString)
        }

        guard let settingsAppURL = settingsAppURL else { return }

        switch isDenied {
        case .denied:
            self.presentAlert(url: settingsAppURL)
        default:
            return
        }
    }

    func presentAlert(url: URL) {
        let alert = UIAlertController(title: "위치 권한이 필요합니다", message: "설정창에서 위치 권한 설정 내역을 변경하실 수 있습니다.", preferredStyle: .alert)

        alert.addAction(UIAlertAction(title: "설정창으로 가기", style: .cancel, handler: { _ in
            UIApplication.shared.open(url)
        }))
        alert.addAction(UIAlertAction(title: "취소", style: .default, handler: nil))

        present(alert, animated: true)
    }
}

extension HomeViewController: UISearchBarDelegate {
    func searchBarShouldBeginEditing(_ searchBar: UISearchBar) -> Bool {
        var famousSpotData = [HomeViewComponentsData.AroundSpotData]()
        if case let HomeViewComponentsData.secondSection(aroundSpotData) = dataSource.data[1] {
            famousSpotData = aroundSpotData
        }
        let browseViewController = BrowseViewController(famousSpotData: famousSpotData)
        browseViewController.hidesBottomBarWhenPushed = true
        self.navigationController?.pushViewController(browseViewController, animated: true)

        return false
    }
}

extension HomeViewController: HomeDataManagerDelegate {
    func updateHomeComponents(_ homeComponentsData: [HomeViewComponentsData]) {
        dataSource.data = homeComponentsData
        DispatchQueue.main.async { [weak self] in
            self?.homeView.reloadCollectionViewCell()
        }
    }

    func updateHeroImageData(_ heroImageData: HomeViewComponentsData.HeroImageData) {
        dataSource.data[0] = .firstSection(heroImageData)
        DispatchQueue.main.async { [weak self] in
            self?.homeView.reloadCollectionViewCell(sectionNumber: 0)
        }
    }

    func updateAroundSpotData(_ aroundSpotData: HomeViewComponentsData.AroundSpotData) {
        if case let HomeViewComponentsData.secondSection(previousData) = dataSource.data[1] {

            // 이미 추가된 AroundSpotCell인지 구별해주는 Bool 상수
            let isAlreadyAdded = previousData.allSatisfy {
                $0.title != aroundSpotData.title
            }

            if isAlreadyAdded {
                let updatedData = (previousData + [aroundSpotData]).sorted {
                    $0.time < $1.time
                }

                dataSource.data[1] = .secondSection(updatedData)
                homeView.reloadCollectionViewCell(sectionNumber: 1)
            }
            
        }
    }

    func updateThemeSpotData(_ themeSpotData: HomeViewComponentsData.ThemeSpotData) {
        if case let HomeViewComponentsData.thirdSection(previousData) = dataSource.data[2] {
            let updatedData = previousData + [themeSpotData]
            dataSource.data[2] = .thirdSection(updatedData)
            homeView.reloadCollectionViewCell(sectionNumber: 2)
        }
    }

    func didGetComponentsError(_ error: Error) {
        print(error)
    }
}
