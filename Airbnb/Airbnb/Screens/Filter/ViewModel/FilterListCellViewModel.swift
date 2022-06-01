//
//  FilterListCellViewModel.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/01.
//

import Foundation

struct FilterListCellViewModel {
    let fieldTitle: String
    let fieldValue: String?

    init(model: Location) {
        fieldTitle = FilterFields.location.description
        fieldValue = model.name
    }

    init(model: Period) {
        fieldTitle = FilterFields.period.description
        fieldValue = "\(model.start) - \(model.end)"
    }

    init(model: PriceRange) {
        fieldTitle = FilterFields.price.description
        fieldValue = "\(model.min) - \(model.max)"
    }

    init(model: Occupants) {
        fieldTitle = FilterFields.occupants.description
        fieldValue = "게스트 \(model.numberOfGuest)명"
    }

    init(fieldTitle: String, fieldValue: String? = nil) {
        self.fieldTitle = fieldTitle
        self.fieldValue = fieldValue
    }
}
