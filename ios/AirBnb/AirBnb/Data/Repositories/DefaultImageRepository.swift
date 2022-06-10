//
//  DefaultImageRepository.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/02.
//

import Foundation

protocol DataTransferService {
  func request(_ request: URLRequest)
}

final class DefaultImageRepository: ImageRepository {
  private let dataTransferService: DataTransferService
  private let cache: ImageCacheStorage

  init(dataTransferService: DataTransferService, cache: ImageCacheStorage) {
    self.dataTransferService = dataTransferService
    self.cache = cache
  }

  func fetchImage(with url: String, completion: @escaping (Result<Data, Error>) -> Void) {
    guard let key = NSURL(string: url) else {
      return
    }

    if let image = cache.retrieve(forKey: key) {
      return completion(.success(image))
    }
  }
}
