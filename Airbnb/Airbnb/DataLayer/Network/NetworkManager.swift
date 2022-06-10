//
//  NetworkManager.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/08.
//

import Foundation

struct NetworkManager {

    let session = URLSession.shared

    func request (path: String, item: FilterSelection, completion: @escaping (Result<[SearchAccomadationResponseDTO], NetworkError>) -> Void) {

        let request = EndPoint.searchAccomadation(for: path, filteredSelection: item)
        print(request.url)
        session.dataTask(with: request.url) { (data, response, Error) in
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
