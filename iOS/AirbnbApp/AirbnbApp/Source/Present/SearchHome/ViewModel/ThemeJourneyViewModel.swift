//
//  ThemeJourneyViewModel.swift
//  AirbnbApp
//
//  Created by dale on 2022/05/30.
//

import Foundation

final class ThemeJourneyViewModel: ViewModelBindable {
    
    typealias actionType = Void
    typealias stateType = [SearchHomeEntity.Theme]
    
    private(set) var loadAction = PublishRelay<actionType>()
    private(set) var loadedState = PublishRelay<stateType>()
    
    @NetworkInject(keypath: \.searchHomeRepositoryImplement)
    private var repository: SearchHomeRepositoryImpl
    
    init() {
        loadAction.bind(onNext: { [weak self] in
            self?.repository.requestTheme { result in
                switch result {
                case .success(let themeJourney) :
                    self?.loadedState.accept(themeJourney.themes)
                case .failure(let error):
                    print(error) // TODO: error
                }
            }
        })
    }
}

// MARK: - Providing Function

extension ThemeJourneyViewModel {
    func accept(_ value: actionType) {
        loadAction.accept(value)
    }
    
    func bind(_ completion: @escaping (stateType) -> Void) {
        loadedState.bind(onNext: completion)
    }
}
