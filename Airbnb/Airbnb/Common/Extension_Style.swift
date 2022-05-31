//
//  Extension_Color.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/24.
//

import UIKit

extension UIColor {
    static let gray1 = UIColor(named: "Gray1")
    static let gray2 = UIColor(named: "Gray2")
    static let gray3 = UIColor(named: "Gray3")
    static let gray4 = UIColor(named: "Gray4")
    static let gray5 = UIColor(named: "Gray5")
    static let gray6 = UIColor(named: "Gray6")
    static let primary = UIColor(named: "Primary")
    static let secondary = UIColor(named: "Secondary")
}

extension UIFont {

    static var largeRegular: UIFont {
        return UIFont.systemFont(ofSize: 34, weight: .regular)
    }

    static var mediumRegular: UIFont {
        return UIFont.systemFont(ofSize: 22, weight: .medium)
    }

    static var smallRegular: UIFont {
        return UIFont.systemFont(ofSize: 17, weight: .regular)
    }

    static var largeBold: UIFont {
        return UIFont.systemFont(ofSize: 34, weight: .semibold)
    }

    static var mediumBold: UIFont {
        return UIFont.systemFont(ofSize: 22, weight: .semibold)
    }

    static var smallBold: UIFont {
        return UIFont.systemFont(ofSize: 17, weight: .semibold)
    }

    static var caption: UIFont {
        return UIFont.systemFont(ofSize: 12, weight: .semibold)
    }
}
