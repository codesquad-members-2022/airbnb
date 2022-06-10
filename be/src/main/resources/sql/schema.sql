DROP TABLE IF EXISTS ROOM;

CREATE TABLE ROOM
(
  room_id                   LONG              PRIMARY KEY     AUTO_INCREMENT,
  location_id               LONG              FOREIGN KEY,
  name                      VARCHAR(30),
  address                   VARCHAR(300),
  description               VARCHAR(300),
  furnitureDescription      VARCHAR(300),
  price                     LONG,
  maximumRoomCount          INTEGER,
  remainingRoomCount        INTEGER,
  discount                  INTEGER,
  reviewNumber              LONG,
  cleaningFee               LONG,
  serviceCharge             LONG,
  lodgingTax                LONG
);
