const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get("/", (req, res) => {
    pipe(filterByLatLng, filterByPrice, filterByPersonnel)({queries: req.query}).db
        .then((rooms) => {
            res.send(`${rooms}`);
        })
        .catch(err => res.status(500).send(err));
});

const filterByLatLng = ({queries, db}) => {
    const minLat = queries.minLat || -90;
    const maxLat = queries.maxLat || 90;
    const minLng = queries.minLng || -180;
    const maxLng = queries.maxLng || 180;
    return {queries, db: Room.filterByLatLng(db, minLat, minLng, maxLat, maxLng)};
}

const filterByPrice = ({queries, db}) => {
    const minPrice = queries.minPrice || 0;
    const maxPrice = queries.maxPrice || Infinity;
    return {queries, db: Room.filterByPrice(db, minPrice, maxPrice)};
}

const filterByPersonnel = ({queries, db}) => {
    const targetPersonnel = queries.personnel || 0;
    return {queries, db: Room.filterByPersonnel(db, targetPersonnel)};
}

const pipe = (...fns) => {
    return (value) => fns.reduce((acc, fn) => fn(acc), value);
};

module.exports = router;