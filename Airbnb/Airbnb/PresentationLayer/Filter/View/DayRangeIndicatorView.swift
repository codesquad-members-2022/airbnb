//
//  DayRangeIndicatorView.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/06.
//

import UIKit
import HorizonCalendar

final class DayRangeIndicatorView: UIView {

    private let indicatorColor: UIColor

    var framesOfDaysToHighlight = [CGRect]() {
      didSet {
        guard framesOfDaysToHighlight != oldValue else { return }
        setNeedsDisplay()
      }
    }

    init(indicatorColor: UIColor) {
        self.indicatorColor = indicatorColor
        super.init(frame: .zero)
        backgroundColor = .clear
    }

    required init?(coder: NSCoder) { fatalError("init(coder:) has not been implemented") }

    override func draw(_ rect: CGRect) {
      let context = UIGraphicsGetCurrentContext()
      context?.setFillColor(indicatorColor.cgColor)

      // Get frames of day rows in the range
      var dayRowFrames = [CGRect]()
      var currentDayRowMinY: CGFloat?

        for dayFrame in framesOfDaysToHighlight {
            if dayFrame.minY != currentDayRowMinY {
                currentDayRowMinY = dayFrame.minY
                dayRowFrames.append(dayFrame)
            } else {
                let lastIndex = dayRowFrames.count - 1
                dayRowFrames[lastIndex] = dayRowFrames[lastIndex].union(dayFrame)
            }
        }

      // Draw rounded rectangles for each day row
        for index in 0..<dayRowFrames.count {
            let roundedRectanglePath = UIBezierPath(roundedRect: dayRowFrames[index], cornerRadius: 12)
            context?.addPath(roundedRectanglePath.cgPath)
        }

        context?.fillPath()

    }

}

extension DayRangeIndicatorView: CalendarItemViewRepresentable {

  struct InvariantViewProperties: Hashable {
      let indicatorColor: UIColor = .gray6 ?? .secondarySystemBackground
  }

  struct ViewModel: Equatable {
    let framesOfDaysToHighlight: [CGRect]
  }

  static func makeView(
    withInvariantViewProperties invariantViewProperties: InvariantViewProperties)
    -> DayRangeIndicatorView {
    DayRangeIndicatorView(indicatorColor: invariantViewProperties.indicatorColor)
  }

  static func setViewModel(_ viewModel: ViewModel, on view: DayRangeIndicatorView) {
    view.framesOfDaysToHighlight = viewModel.framesOfDaysToHighlight
  }

}
