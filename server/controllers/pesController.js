const Pes = require('../models/pesModel');

exports.create = function create(req,res) {
    let item = {
        position: req.body.position,
        color: req.body.color
    };
    let newPes = new Pes(item)
    newPes.save();
}

exports.list = function list(req,res) {
    Pes.find((e,v)=>{
        return res.json(v);
    });
}