package com.team14.cherrybnb.common.domain;

import org.junit.jupiter.api.Test;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.util.GeometricShapeFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class AddressRepositoryTest {

    AddressRepository addressRepository;

    @Autowired
    AddressRepositoryTest(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Test
    @Transactional(readOnly = true)
    void test() {

        double x = 209407.745384399;
        double y = 449459.252995276;
        double radius = 5000;

        // 209407.745384399 449459.252995276
        // 193592.000380036 447092.629432527

        GeometricShapeFactory shapeFactory = new GeometricShapeFactory();
        shapeFactory.setNumPoints(32);
        shapeFactory.setCentre(new Coordinate(x, y));
        shapeFactory.setSize(radius * 2);
        Geometry circle = shapeFactory.createCircle();
//        System.out.println("@@@@@@" + addressRepository.findAll());
        List<Address> addresses = addressRepository.findAddressWithin(circle);
        System.out.println(addresses.size());

//        String coordinate = String.format("POINT (%f %f)", x, y);
//        Geometry geometry = new WKTReader().read(coordinate);
//
//        addressRepository.findAddressWithin();
    }
}