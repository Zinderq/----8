const Tender = require('../model/tender.model');

exports.findAll = function (req, res) {
    Tender.findAll(function (err, Tender) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(Tender);
    });
};
exports.create = function (req, res) {
    const new_Tender = new Tender(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {
        Tender.create(new_Tender, function (err,tender) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Tender added successfully!", data: tender });
        });
    }
};
exports.findById = function (req, res) {
    Tender.findById(req.params.id, function (err, tender) {
        if (err)
            res.send(err);
        res.json(tender);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Tender.update(req.params.id, new Tender(req.body), function (err, tender) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Tender successfully updated!'});
        });
    }
};
exports.delete = function (req, res) {
   Tender.delete(req.params.id, function (err, tender) {
        console.log("HI"+req.params.id);
        if (err)
                res.send(err);
        res.json({ error: false, message: 'Tender successfully deleted!'});
    });
};

