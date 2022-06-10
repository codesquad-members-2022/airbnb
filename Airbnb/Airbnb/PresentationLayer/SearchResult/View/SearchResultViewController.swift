//
//  SearchResultViewController.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/07.
//

import UIKit

final class SearchResultViewController: UIViewController {

    private var filterSelection: FilterSelection
    private var resultViewModel: SearchResultViewModel {
        SearchResultViewModel(selectionResult: filterSelection)
    }

    init(filterSelection: FilterSelection) {
        self.filterSelection = filterSelection
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        resultViewModel.fetchResult()
        resultViewModel.searchResult.bind { _ in
            // TODO: Update View
        }
    }

}
