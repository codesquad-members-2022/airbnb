package com.team14.cherrybnb.dummy;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
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

    @PostConstruct
    void requestDummyData() throws ParseException {

        String url = "http://openapi.seoul.go.kr:8088/454b52746e79687331303668466a544a/json/LOCALDATA_031101/1/2/";

        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);

        ResponseEntity<String> response = new RestTemplate()
                .exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = (JSONObject) jsonParser.parse(response.getBody());
        JSONObject LOCALDATA_031101 = (JSONObject) jsonObject.get("LOCALDATA_031101");

        System.out.println(LOCALDATA_031101);
    }
}
