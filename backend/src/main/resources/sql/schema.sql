-- DDL for MySQL

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS member;

CREATE TABLE member
(
    member_id     INT         NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'member 테이블의 기본 키',
    name          VARCHAR(39) NOT NULL COMMENT '멤버의 이름',
    image_path    VARCHAR(255) COMMENT '멤버의 프로필 이미지 파일 경로',
    role          VARCHAR(10) NOT NULL COMMENT '멤버의 구분 (ADMIN/USER)',
    is_super_host BOOL COMMENT '멤버가 슈퍼 호스트인지 여부'
);

DROP TABLE IF EXISTS district;

CREATE TABLE district
(
    district_id  INT          NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'district 테이블의 기본 키',
    parent_id    INT COMMENT '상위 district 엔티티의 기본 키',
    name         VARCHAR(39)  NOT NULL COMMENT '행정 구역의 이름',
    image_path   VARCHAR(255) NOT NULL COMMENT '행정 구역의 이미지 파일 경로',
    address      VARCHAR(255) NOT NULL COMMENT '행정 구역의 주소',
    type         VARCHAR(10)  NOT NULL COMMENT '행정 구역의 구분 (COUNTRY/PRIMARY/SECONDARY/TERTIARY)',
    point        GEOMETRY     NOT NULL COMMENT '행정 구역의 위도와 경도',
    review_score DOUBLE COMMENT '숙소의 리뷰 평균 점수 집계',
    review_count INT COMMENT '숙소의 리뷰 개수 집계',
    FOREIGN KEY (parent_id) REFERENCES district (district_id)
);


DROP TABLE IF EXISTS room;

CREATE TABLE room
(
    room_id         INT          NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'room 테이블의 기본 키',
    district_id     INT          NOT NULL COMMENT 'district 테이블의 외래 키',
    host_id         INT          NOT NULL COMMENT 'member 테이블의 외래 키',
    name            VARCHAR(255) NOT NULL COMMENT '숙소의 이름',
    description     VARCHAR(1000) COMMENT '숙소에 대한 소개',
    type            VARCHAR(255) COMMENT '숙소의 종류',
    point           GEOMETRY     NOT NULL COMMENT '행정 구역의 위도와 경도',
    lodging_charge  DOUBLE       NOT NULL COMMENT '숙소의 숙박 요금',
    cleaning_charge DOUBLE       NOT NULL COMMENT '숙소의 청소 요금',
    review_score    DOUBLE COMMENT '숙소의 리뷰 평균 점수 집계',
    review_count    INT COMMENT '숙소의 리뷰 개수 집계',
    FOREIGN KEY (district_id) REFERENCES district (district_id),
    FOREIGN KEY (host_id) REFERENCES member (member_id)
);

DROP TABLE IF EXISTS room_detail;

CREATE TABLE room_detail
(
    room_detail_id    INT  NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'room_detail 테이블의 키',
    room_id           INT  NOT NULL COMMENT 'room 테이블의 외래 키',
    number_adult      INT  NOT NULL COMMENT '숙박 가능한 성인의 수',
    number_child      INT COMMENT '숙박 가능한 어린이의 수',
    number_infant     INT COMMENT '숙박 가능한 영유아의 수',
    number_total_room INT COMMENT '숙소 내 방의 총 개수',
    number_bedroom    INT COMMENT '숙소 내 침실 개수',
    number_bathroom   INT COMMENT '숙소 내 욕실 개수',
    number_bed        INT COMMENT '숙소 내 침대 개수',
    checkin_time      TIME NOT NULL COMMENT '체크인 시간',
    checkout_time     TIME NOT NULL COMMENT '체크아웃 시간',
    kitchen           BOOL COMMENT '숙소 내 주방 유무',
    hair_dryer        BOOL COMMENT '숙소 내 헤어드라이기 유무',
    wireless_internet BOOL COMMENT '숙소 내 무선 인터넷 지원 유무',
    air_conditioner   BOOL COMMENT '숙소 내 에어컨 유무',
    FOREIGN KEY (room_id) REFERENCES room (room_id)
);

DROP TABLE IF EXISTS room_image;

CREATE TABLE room_image
(
    room_image_id INT          NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'room_image 테이블의 기본 키',
    room_id       INT          NOT NULL COMMENT 'room 테이블의 외래 키',
    path          VARCHAR(255) NOT NULL COMMENT '숙소 이미지 경로',
    sequence      INT          NOT NULL COMMENT '숙소 별 이미지의 순서',
    FOREIGN KEY (room_id) REFERENCES room (room_id)
);

DROP TABLE IF EXISTS review;

CREATE TABLE review
(
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'review 테이블의 기본 키',
    room_id   INT COMMENT 'room 테이블의 외래 키',
    score     DOUBLE COMMENT '숙소에 대한 평점',
    content   VARCHAR(1000) COMMENT '숙소에 대한 평가 문구',
    FOREIGN KEY (room_id) REFERENCES room (room_id)
);

DROP TABLE IF EXISTS reservation;

CREATE TABLE reservation
(
    reservation_id     INT       NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'reservation 테이블의 기본 키',
    guest_id           INT       NOT NULL COMMENT 'member 테이블의 외래 키',
    room_id            INT       NOT NULL COMMENT 'room 테이블의 외래 키',
    number_adult       INT       NOT NULL COMMENT '예약 시 성인 인원',
    number_child       INT       NOT NULL COMMENT '예약 시 어린이 인원',
    number_infant      INT       NOT NULL COMMENT '예약 시 영유아 인원',
    checkin_date_time  TIMESTAMP NOT NULL COMMENT '숙박 시작 날짜 및 시간',
    checkout_date_time TIMESTAMP NOT NULL COMMENT '숙박 종료 날짜 및 시간',
    total_charge       DOUBLE    NOT NULL COMMENT '예약 시 총 금액'
);

DROP TABLE IF EXISTS tag;

CREATE TABLE tag
(
    tag_id     INT          NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'tag 테이블의 기본 키',
    name       VARCHAR(39)  NOT NULL COMMENT '태그의 이름',
    image_path VARCHAR(255) NOT NULL COMMENT '태그의 이미지 파일 경로',
    display    BOOL COMMENT '태그 표시 여부',
    sequence   INT COMMENT '태그의 순서'
);

DROP TABLE IF EXISTS tag_room;

CREATE TABLE tag_room
(
    tag_room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'tag_room 테이블의 기본 키',
    tag_id      INT NOT NULL COMMENT 'tag 테이블의 외래 키',
    room_id     INT NOT NULL COMMENT 'room 테이블의 외래 키'
);

DROP TABLE IF EXISTS wish;

CREATE TABLE wish
(
    wish_id   INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'wish 테이블의 기본 키',
    member_id INT NOT NULL COMMENT 'member 테이블의 기본 키',
    room_id   INT NOT NULL COMMENT 'room 테이블의 기본 키',
    FOREIGN KEY (member_id) REFERENCES member (member_id),
    FOREIGN KEY (room_id) REFERENCES room (room_id)
);

SET FOREIGN_KEY_CHECKS = 1;
