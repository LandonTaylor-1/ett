const mongoose = require('mongoose');

let pesLeftSchema = new mongoose.Schema({
    location: String,
    color: String,
    level: String
});

let PesLeft = mongoose.model('PesLeft', pesLeftSchema);

module.exports = PesLeft;