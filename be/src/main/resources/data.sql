INSERT INTO user (id, username) values
(1, "testuser1"),
(2, "testuser2"),
(3, "testuser3"),
(4, "testuser4");

INSERT INTO discount_policy (id, weekly_discount_rate, monthly_discount_rate, yearly_discount_rate) VALUES
(1, 0.05, 0.06, 0.07),
(2, 0.06, 0.1, 0.12);

INSERT INTO accommodation (max_count_of_guest, room_type, count_of_bed, count_of_bathroom,
basic_fee, description, host_id, location, name, rating, review_count, cleaning_fee, discount_policy_id) values
(2, "레지던스 전체", 1, 1, 10000, "테스트 설명", 1,
 ST_GeomFromText('POINT(127.0395707 37.4850493)'), "테스트 숙소 이름", 5.0, 100, 20000, 1),
(3, "아파트 전체", 1, 1, 20000, "테스트 설명",
 2, ST_GeomFromText('POINT(126.9619196 37.4783544)'), "테스트 숙소 이름2", 4.7, 100, 20000, 2),
(4, "레지던스 전체", 2, 1, 20000, "테스트 설명",
 3, ST_GeomFromText('POINT(127.0395707 37.4850493)'), "테스트 숙소 이름3", 4.5, 100, 20000, null);

INSERT INTO reservation (cancelled, check_in_date, check_out_date, count_of_guest, fee, accommodation_id, user_id) values
(0, "2022-05-26", "2022-05-27", 3, 10000, 1, 1),
(0, "2022-05-20", "2022-05-23", 2, 20000, 1, 2),
(0, "2022-05-27", "2022-05-30", 2, 20000, 2, 3),
(0, "2022-05-22", "2022-05-26", 4, 15000, 3, 3);

INSERT INTO image (image_link, image_order, accommodation_id) values
("test image link", 1, 1);
