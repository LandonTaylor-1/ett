const PesLeft = require('../models/pesLeftModel');

exports.create = function create(req,res) {
    let item = {
        location: req.body.location,
        color: req.body.color,
        level: req.body.level
    };
    let newPesLeft = new PesLeft(item)
    newPesLeft.save();
}

exports.list = function list(req,res) {
    PesLeft.find((e,v)=>{
        return res.json(v);
    });
}

exports.show = function show(req, res) {
    PesLeft.find((err, v)=>{
        return res.json(v[v.length-1]);
    });
}