package com.team14.cherrybnb.room.domain;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team14.cherrybnb.common.config.WebConfig;
import com.team14.cherrybnb.room.dto.SearchCondition;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Month;

import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.*;

@Import(WebConfig.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
class RoomRepositoryTest {

    RoomRepository roomRepository;

    SearchCondition searchCondition;

    @Autowired
    RoomRepositoryTest(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @BeforeEach
    void setUp() {
        searchCondition = new SearchCondition(
                LocalDateTime.of(2022, Month.JUNE, 8, 0, 0),
                LocalDateTime.of(2022, Month.JUNE, 10, 0, 0),
                new BigDecimal(0),
                new BigDecimal(1500),
                5,
                null
        );
    }

    @Test
    void test() {
        PageRequest pageRequest = PageRequest.of(0, 1000);
        Page<Room> rooms = roomRepository.findBySearchCondition(searchCondition, pageRequest);
        System.out.println(rooms.getContent().size());
    }
}