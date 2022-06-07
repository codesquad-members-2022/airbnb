package com.team14.cherrybnb.openapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.auth.domain.MemberRepository;
import com.team14.cherrybnb.auth.domain.Role;
import com.team14.cherrybnb.common.domain.Address;
import com.team14.cherrybnb.common.util.GeometryUtils;
import com.team14.cherrybnb.revervation.domain.Reservation;
import com.team14.cherrybnb.revervation.domain.ReservationRepository;
import com.team14.cherrybnb.revervation.domain.ReservationState;
import com.team14.cherrybnb.room.domain.*;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.io.ParseException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DummyDataService {

    private final RoomRepository roomRepository;

    private final MemberRepository memberRepository;

    private final ReservationRepository reservationRepository;

    private final ReviewRepository reviewRepository;

    private final WishRepository wishRepository;

    @PostConstruct
    private void initDummy() throws ParseException, JsonProcessingException {
        createHost();
        createGeneral();
        createDummyRoom();
        createDummyReservation();
        createDummyReview();
        createWish();
    }

    private void createHost() {
        List<Member> hosts = List.of(
                Member.of("리아코", "rouie@naver.com", Role.HOST),
                Member.of("로니", "lonely@naver.com", Role.HOST),
                Member.of("에디", "goody@naver.com", Role.HOST),
                Member.of("체즈", "jazz@naver.com", Role.HOST));

        memberRepository.saveAll(hosts);
    }

    private void createGeneral() {
        List<Member> users = List.of(
                Member.of("user1", "user1@naver.com", Role.GENERAL),
                Member.of("user2", "user2y@naver.com", Role.GENERAL),
                Member.of("user3", "user3@naver.com", Role.GENERAL),
                Member.of("user4", "user4@naver.com", Role.GENERAL),
                Member.of("user5", "user5@naver.com", Role.GENERAL),
                Member.of("user6", "user6@naver.com", Role.GENERAL),
                Member.of("user7", "user7@naver.com", Role.GENERAL),
                Member.of("user8", "user8@naver.com", Role.GENERAL),
                Member.of("user9", "user9@naver.com", Role.GENERAL),
                Member.of("user10", "user10@naver.com", Role.GENERAL),
                Member.of("user11", "user11@naver.com", Role.GENERAL),
                Member.of("user12", "user12@naver.com", Role.GENERAL));

        memberRepository.saveAll(users);
    }

    private void createDummyRoom() throws JsonProcessingException, org.locationtech.jts.io.ParseException {

        String url = "http://openapi.seoul.go.kr:8088/454b52746e79687331303668466a544a/json/LOCALDATA_031101/1/1000/";

        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);

        ResponseEntity<String> response = new RestTemplate()
                .exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);

        String body = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(body);
        JsonNode localdata_031101 = jsonNode.get("LOCALDATA_031101");
        JsonNode row = localdata_031101.get("row");

        List<Member> hosts = memberRepository.findAll();

        int idx = 0;
        for (JsonNode node : row) {

            String address = node.get("RDNWHLADDR").asText();
            String name =node.get("BPLCNM").asText();
            double x = node.get("X").asDouble();
            double y = node.get("Y").asDouble();

            Point point = GeometryUtils.createPoint(x, y);
            String[] splited = address.split(" ");
            if(splited.length < 4) {
                continue;
            }
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 3; i <splited.length ; i++) {
                stringBuilder.append(splited[i]).append(" ");
            }

            String zipcode = stringBuilder.substring(0, stringBuilder.lastIndexOf(" "));
            Address location = new Address(address, splited[0], splited[1], splited[2], zipcode, point);
            Room dummyRoom = new Room(
                    name, new RoomInfo((int) (Math.random() * 11) + 1, 10, 5, 2),
                    "dummy room",
                    RoomPriceCondition.of(new BigDecimal(1000), new BigDecimal(2000), new BigDecimal("0.04"), new BigDecimal(14000)),
                    location,
                    hosts.get(idx++ % hosts.size())
            );

            roomRepository.save(dummyRoom);
        }
    }

    private void createDummyReservation() {
        List<Room> rooms = roomRepository.findAll();
        List<Reservation> reservations = new ArrayList<>();
        List<Member> generals = memberRepository.findByRole(Role.GENERAL);
        int generalCount = generals.size();

        LocalDateTime checkIn = LocalDateTime.of(2022, Month.JUNE, 1, 0, 0);
        LocalDateTime checkOut = LocalDateTime.of(2022, Month.JUNE, 7, 0, 0);

        for (Room room : rooms) {
            int booker = (int) (Math.random() * generalCount) % generalCount;
            Reservation reservation = Reservation.of(checkIn, checkOut, 1, new BigDecimal(1000), ReservationState.COMPLETE, room, generals.get(booker));
            reservations.add(reservation);
        }
        reservationRepository.saveAll(reservations);
    }

    private void createDummyReview() {
        List<Room> rooms = roomRepository.findAll();
        List<Review> reviews = new ArrayList<>();
        List<Member> generals = memberRepository.findByRole(Role.GENERAL);

        int generalCount = generals.size();
        for (Room room : rooms) {
            int starRating = (int) (Math.random() * 6);
            int writerIdx = (int) (Math.random() * generalCount) % generalCount;
            Review review = Review.of(starRating, generals.get(writerIdx), room);
            reviews.add(review);
        }
        reviewRepository.saveAll(reviews);
    }

    private void createWish() {
        List<Member> generals = memberRepository.findByRole(Role.GENERAL);
        List<Room> rooms = roomRepository.findAll();
        List<Wish> wishes = new ArrayList<>();

        int generalCount = generals.size();
        for (Room room : rooms) {
            int wisherIdx = (int) (Math.random() * generalCount) % generalCount;
            Wish wish = Wish.of(generals.get(wisherIdx), room);
            wishes.add(wish);
        }
        wishRepository.saveAll(wishes);
    }
}
