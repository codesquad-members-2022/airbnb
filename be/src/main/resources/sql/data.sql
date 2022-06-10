insert into host (host_name, host_image_url)
SELECT *
FROM CSVREAD('./src/main/resources/sql/dummy_host.csv');

insert into ROOM (room_id, location_id, name, address, description, furnitureDescription, price, maximumRoomCount,
                  remainingRoomCount, discount, reviewNumber, cleaningFee,
                  serviceCharge, lodgingTax)
SELECT *
FROM CSVREAD('./src/main/resources/sql/dummy_rooms.csv');


insert into room_image(room_id,image_url)
SELECT *
FROM CSVREAD('./src/main/resources/sql/dummy_room_images.csv');
