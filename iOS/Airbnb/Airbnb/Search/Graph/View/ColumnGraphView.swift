//
//  ColumnGraphView.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/31.
//

import Foundation
import UIKit

class ColumnGraphView: UIView {
    
    private var yRange: [Int] = []
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.backgroundColor = .clear
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        self.backgroundColor = .clear
    }
    
    override func draw(_ rect: CGRect) {
        
        let graphHeight = Int(rect.maxY)
        let path = UIBezierPath()
        path.lineWidth = 2
        path.lineJoinStyle = .miter
        path.usesEvenOddFillRule = true
        
        path.move(to: CGPoint(x: 0, y: rect.maxY))
        
        for (x, y) in yRange.enumerated() {
            let xFrom = (x+1) * 10
            let xTo = ((x+1) * 10) + 10
            
            path.addLine(to: CGPoint(x: xFrom+2, y: graphHeight))
            path.addLine(to: CGPoint(x: xFrom+2, y: graphHeight-y))
            path.addLine(to: CGPoint(x: xTo, y: graphHeight-y))
            path.addLine(to: CGPoint(x: xTo, y: graphHeight))
        }
        
        UIColor(named: "Grey3")?.set()
        path.fill()
    }
    
    func drawGraph(distribution: [Int]) {
        self.yRange = distribution
        self.draw(bounds)
    }
}
