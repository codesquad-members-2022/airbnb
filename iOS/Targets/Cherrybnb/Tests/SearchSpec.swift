//
//  SearchSpec.swift
//  CherrybnbTests
//
//  Created by Bumgeun Song on 2022/05/24.
//  Copyright © 2022 Codesquad. All rights reserved.
//

import Foundation
import Quick
import Nimble

class SearchSpec: QuickSpec {
    override func spec() {

        describe("아무것도 하지 않고") {
            var storyboard: UIStoryboard!
            var tabBarController: UITabBarController!

            beforeEach {
                storyboard = UIStoryboard(name: "Main", bundle: .main)
                tabBarController = storyboard.instantiateInitialViewController() as? UITabBarController
            }

            context("앱을 처음 실행하면") {
                it("탭 바에 3개의 탭이 있어야 한다") {
                    expect(tabBarController.viewControllers?.count).to(equal(3))
                }

                it("첫번째 탭 바에는 네비게이션이 있어야 한다.") {
                    expect(tabBarController.viewControllers?[0]).to(beAnInstanceOf(UINavigationController.self))
                }

            }
        }

    }
}
