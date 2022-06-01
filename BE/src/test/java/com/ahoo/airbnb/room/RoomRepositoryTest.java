package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.entity.RoomChargePolicy;
import com.ahoo.airbnb.entity.RoomImage;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class RoomRepositoryTest {

    @Autowired
    RoomRepository roomRepository;

    @Test
    void 두근두근() {
        Room test = roomRepository.test(1L).get();
        System.out.println(test.getId());
        List<RoomImage> images = test.getImages();
        for (RoomImage image : images) {
            System.out.println(image.getUrl());
        }
        List<RoomChargePolicy> roomChargePolicies = test.getRoomChargePolicies();
        for (RoomChargePolicy roomChargePolicy : roomChargePolicies) {
            System.out.println(roomChargePolicy.getChargePolicy().getChargePolicyType().getPolicyName());
        }
    }

//    @Test
//    void 기대된다() {
//        Room test = roomRepository.findById(1L).get();
//
//        System.out.println(test.getId());
//        List<RoomImage> images = test.getImages();
//        for (RoomImage image : images) {
//            System.out.println(image.getUrl());
//        }
//        List<RoomChargePolicy> roomChargePolicies = test.getRoomChargePolicies();
//        for (RoomChargePolicy roomChargePolicy : roomChargePolicies) {
//            System.out.println(roomChargePolicy.getChargePolicy().getChargePolicyType().getPolicyName());
//        }
//
//        roomChargePolicies.stream()
//            .filter(roomChargePolicy -> roomChargePolicy.getChargePolicy().isActive())
//            .forEach(roomChargePolicy -> System.out.println(roomChargePolicy.getChargePolicy().getChargePolicyType().getPolicyName()));
//    }
}
