insert into region(distance, region_img, region_name) values ('차로 30분거리', '서울이미지', '서울');
insert into region(distance, region_img, region_name) values ('차로 4시간거리', '광주이미지', '광주');
insert into region(distance, region_img, region_name) values ('차로 30분거리', '의정부이미지', '의정부');
insert into region(distance, region_img, region_name) values ('차로 45분거리', '수원이미지', '수원');
insert into region(distance, region_img, region_name) values ('차로 3.5시간거리', '이미지', '대구');
insert into region(distance, region_img, region_name) values ('차로 4.5시간시간거리', '대구이미지', '울산');
insert into region(distance, region_img, region_name) values ('차로 2시간거리', '대전이미지', '대전');
insert into region(distance, region_img, region_name) values ('차로 30분거리', '부천이미지', '부천');

insert into user(username, password, address, birthday, phone_number) values ('geombong', '1234', 'abnc@naver.com', '2000-01-01', '010-1234-5678');
insert into user(username, password, address, birthday, phone_number) values ('tany', '8888', 'juni8453@naver.com', '1996-12-24', '010-5592-9710');

## 숙소 데이터

insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge, service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count, bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
                    VALUES('양재동', null, '서초구', null, '서울 특별시', 85000, 5000, 'WEEK', 8500, 3000, 1300000, 1400000, 'ONE_ROOM', 3, 1, 3, '첫 번째 숙소입니다.', '첫 숙소 메인 이미지', '신라호텔', 120, 4.80, 1);

insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge, service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count, bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
                    VALUES('남현동', null, '관악구', null, '서울 특별시', 85000, 5000, 'WEEK', 8500, 3000, 1300000, 1400000, 'ONE_ROOM', 3, 1, 3, '두 번째 숙소입니다.', '두 번째 숙소 메인 이미지', '남현호텔', 120, 4.80, 1);

## 예약 데이터
insert into reservation(adult_count, checkin_time, checkout_time, child_count, infant_count, total_amount_reservation, accommodation_id, user_id)
                    VALUES(1, '2022-04-01', '2022-04-03', 2, 0, 1400000, 1, 1);
insert into reservation(adult_count, checkin_time, checkout_time, child_count, infant_count, total_amount_reservation, accommodation_id, user_id)
                    VALUES(1, '2022-05-01', '2022-05-03', 2, 0, 1400000, 2, 1);

insert into reservation(adult_count, checkin_time, checkout_time, child_count, infant_count, total_amount_reservation, accommodation_id, user_id)
                    VALUES(1, '2022-06-01', '2022-06-03', 2, 0, 1400000, 1, 2);
insert into reservation(adult_count, checkin_time, checkout_time, child_count, infant_count, total_amount_reservation, accommodation_id, user_id)
                    VALUES(1, '2022-07-01', '2022-07-03', 2, 0, 1400000, 2, 1);

insert into schedule(stay_date, accommodation_id) VALUES ('2022-04-01', 1);
insert into schedule(stay_date, accommodation_id) VALUES ('2022-04-02', 1);
insert into schedule(stay_date, accommodation_id) VALUES ('2022-06-01', 1);
insert into schedule(stay_date, accommodation_id) VALUES ('2022-06-02', 1);

insert into schedule(stay_date, accommodation_id) VALUES ('2022-05-01', 2);
insert into schedule(stay_date, accommodation_id) VALUES ('2022-05-02', 2);
insert into schedule(stay_date, accommodation_id) VALUES ('2022-07-01', 2);
insert into schedule(stay_date, accommodation_id) VALUES ('2022-07-02', 2);
