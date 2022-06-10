//
//  ResultViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/07.
//

import Foundation

final class SearchResultViewModel {

    var filterSelection: Observable<FilterSelection>
    private let searchAccomadationUseCase: SearchAccomadationUseCase = DefaultSearchAccomadationUseCase()
    var testNetwork  = NetworkManager()
    var searchResult = Observable<[SearchResult?]>([])

    init(selectionResult: FilterSelection) {
        filterSelection = Observable<FilterSelection>(selectionResult)
    }

    func fetchResult() {
        filterSelection.bind(listener: { filterSelection in
            self.testNetwork.request(path: "rooms", item: filterSelection, completion: { result in
                switch result {
                case .failure:
                    // TODO: 에러 핸들링 구현
                    break
                case .success(let data):
                    var searchResult: [SearchResult] = []
                    data.forEach({
                        searchResult.append(SearchResult(model: $0))
                    })
                    self.searchResult.value = searchResult
                }
            })
        })

    }
}

fileprivate extension SearchResult {
    init(model: SearchAccomadationResponseDTO) {
        price = "\(model.price) + /박"
    }
}
