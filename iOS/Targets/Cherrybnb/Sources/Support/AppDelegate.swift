import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
//        let storyboard = UIStoryboard(name: "Main", bundle: .main)
//        let viewController = storyboard.instantiateInitialViewController()

        let viewController = try? CalendarPickerViewController(basedate: .init(), numOfMonths: 10, didDateSelect: nil, didDataRangeSelect: nil)
        window?.rootViewController = viewController
        window?.makeKeyAndVisible()

        return true
    }

}
