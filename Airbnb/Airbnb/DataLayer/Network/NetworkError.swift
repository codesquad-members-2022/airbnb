//
//  NetworkError.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/06/08.
//

import Foundation

enum NetworkError: Error {
    case transportError(Error)
    case serverError(statusCode: Int)
    case noData
    case decodingError(Error)
    case encodingError(Error)
}
