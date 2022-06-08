//
//  NetworkManager.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/08.
//

import Foundation

struct NetworkManager {

    let config = URLSessionConfiguration.default
    let session = URLSession.shared
    let url = "http://13.124.91.193:8080"

    func request (path: String, completion: @escaping (Result<[SearchAccomadationResponseDTO], NetworkError>) -> Void) {
        guard var urlComponent = URLComponents(string: url + path) else {return}
        let latitude = URLQueryItem(name: "latitute", value: "37.4953")
        let longitude = URLQueryItem(name: "longitude", value: "127.0286")
        urlComponent.queryItems?.append(latitude)
        urlComponent.queryItems?.append(longitude)
        guard let requestURL = urlComponent.url else {return}

        session.dataTask(with: requestURL) { (data, response, Error) in
            if let Error = Error {
                completion(.failure(.transportError(Error)))
            }

            if let response = response as? HTTPURLResponse, !(200...299).contains(response.statusCode) {
                completion(.failure(.serverError(statusCode: response.statusCode)))
                return
            }

            guard let data = data else {
                completion(.failure(.noData))
                return
            }

            do {
                let result = try JSONDecoder().decode([SearchAccomadationResponseDTO].self, from: data)
                completion(.success(result))
            } catch {
                completion(.failure(.decodingError(error)))
            }

        }.resume()

    }

}
