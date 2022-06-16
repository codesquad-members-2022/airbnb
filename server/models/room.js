const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        roomId: {type: Number, required: true, unique: true}, 
        name: {type: String},
        address: {type: String},
        imgSrc: {type: String},
        maxPersonnel: {type: Number, required: true},
        price: {type: Number, required: true},
        cleaningCostRatio: {type: Number},
        serviceCostRatio: {type: Number},
        taxRatio: {type: Number},
        alreadyReserved: {type: Array, required: true},
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
    }
);

roomSchema.statics.filterByLatLng = function(db = this, minLat, minLng, maxLat, maxLng) {
    return db.find({"lat": {$gte: +minLat, $lte: +maxLat}, "lng": {$gte: +minLng, $lte: +maxLng}});
}

roomSchema.statics.filterByPrice = function(db = this, minPrice, maxPrice) {
    return db.find({"price": {$gte: +minPrice, $lte: +maxPrice}});
}

roomSchema.statics.filterByPersonnel = function(db = this, targetPersonnel) {
    return db.find({"maxPersonnel": {$gte: +targetPersonnel}});
}

module.exports = mongoose.model("Room", roomSchema);