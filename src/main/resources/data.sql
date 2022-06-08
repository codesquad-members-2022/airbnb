INSERT INTO event (id, title, description, button_name, image_url, main_event)
    VALUE (1,'슬기로운 자연생활','에어비엔비가 엄선한 위시리스트를 만나보세요','여행 아이디어 얻기','https://user-images.githubusercontent.com/78344294/170429861-65491d82-f630-4e84-98c6-6dc71d85e995.png',true);

INSERT INTO region
    (id, region_name, region_description, image_url)
VALUES (1, '서울', '차로 30분 거리',
        'https://velog.velcdn.com/images/becolorful/post/ac2563da-933e-454a-84c4-a8ad10834a4a/image.png'),
       (2, '광주', '차로 4시간 거리',
        'https://velog.velcdn.com/images/becolorful/post/35ac888b-f8b1-4786-9558-33670fc51f41/image.png'),
       (3, '의정부시', '차로 30분 거리',
        'https://velog.velcdn.com/images/becolorful/post/3973a9e3-6af1-4238-940b-768c2b5ed402/image.png'),
       (4, '수원시', '차로 45분 거리',
        'https://velog.velcdn.com/images/becolorful/post/88f59ca6-da28-4b5f-8730-cd1f2739404e/image.png'),
       (5, '대구', '차로 3.5시간 거리',
        'https://velog.velcdn.com/images/becolorful/post/eda9eb81-55d9-4f05-b9fd-b44778418535/image.png'),
       (6, '울산', '차로 4.5시간 거리',
        'https://velog.velcdn.com/images/becolorful/post/c60193ca-0a5b-4dd9-8215-4b37bb371413/image.png'),
       (7, '대전', '차로 2시간 거리',
        'https://velog.velcdn.com/images/becolorful/post/b006661b-f5c9-4b79-bcc3-ccb0ceb5a02a/image.png'),
       (8, '부천시', '차로 30분 거리',
        'https://velog.velcdn.com/images/becolorful/post/79908da7-9ad5-4537-a030-56a75a3f84aa/image.png');

INSERT INTO lodging (id, bathroom_count, bed_count, bedroom_count, place_type, lodging_description,
                     host_name, host_image, latitude, longitude, max_guest,
                     lodging_name, property_type, price, rating, review, region_id)
    VALUES (1,1,2,3,'ENTIRE_PLACE','설명',
    '김길동','호스트이미지 url',100,100,3,
    '좋은 숙소','HOUSE',1000,4.7,2,1),
           (2,2,2,2,'ENTIRE_PLACE','설명',
            '김길동','호스트이미지 url2',100,100,3,
            '안좋은 숙소','HOUSE',1000,4.7,2,1);

INSERT INTO images (id, image_url, lodging_id, is_main_image)
VALUES (1, 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720', 1, true),
       (2, 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/9e8d63dc-a594-4364-9be4-daf83610fd8c?im_w=1200', 1, false),
       (3, 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/bbc08ed9-3415-4f38-ae72-1fbee28e6b8d?im_w=1200', 1, false),
       (4, 'https://a0.muscache.com/im/pictures/1a0edc12-4a18-42da-b44a-42d77ea595b3.jpg?im_w=960', 2, true),
       (5, 'https://a0.muscache.com/im/pictures/a9a5e884-0ce4-442d-9348-a5bd130e8811.jpg?im_w=720', 2, false),
       (6, 'https://a0.muscache.com/im/pictures/miso/Hosting-29642943/original/70e585af-5985-4b86-9e71-7e3d17902b08.jpeg?im_w=720', 2, false);

INSERT INTO address (id, lodging_id, country, city, town, village)
VALUES (1, 1,'한국', '서울시', '강남구', '삼성동'),
       (2, 2,'한국', '서울시', '강남구', '세곡동');

INSERT INTO members (id, email, github_id, image_url, name) VALUE (1, null, 'test1', 'test1image', 'tester');

-- INSERT INTO wish (id, lodging_id, members_id)
-- VALUE (1, 1, 1);
--
INSERT INTO reservation(id, canceled, check_in, check_out, guests, price, lodging_id, members_id)
VALUES (1,0,'2022-03-03', '2022-04-04', 2, 11, 1, 1),
       (2,0,'2022-04-05', '2022-04-10',2, 11, 2, 1);


