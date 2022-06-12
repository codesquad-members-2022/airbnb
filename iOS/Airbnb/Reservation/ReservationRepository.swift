import Foundation
import OSLog

final class ReservationRepository {

    private let logger = Logger()
    private let networkService: NetworkService
    private let jsonHandler: JsonHandlable
    
    init(networkService: NetworkService, jsonHandler: JsonHandlable) {
        self.networkService = networkService
        self.jsonHandler = jsonHandler
    }
    
    func sendPostRequest<T: Encodable>(bodyObj: T, completion: @escaping (Bool) -> Void) {
        
        guard let endPoint = EndPoint(path: .reservation, method: .post, headers: ["content-type":"\(ContentType.json)"]) else { return }
        networkService.request(endPoint: endPoint,
                               body: jsonHandler.convertObjectToJson(from: bodyObj)) { result in
            switch result {
            case .success(let data):
                completion(true)
            case .failure(let error):
                completion(false)
            }
        }
    }
}
