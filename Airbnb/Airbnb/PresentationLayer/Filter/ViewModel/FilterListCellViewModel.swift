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

    init(model: Location?) {
        fieldTitle = FilterFields.location.description
        fieldValue = model?.name
    }

    init(model: Period?) {
        fieldTitle = FilterFields.period.description
        if let model = model {
            fieldValue = "\(MyDateFormatter.shared.periodDateString(from: model.start)) - \(MyDateFormatter.shared.periodDateString(from: model.end))"
        } else {
            fieldValue = nil
        }
    }

    init(model: PriceRange?) {
        fieldTitle = FilterFields.price.description
        if let model = model {
            fieldValue = "\(model.min) - \(model.max)"
        } else {
            fieldValue = nil
        }
    }

    init(model: Occupants?) {
        fieldTitle = FilterFields.occupants.description
        if let model = model {
            fieldValue = "게스트 \(model.numberOfGuest)명"
        } else {
            fieldValue = nil
        }
    }

    init(fieldTitle: String, fieldValue: String? = nil) {
        self.fieldTitle = fieldTitle
        self.fieldValue = fieldValue
    }
}
