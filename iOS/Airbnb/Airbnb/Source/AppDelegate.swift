//
//  AppDelegate.swift
//  Airbnb
//
//  Created by YEONGJIN JANG on 2022/05/23.
//

import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        return true
    }
}

//Thread 1: "the view returned from -collectionView:viewForSupplementaryElementOfKind:atIndexPath: does not match the element kind it is being used for. When asked for a view of element kind 'UICollectionElementKindSectionHeader' the data source dequeued a view registered for the element kind 'section-header-element-kind'."
