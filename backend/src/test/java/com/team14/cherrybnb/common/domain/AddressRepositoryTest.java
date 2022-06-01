package com.team14.cherrybnb.common.domain;

import com.team14.cherrybnb.common.util.GeometryUtils;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.locationtech.jts.geom.Geometry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

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
    void findAddressWithinTest() {

        double x = 209407.745384399;
        double y = 449459.252995276;
        double radius = 5000;

        Geometry circle = GeometryUtils.createCircle(x, y, radius);
        List<Address> addresses = addressRepository.findAddressWithin(circle);

        assertThat(addresses.size()).isEqualTo(52);

    }
}
