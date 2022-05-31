package com.team14.cherrybnb.common.domain;

import org.locationtech.jts.geom.Geometry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    @Query("select a from Address a where within(a.coordinate, :circle) = true")
    List<Address> findAddressWithin(@Param("circle") Geometry circle);
}
