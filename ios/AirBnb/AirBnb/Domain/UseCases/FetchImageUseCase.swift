//
//  FetchImageUseCase.swift
//  AirBnb
//
//  Created by 송태환 on 2022/06/01.
//

import Foundation

// 이미지 1장을 가져오는 Use Case
final class FetchImageUseCase {
  private let imageRepository: ImageRepository

  init(
    imageRepository: ImageRepository
  ) {
    self.imageRepository = imageRepository
  }

  // UseCase 는 조금 더 Business specific 하기 때문에 매개변수 값에 따라 다른 데이터를 가져올 수 있도록 가능성을 열어두는 것보다는
  // 생성자를 통해서만 필요한 값을 받아 한 도메인 종류(배너)의 데이터(지금의 경우는 Data 이지만 필요에 따라 [Accommodation] 등등)만 가져오게끔 하는 것이 특정 시나리오를 대변하는 느낌이지 않나...
  // UseCase 클래스 자체는 재사용 가능하지만 인스턴스 생성 시 request 의 변경 가능성을 닫고 항상 같은 아웃풋을 얻도록 제한
  func start(url: String, completion: @escaping (Result<Data, Error>) -> Void) {
    imageRepository.fetchImage(with: url, completion: completion)
  }
}
