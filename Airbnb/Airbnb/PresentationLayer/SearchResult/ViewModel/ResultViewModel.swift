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

    init(selectionResult: FilterSelection) {
        filterSelection = Observable<FilterSelection>(selectionResult)
    }

}
