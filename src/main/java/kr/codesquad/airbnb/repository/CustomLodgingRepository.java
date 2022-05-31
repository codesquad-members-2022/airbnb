package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Lodging;
import kr.codesquad.airbnb.request.SearchLodgingRequest;

import java.util.List;

public interface CustomLodgingRepository {

    List<Lodging> search(SearchLodgingRequest searchLodgingRequest);
}
