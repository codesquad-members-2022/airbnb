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
