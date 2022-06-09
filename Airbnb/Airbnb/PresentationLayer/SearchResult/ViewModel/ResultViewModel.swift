//
//  ResultViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/07.
//

import Foundation
final class ResultViewModel {

    var filterSelection: Observable<FilterSelection>
    private let searchAccomadationUseCase: SearchAccomadationUseCase = DefaultSearchAccomadationUseCase()
    var testNetwork  = NetworkManager()

    init(selectionResult: FilterSelection) {
        filterSelection = Observable<FilterSelection>(selectionResult)
    }
    
    func load(){
        testNetwork.request(path: "/rooms?", completion: { result in
            switch result {
            case .failure(let error):
                print(error)
            case .success(let data):
                print(data)
                return
            }
        })
    }
}
