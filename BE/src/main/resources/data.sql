insert into image (content, image_type, title, url)
values ('content', 'HERO', 'title', 'url'),
       ('content', 'AROUND', 'title', 'url');

insert into members (email, members_name, members_image)
values ('google', 'hanse', 'imageUrl');

insert into room (city, region, district, detail, price, rating, review_count, room_description,
                  bathroom_count, bed_count, check_in_time, check_out_time, max_guest, room_type, room_name,
                  members_id)
values ('서울', '강남구', '강남대로62길23', '4층', 10000, 4.1, 187, '룸이라네',
        1, 2, 16, 12, 3, 'RESIDENCE', '편안하신가요?', 1),
       ('서울', '서초구', '강북대로62길23', '4층', 11000, 4.2, 187, '룸이라네',
        1, 2, 16, 12, 3, 'RESIDENCE', '편안하신가요?', 1),
       ('서울', '동구', '강서대로62길23', '4층', 12000, 4.3, 187, '룸이라네',
        1, 2, 16, 12, 3, 'RESIDENCE', '편안하신가요?', 1);

insert into room_image (url, room_id)
values ('url1', 1),
       ('url2', 1),
       ('url3', 2),
       ('url4', 2),
       ('url6', 3);

insert into reservation (adult_count, child_count, infant_count, check_in_date_time, check_out_date_time,
                         cleaning_fee, discount_policy, room_tax, service_tax, reservation_price,
                         members_id, room_id)
values (2, 1, 0, '2022-05-30', '2022-06-01', 10000.0, 'WEEK', 10.0, 10.0, 20000, 1, 1),
       (2, 1, 0, '2022-05-30', '2022-06-01', 10000.0, 'WEEK', 10.0, 10.0, 20000, 1, 2);

insert into wish (members_id, room_id)
values (1, 1);
