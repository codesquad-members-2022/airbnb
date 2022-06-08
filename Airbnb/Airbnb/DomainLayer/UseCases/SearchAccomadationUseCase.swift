//
//  SearchAccomadationUseCase.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/07.
//

import Foundation

protocol SearchAccomadationUseCase {
    func execute (requestValue: FilterSelection)
}

final class DefaultSearchAccomadationUseCase: SearchAccomadationUseCase {
    func execute(requestValue: FilterSelection) {
        // TODO: 
    }

}
