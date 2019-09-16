const mongoose = require('mongoose');

let pesSchema = new mongoose.Schema({
    position: String,
    color: String
});

let Pes = mongoose.model('Pes', pesSchema);

module.exports = Pes;