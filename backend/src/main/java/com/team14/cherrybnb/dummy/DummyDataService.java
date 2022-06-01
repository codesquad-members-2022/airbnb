package com.team14.cherrybnb.dummy;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team14.cherrybnb.common.domain.Address;
import com.team14.cherrybnb.common.util.GeometryUtils;
import com.team14.cherrybnb.room.domain.Room;
import com.team14.cherrybnb.room.domain.RoomInfo;
import com.team14.cherrybnb.room.domain.RoomPriceCondition;
import com.team14.cherrybnb.room.domain.RoomRepository;
import org.locationtech.jts.geom.Point;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;

@Service
public class DummyDataService {

    private final RoomRepository roomRepository;

    public DummyDataService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    private void requestDummyData() throws JsonProcessingException, org.locationtech.jts.io.ParseException {

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
            Room dummyRoom = new Room(name, new RoomInfo(), "dummy room", new RoomPriceCondition(), location);

            roomRepository.save(dummyRoom);
        }
    }
}
