//
//  FilterListViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/01.
//

import Foundation

final class FilterViewModel {
    struct ToolbarStatus {
        var currentField: FilterFields?
        var isFilled: Bool
    }
    var location = Observable<Location?>(nil)
    var period =  Observable<Period?>(nil)
    var price =  Observable<PriceRange?>(nil)
    var occupants = Observable<Occupants?>(nil)
    var listCellViewModel: [FilterFields: FilterListCellViewModel] = [:]
    var toolBarStatus: Observable<ToolbarStatus> = Observable<ToolbarStatus>(ToolbarStatus(isFilled: false))

    init() {
        for field in FilterFields.allCases {
            listCellViewModel.updateValue(FilterListCellViewModel(fieldTitle: field.description), forKey: field)
        }
    }

    subscript(_ index: IndexPath) -> FilterListCellViewModel? {
        guard let field = FilterFields.init(rawValue: index.item) else {return nil}
        let viewModel = listCellViewModel[field]
        return viewModel
    }

    func update(type field: FilterFields, viewModel: FilterListCellViewModel) {
        listCellViewModel.updateValue(viewModel, forKey: field)
    }

    func resetToolBarStatus() {
        toolBarStatus.value = ToolbarStatus(isFilled: false)
    }

}
