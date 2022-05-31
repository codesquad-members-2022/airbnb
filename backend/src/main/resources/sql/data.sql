INSERT INTO tag (name, image_path, display, sequence)
VALUES ('자연생활을 만끽할 수 있는 숙소', 'https://bit.ly/3LKC2DF', TRUE, 1);
INSERT INTO tag (name, image_path, display, sequence)
VALUES ('독특한 공간', 'https://bit.ly/3anRokK', TRUE, 2);
INSERT INTO tag (name, image_path, display, sequence)
VALUES ('집 전체', 'https://bit.ly/3agOhuJ', TRUE, 3);
INSERT INTO tag (name, image_path, display, sequence)
VALUES ('반려동물 동반 가능', 'https://bit.ly/3sYUWjL', TRUE, 4);

INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('서울특별시', 'https://bit.ly/3PKgIBo', '서울특별시', 'PRIMARY',
        ST_GEOMFROMTEXT('POINT(126.9896 37.5499)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('의정부시', 'https://bit.ly/3NzNYJR', '의정부시,경기도', 'SECONDARY',
        ST_GEOMFROMTEXT('POINT(127.0664 37.7330)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('대구광역시', 'https://bit.ly/3GkiDs7', '대구광역시', 'PRIMARY',
        ST_GEOMFROMTEXT('POINT(128.5692 35.8281)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('대전광역시', 'https://bit.ly/3PHYdxG', '대전광역시', 'PRIMARY',
        ST_GEOMFROMTEXT('POINT(127.3974 36.3370)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('광주광역시', 'https://bit.ly/3wNyj4i', '광주광역시', 'PRIMARY',
        ST_GEOMFROMTEXT('POINT(126.8413 35.1504)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('수원시', 'https://bit.ly/3LGz03z', '수원시,경기도', 'SECONDARY',
        ST_GEOMFROMTEXT('POINT(127.0038 37.31799)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('울산광역시', 'https://bit.ly/3GhhtOj', '울산광역시', 'PRIMARY',
        ST_GEOMFROMTEXT('POINT(129.2747 35.5383)'), 3.5, 50);
INSERT INTO district (name, image_path, address, type, point, review_score, review_count)
VALUES ('부천시', 'https://bit.ly/3sVZyay', '부천시,경기도', 'SECONDARY',
        ST_GEOMFROMTEXT('POINT(126.7826 37.5060)'), 3.5, 50);

INSERT INTO member (name, image_path, role, is_super_host)
VALUES ('Miller', 'https://avatars.githubusercontent.com/u/50660684?v=4', 'USER', false);
INSERT INTO member (name, image_path, role, is_super_host)
VALUES ('BB-choi', 'https://avatars.githubusercontent.com/u/78826879?v=4', 'USER', false);

INSERT INTO room (district_id, host_id, name, description, image_path, type, longitude, latitude,
                  lodging_charge, cleaning_charge, review_score, review_count)
VALUES (1, 1, 'Spacious and Comfortable cozy house #4', '강남역 5번 출구에서 도보로 이동가능합니다.',
        'https://bit.ly/39ZouHy', 'WHOLE_RESIDENCE', 127.0286, 37.4953, 71466, 25996, 4.8, 127);

INSERT INTO room_detail (room_id, number_adult, number_child, number_infant, number_total_room,
                         number_bedroom, number_bathroom, number_bed, checkin_time, checkout_time,
                         kitchen, hair_dryer, wireless_internet, air_conditioner)
VALUES (1, 2, 1, 0, 2, 1, 1, 1, '17:00:00', '12:00:00', true, true, true, true);

INSERT INTO reservation (guest_id, room_id, total_charge, number_adult, number_child, number_infant,
                         checkin_date, checkout_date, checkin_time, checkout_time)
VALUES (2, 1, 67007, 2, 1, 0, '2021-05-30', '2021-05-31', '17:00:00', '12:00:00');

