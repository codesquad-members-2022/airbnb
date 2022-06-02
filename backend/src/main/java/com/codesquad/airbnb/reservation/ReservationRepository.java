package com.codesquad.airbnb.reservation;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReservationRepository extends JpaRepository<Reservation, Integer>,
    ReservationRepositoryCustom {

    @Query("select re from Reservation re"
        + " join fetch re.room ro"
        + " join fetch ro.district"
        + " join fetch re.guest g"
        + " where g.id = :memberId")
    List<Reservation> findByMemberId(@Param("memberId") Integer memberId);

    @Query("select re from Reservation re"
        + " join fetch re.room ro"
        + " join fetch ro.detail"
        + " join fetch ro.district"
        + " join fetch ro.host"
        + " join fetch ro.images"
        + " where re.id = :id")
    Optional<Reservation> findByIdWithRoom(@Param("id") Integer id);

}
