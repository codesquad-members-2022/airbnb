package com.team14.cherrybnb.openapi.dummy;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.List;


class DummyDataServiceTest {

    @Test
    void test() throws JsonProcessingException {
        String url = "http://openapi.seoul.go.kr:8088/454b52746e79687331303668466a544a/json/LOCALDATA_031101/1/1000/";

        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);

        ResponseEntity<String> response = new RestTemplate()
                .exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        //.configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false)
        String body = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        DummyData dummyData = objectMapper.readValue(body, DummyData.class);
        List<DummyInfo> dummyInfos = dummyData.getDummies().getDummyInfos();
        for (DummyInfo dummyInfo : dummyInfos) {
            if(dummyInfo.getAddress().isEmpty() || dummyInfo.getX() == null) {
                //System.out.println(dummyInfo.toString());
            }
            System.out.println(dummyInfo.toString());
        }


    }

}
