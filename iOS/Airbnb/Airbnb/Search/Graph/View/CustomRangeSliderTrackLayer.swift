//
//  CustomRangeSliderTrackLayer.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/02.
//

import UIKit
import QuartzCore

class CustomRangeSliderTrackLayer: CALayer {
    weak var rangeSlider: CustomRangeSlider?
    
    override func draw(in ctx: CGContext) {
        guard let slider = rangeSlider else {
            return
        }
        
        let path = UIBezierPath(rect: bounds)
        ctx.addPath(path.cgPath)
        
        ctx.setFillColor((slider.trackTintColor ?? slider.tintColor).cgColor)
        ctx.addPath(path.cgPath)
        ctx.fillPath()
        
        ctx.setFillColor((slider.trackHighlightTintColor ?? slider.tintColor).cgColor)
        let lowerValuePosition = CGFloat(slider.positionForValue(value: slider.lowerValue))
        let upperValuePosition = CGFloat(slider.positionForValue(value: slider.upperValue))
        let rect = CGRect(x: lowerValuePosition, y: 0.0, width: upperValuePosition - lowerValuePosition, height: bounds.height)
        ctx.fill(rect)
    }
}
