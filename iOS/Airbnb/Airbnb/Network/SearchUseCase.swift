//
//  SearchUseCase.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/05/30.
//

import Foundation
import Alamofire

class SearchUseCase: NetworkCommonComponents {
    
    func getPopularCities(_ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.destination) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .get
        ).commonRequestComplete(completionHandler)
    }
    
    func getNearbyCities(name: String, _ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.rooms) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .get,
            parameters: Destination(destination: name),
            encoder: JSONParameterEncoder.default
        ).commonRequestComplete(completionHandler)
    }
    
    func getRoomDetail(roomId: String, _ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.roomsWithID(roomId)) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .get
        ).commonRequestComplete(completionHandler)
    }
    
    //TODO: - parameter를 DTO로 변경할 예정.
    func postNearbyCities(location: String, checkInDate: String, checkOutDate: String, minCharge: String, maxCharge: String, headcount: String, _ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.rooms) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .post,
            parameters: PostNearbyParam(location: location, checkInDate: checkInDate, checkOutDate: checkOutDate, minCharge: minCharge, maxCharge: maxCharge, headcount: headcount),
            encoder: JSONParameterEncoder.default
        ).commonRequestComplete(completionHandler)
    }
    
    func getReservations(_ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.reservations) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        let header = HTTPHeader.init(name: "content-type", value: "application/json")
//    connection: keep-alive
//     content-type: application/json
//     date: Tue,31 May 2022 00:42:49 GMT
//     keep-alive: timeout=60
//     transfer-encoding: chunked
        AF.request(
            url,
            method: .get,
            headers: [header]
        ).commonRequestComplete(completionHandler)
    }
    
    func getTotalChange(roomId: String, checkInDate: String, checkOutDate: String, headcount: String, _ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.totalChange(roomId)) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .post,
            parameters: TotalChangeParam(checkInDate: checkInDate, checkOutDate: checkOutDate, headcount: headcount),
            encoder: JSONParameterEncoder.default
        ).commonRequestComplete(completionHandler)
    }
    
    func postCalculateChange(roomId: String, checkInDate: String, checkOutDate: String, headcount: String, _ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.calculateChange(roomId)) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .post,
            parameters: TotalChangeParam(checkInDate: checkInDate, checkOutDate: checkOutDate, headcount: headcount),
            encoder: JSONParameterEncoder.default
        ).commonRequestComplete(completionHandler)
    }
    
    // TODO: - 예약 상세임. 다른 유스 케이스로 옮겨야 할 수도 있음
    func getReservationDetail(reservationID: String, completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        guard let url = baseURL?.appendingPathComponent(services.reservationsDetail(reservationID)) else {
            completionHandler(.failure(SearchNetworkError.URLError))
            return
        }
        
        AF.request(
            url,
            method: .get
        ).commonRequestComplete(completionHandler)
    }
    
    struct Destination: Codable {
        let destination: String
    }
    
    struct PostNearbyParam: Codable {
        var location, checkInDate, checkOutDate, minCharge, maxCharge, headcount: String
    }
    
    struct TotalChangeParam: Codable {
        var checkInDate, checkOutDate, headcount: String
    }
}

extension SearchUseCase {
    private func commonRequestComplete(_ request: DataRequest, completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        request
            .validate()
            .response { response in
                switch response.result {
                case .success(let data):
                    completionHandler(.success(data))
                case .failure(let error):
                    completionHandler(.failure(error))
                }
            }
    }
}

extension SearchUseCase {
    enum SearchNetworkError: Error {
        case URLError
    }
}

private extension DataRequest {
    func commonRequestComplete(_ completionHandler: @escaping (Result<Data?, Error>) -> Void) {
        self
            .validate()
            .response { response in
                switch response.result {
                case .success(let data):
                    completionHandler(.success(data))
                case .failure(let error):
                    completionHandler(.failure(error))
                }
            }
    }
}
