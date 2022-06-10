insert into region(distance, region_img, region_name)
values ('차로 30분거리', '서울이미지', '서울');
insert into region(distance, region_img, region_name)
values ('차로 4시간거리', '광주이미지', '광주');
insert into region(distance, region_img, region_name)
values ('차로 30분거리', '의정부이미지', '의정부');
insert into region(distance, region_img, region_name)
values ('차로 45분거리', '수원이미지', '수원');
insert into region(distance, region_img, region_name)
values ('차로 3.5시간거리', '이미지', '대구');
insert into region(distance, region_img, region_name)
values ('차로 4.5시간시간거리', '대구이미지', '울산');
insert into region(distance, region_img, region_name)
values ('차로 2시간거리', '대전이미지', '대전');
insert into region(distance, region_img, region_name)
values ('차로 30분거리', '부천이미지', '부천');

insert into user(username, password, address, birthday, phone_number)
values ('geombong', '1234', 'abnc@naver.com', '2000-01-01', '010-1234-5678');
insert into user(username, password, address, birthday, phone_number)
values ('tany', '8888', 'juni8453@naver.com', '1996-12-24', '010-5592-9710');

## 숙소 데이터

insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('성훈조동', null, '강동구', null, '부천시', 374709, 5000, 'WEEK', 8500, 1200, 0, 0, 'ONE_ROOM', 2, 2, 3,
        'Debitis animi aliquid sapiente laudantium consequuntur hic. Debitis fugit fugiat nemo. Atque odio totam rerum.', '첫 숙소 메인 이미지', '김임 아파트', 120, 4.80, 8);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES (null, '준서최읍', '서초구', null, '대전광역시', 261840, 1800, 'WEEK', 8000, 4300, 0, 0, 'ONE_ROOM', 3, 2, 6,
        'Amet facilis pariatur a aliquam aliquid. Quisquam dignissimos nihil dolore.
Accusantium blanditiis dolor doloribus ab. Rerum voluptatem exercitationem.', '첫 숙소 메인 이미지', '주식회사 이최이 멘션', 120, 4.80, 7);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('성훈조동', null, '강남구', null, '수원시', 42362, 2500, 'WEEK', 7500, 2000, 0, 0, 'ONE_ROOM', 1, 2, 2,
        'Debitis animi aliquid sapiente laudantium consequuntur hic. Debitis fugit fugiat nemo. Atque odio totam rerum.', '첫 숙소 메인 이미지', '윤김이 모텔', 120, 4.80, 4);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('정식이성동', null, '서대문구', null, '울산광역시', 410038, 5100, 'WEEK', 7000, 2300, 0, 0, 'ONE_ROOM', 3, 3, 4,
        'Dolores totam perspiciatis iste eius nisi minima. Nihil possimus dolore inventore. Quasi magni voluptatem quidem excepturi.', '첫 숙소 메인 이미지', '유한회사 황 멘션', 120, 4.80, 6);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('승민최김마을', null, '서구', null, '의정부시', 676277, 5600, 'WEEK', 6500, 1300, 0, 0, 'ONE_ROOM', 1, 3, 5,
        'Quae beatae itaque reprehenderit et accusantium nihil. Hic vitae itaque expedita voluptatibus.
Doloribus id consequatur nihil. Porro aliquid eius deleniti odio ut minima.', '첫 숙소 메인 이미지', '류이안 호텔', 120, 4.80, 3);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('영동대길', null, '서대문구', null, '대구광역시', 166958, 4700, 'WEEK', 6000, 3900, 0, 0, 'ONE_ROOM', 2, 1, 4,
        'Est distinctio corrupti et provident qui ratione. Error sit ipsum consequuntur recusandae magni. Amet beatae dolore eos consectetur.
Quo tempore amet impedit amet.', '첫 숙소 메인 이미지', '김류홍 멘션', 120, 4.80, 5);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('반포대219거리', null, '서대문구', null, '대구광역시', 180132, 2600, 'WEEK', 5500, 5000, 0, 0, 'ONE_ROOM', 2, 1, 5,
        'Voluptate officia ipsam accusantium vero magni ab. Excepturi quibusdam fuga veniam.
Officia ipsum quas maiores adipisci voluptate. Nostrum officiis ab accusamus.', '첫 숙소 메인 이미지', '양안 도미토리', 120, 4.80, 5);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('서초중앙길', null, '금천구', null, '서울특별시', 411435, 3600, 'WEEK', 5000, 2200, 0, 0, 'ONE_ROOM', 2, 2, 6,
        'Nisi dolorum enim vitae ipsam corporis sunt cupiditate. Magnam inventore beatae eveniet iste tempore ratione. Deleniti accusantium ullam rerum expedita voluptatem.', '첫 숙소 메인 이미지', '고이김 멘션', 120, 4.80, 1);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('개포9길', null, '남구', null, '울산광역시', 135815, 1400, 'WEEK', 4500, 1700, 0, 0, 'ONE_ROOM', 2, 2, 4,
        'Illo facilis eius quis necessitatibus minima.
Dolorum maiores commodi quisquam voluptatum. Molestias fugiat inventore voluptates facere velit. Ratione a ab qui facere laboriosam.', '첫 숙소 메인 이미지', '주식회사 이류손 호텔', 120, 4.80, 6);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('삼성거리', null, '용산구', null, '대전광역시', 419241, 7700, 'WEEK', 4000, 1700, 0, 0, 'ONE_ROOM', 3, 3, 6,
        'Mollitia vero quidem eius ex quae reprehenderit occaecati. Sint quod quo alias eius illo.
Fugiat suscipit temporibus sint laboriosam eos.', '첫 숙소 메인 이미지', '김김하 민박', 120, 4.80, 7);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('잠실9길', null, '동구', null, '울산광역시', 190469, 6600, 'WEEK', 3500, 4900, 0, 0, 'ONE_ROOM', 2, 2, 3,
        'Atque error illum autem assumenda doloribus. Fugiat dolor quis.
Numquam adipisci doloremque dolorum incidunt. Perspiciatis neque necessitatibus praesentium alias fugit veritatis exercitationem.', '첫 숙소 메인 이미지', '배서허 호텔', 120, 4.80, 6);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('테헤란길', null, '노원구', null, '대구광역시', 198683, 5200, 'WEEK', 4300, 2500, 0, 0, 'ONE_ROOM', 3, 3, 5,
        'Accusamus alias sapiente nesciunt alias corrupti ullam. Et error consectetur sed.
Cumque officia dolores aliquam suscipit ipsum amet. Laboriosam esse nesciunt. Nemo animi amet.', '첫 숙소 메인 이미지', '주식회사 황이오 도미토리', 120, 4.80, 5);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('석촌호수가', null, '서대문구',null , '광주광역시', 178225, 2200, 'WEEK', 3300, 2500, 0, 0, 'ONE_ROOM', 1, 2, 2,
        'Fugit labore voluptates fuga deleniti dolor saepe. Excepturi veritatis id suscipit cumque maiores. Quisquam repellat cumque rem dolor itaque.', '첫 숙소 메인 이미지', '김홍김 호텔', 120, 4.80, 2);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('오금2로', null, '종로구', null, '대구광역시', 113439, 5900, 'WEEK', 2900, 2400, 0, 0, 'ONE_ROOM', 1, 1, 5,
        'Accusantium tenetur porro temporibus eos. Adipisci quos maxime vel quas.', '첫 숙소 메인 이미지', '이안이 민박', 120, 4.80, 5);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('반포대075가', null, '광진구', null, '광주광역시', 710036, 3600, 'WEEK', 9900, 2000, 0, 0, 'ONE_ROOM', 3, 2, 5,
        'Debitis animi aliquid sapiente laudantium consequuntur hic. Debitis fugit fugiat nemo. Atque odio totam rerum.', '첫 숙소 메인 이미지', '유한회사 이김김 아파트', 120, 4.80, 2);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('양재천7가', null, '서대문구', null, '울산광역시', 229877, 5500, 'WEEK', 12000, 2200, 0, 0, 'ONE_ROOM', 3, 3, 8,
        'Debitis animi aliquid sapiente laudantium consequuntur hic. Debitis fugit fugiat nemo. Atque odio totam rerum.', '첫 숙소 메인 이미지', '(유) 송 호텔', 120, 4.80, 6);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('석촌호수로', null, '도봉구', null, '대전광역시', 352949, 8900, 'WEEK', 5500, 2000, 0, 0, 'ONE_ROOM', 1, 1, 2,
        'Iure illum id. Id dolore quod. Voluptatem deserunt sint odit neque dicta molestias.', '첫 숙소 메인 이미지', '이김 도미토리', 120, 4.80, 7);

insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('논현길', null, '서초구', null, '광주광역시', 59721, 8500, 'WEEK', 9200, 4000, 0, 0, 'ONE_ROOM', 1, 3, 3,
        'Officiis omnis magni amet iusto vero repellendus. Sed eveniet fugit incidunt quasi nostrum esse velit.
Numquam sint beatae modi corporis. Tenetur tempore suscipit dolor.', '첫 숙소 메인 이미지', '(유) 이최황 한옥', 120, 4.80, 2);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('강남대41가', null, '종로구', null, '대전광역시', 145486, 1100, 'WEEK', 3300, 2100, 0, 0, 'ONE_ROOM', 3, 3, 6,
        'In consequuntur perspiciatis voluptate sapiente.
Asperiores ullam perspiciatis fuga cum mollitia. Quia accusantium excepturi totam.', '첫 숙소 메인 이미지', '양서 아파트', 120, 4.80, 7);
insert into accommodation(dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge,
                          service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count,
                          bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id)
VALUES ('삼성730길', null, '강동구', null, '서울특별시', 323858, 1500, 'WEEK', 7700, 1700, 0, 0, 'ONE_ROOM', 1, 1, 2,
        'Necessitatibus commodi nulla dolorem.', '첫 숙소 메인 이미지', '최박 아파트', 120, 4.80, 1);


## 예약 데이터
insert into reservation(adult_count, checkin_date, checkout_date, child_count, infant_count, total_amount,
                        accommodation_id, user_id)
VALUES (1, '2022-04-01', '2022-04-03', 2, 0, 1400000, 1, 1);
insert into reservation(adult_count, checkin_date, checkout_date, child_count, infant_count, total_amount,
                        accommodation_id, user_id)
VALUES (1, '2022-05-01', '2022-05-03', 2, 0, 1400000, 2, 1);

insert into reservation(adult_count, checkin_date, checkout_date, child_count, infant_count, total_amount,
                        accommodation_id, user_id)
VALUES (1, '2022-06-01', '2022-06-03', 2, 0, 1400000, 1, 2);
insert into reservation(adult_count, checkin_date, checkout_date, child_count, infant_count, total_amount,
                        accommodation_id, user_id)
VALUES (1, '2022-07-01', '2022-07-03', 2, 0, 1400000, 2, 1);

insert into schedule(stay_date, accommodation_id)
VALUES ('2022-04-01', 1);
insert into schedule(stay_date, accommodation_id)
VALUES ('2022-04-02', 1);
insert into schedule(stay_date, accommodation_id)
VALUES ('2022-06-01', 1);
insert into schedule(stay_date, accommodation_id)
VALUES ('2022-06-02', 1);

insert into schedule(stay_date, accommodation_id)
VALUES ('2022-05-01', 2);
insert into schedule(stay_date, accommodation_id)
VALUES ('2022-05-02', 2);
insert into schedule(stay_date, accommodation_id)
VALUES ('2022-07-01', 2);
insert into schedule(stay_date, accommodation_id)
VALUES ('2022-07-02', 2);
