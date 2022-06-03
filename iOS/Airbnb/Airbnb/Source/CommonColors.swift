//
//  CommonColors.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import Foundation
import UIKit

extension UIColor {
    
    static func getGrayScale(_ scale: AirbnbGrayScale) -> UIColor? {
        UIColor(named: scale.rawValue)
    }
    
    static func getColorPalette(_ palette: AirbnbColorPalette) -> UIColor? {
        UIColor(named: palette.rawValue)
    }
}

enum AirbnbGrayScale: String {
    case Grey1
    case Grey2
    case Grey3
    case Grey4
    case Grey5
    case Grey6
}

enum AirbnbColorPalette: String {
    case primary
    case secondary
}
