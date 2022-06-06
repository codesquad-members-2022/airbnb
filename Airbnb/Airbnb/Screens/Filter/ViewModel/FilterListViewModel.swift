//
//  FilterListViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/01.
//

import Foundation

final class FilterViewModel {
    struct ToolbarStatus {
        var isfilled: Bool
    }
    var location = Observable<Location?>(nil)
    var period =  Observable<Period?>(nil)
    var price =  Observable<PriceRange?>(nil)
    var occupants = Observable<Occupants?>(nil)
    var listCellViewModel: [FilterFields: FilterListCellViewModel] = [:]
    var toolBar = Observable<ToolbarStatus>(ToolbarStatus(isfilled: false))

    init() {
        for field in FilterFields.allCases {
            listCellViewModel.updateValue(FilterListCellViewModel(fieldTitle: field.description), forKey: field)
        }
    }

    subscript(_ index: IndexPath) -> FilterListCellViewModel? {
        guard let field = FilterFields.init(rawValue: index.item), let viewModel = listCellViewModel[field] else {return nil}
        return viewModel
    }

    func update(type: FilterFields, viewModel: FilterListCellViewModel) {
        listCellViewModel.updateValue(viewModel, forKey: type)
    }

}
