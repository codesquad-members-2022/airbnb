package com.ahoo.airbnb.data;

import com.ahoo.airbnb.entity.Address;
import com.ahoo.airbnb.entity.ChargePolicy;
import com.ahoo.airbnb.entity.Coordinate;
import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.MemberType;
import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.entity.RoomChargePolicy;
import com.ahoo.airbnb.entity.RoomImage;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import java.util.ArrayList;
import java.util.List;

public class TestData {

    public static Member member;
    public static Coordinate coordinate;
    public static Address address;
    public static List<RoomImage> images = new ArrayList<>();
    public static List<RoomChargePolicy> roomChargePolicies = new ArrayList<>();
    public static List<ChargePolicyType> chargePolicyTypes;
    public static Room room;

    static {
        member = new Member(1L, "정후팍", "1234@gmail.com", "1234",
            "https://avatars.githubusercontent.com/u/68011320?v=4", MemberType.HOST);

        coordinate = new Coordinate(37.57691, 127.02279);

        address = new Address("한국", "서울", "종로구", "", "detail_address example");

        images.add(new RoomImage(1L, null, 1,
            "https://a0.muscache.com/im/pictures/miso/Hosting-1/original/3191eaac-ff69-429e-a2d6-2cc9d6a45573.jpeg?im_w=720",
            true));
        images.add(new RoomImage(2L, null, 2,
            "https://a0.muscache.com/im/pictures/miso/Hosting-1/original/0465fe61-8d8a-49ad-b05c-478d620606e4.jpeg?im_w=720",
            false));
        images.add(new RoomImage(3L, null, 3,
            "https://a0.muscache.com/im/pictures/miso/Hosting-573050732939966686/original/c8724c02-f888-48ff-92e2-bd943013d253.jpeg?im_w=720",
            false));
        images.add(new RoomImage(4L, null, 4,
            "https://a0.muscache.com/im/pictures/miso/Hosting-573050732939966686/original/93789c4f-b9c5-4b1f-b5f5-a5113785a59f.jpeg?im_w=720",
            false));
        images.add(new RoomImage(5L, null, 5,
            "https://a0.muscache.com/im/pictures/miso/Hosting-1/original/83e10987-9b1f-4676-8db1-e9be9e193eed.jpeg?im_w=720",
            false));
        images.add(new RoomImage(6L, null, 6,
            "https://a0.muscache.com/im/pictures/miso/Hosting-1/original/71ef864e-066a-405f-8c07-1b511ed7f90f.jpeg?im_w=720",
            false));

        chargePolicyTypes = List.of(
            ChargePolicyType.ACCOMMODATION,
            ChargePolicyType.WEEKLY_DISCOUNT,
            ChargePolicyType.CLEANING,
            ChargePolicyType.SERVICE,
            ChargePolicyType.ACCOMMODATION_TAX
        );

        roomChargePolicies.add(new RoomChargePolicy(1L, null, new ChargePolicy(1L, ChargePolicyType.ACCOMMODATION, true)));
        roomChargePolicies.add(new RoomChargePolicy(1L, null, new ChargePolicy(3L, ChargePolicyType.WEEKLY_DISCOUNT, true)));
        roomChargePolicies.add(new RoomChargePolicy(1L, null, new ChargePolicy(4L, ChargePolicyType.SERVICE, true)));
        roomChargePolicies.add(new RoomChargePolicy(1L, null, new ChargePolicy(5L, ChargePolicyType.CLEANING, true)));
        roomChargePolicies.add(new RoomChargePolicy(1L, null, new ChargePolicy(6L, ChargePolicyType.ACCOMMODATION_TAX, true)));

        room = new Room(1L, member, coordinate, address, "호스텔 서울 R - 욕실이 있는 싱글룸", "description example",
            "개인실",
            5, 2, 2, 1, 44896, 5000,
            106, 4.04, false, new ArrayList<>(), new ArrayList<>());

        int curr = roomChargePolicies.size();
        for (int i = 0; i < roomChargePolicies.size(); i++) {
             roomChargePolicies.get(i).setRoom(room);
        }

        for (int i = 0; i < images.size(); i++) {
             images.get(i).setRoom(room);
        }
    }
}
