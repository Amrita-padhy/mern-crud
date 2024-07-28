const mongoose = require("mongoose");

const cardschema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    resturantName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Card = mongoose.model("Card", cardschema);

module.exports = Card;
