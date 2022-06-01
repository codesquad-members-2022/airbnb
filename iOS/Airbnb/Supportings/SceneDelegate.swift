import UIKit
import GoogleMaps
import GooglePlaces

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?


    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        GMSServices.provideAPIKey(PrivateStorage.apiKey)
        GMSPlacesClient.provideAPIKey(PrivateStorage.apiKey)
        
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = UINavigationController(rootViewController: HomeViewController())
        window.makeKeyAndVisible()
        self.window = window
    }
}

