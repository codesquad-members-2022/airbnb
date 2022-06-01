//
//  ColumnGraphView.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import UIKit

class ColumnGraphView: UIView {
    
    private var distribution: [CGFloat] = []
    private let columnInnerPadding: CGFloat = 2
    private let columnLeadingPadding: CGFloat = 30
    private let columnTrailingPadding: CGFloat = 30
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.backgroundColor = .clear
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        self.backgroundColor = .clear
    }
    
    override func draw(_ rect: CGRect) {
        
        let graphHeight = rect.maxY
        let paddingSum: CGFloat = distribution.count == 0 ? 0 : CGFloat(distribution.count - 1) * columnInnerPadding
        let columnWidth = (rect.width - paddingSum) / CGFloat(distribution.count)
        
        let path = UIBezierPath()
        path.lineWidth = 2
        path.lineJoinStyle = .miter
        path.usesEvenOddFillRule = true
        
        path.move(to: CGPoint(x: 0, y: rect.maxY))
        
        var graphMovedXPosition: CGFloat = 0
        
        for (x, y) in self.distribution.enumerated() {
            path.addLine(to: CGPoint(x: graphMovedXPosition, y: graphHeight * 1))
            path.addLine(to: CGPoint(x: graphMovedXPosition, y: graphHeight * (1-y)))
            
            graphMovedXPosition += columnWidth
            
            path.addLine(to: CGPoint(x: graphMovedXPosition, y: graphHeight * (1-y)))
            path.addLine(to: CGPoint(x: graphMovedXPosition, y: graphHeight * 1))
            
            if x != self.distribution.count - 1 {
                graphMovedXPosition += self.columnInnerPadding
                path.addLine(to: CGPoint(x: graphMovedXPosition, y: graphHeight))
            }
        }
        
        UIColor(named: "Grey3")?.set()
        
        let maskingLayer = CAShapeLayer()
        maskingLayer.path = path.cgPath
        
        layer.mask = maskingLayer
    }
    
    func drawGraph(distribution: [Float]) {
        self.distribution = distribution.map({CGFloat($0)})
        self.draw(bounds)
    }
}
