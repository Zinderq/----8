const User = require('../model/user.model');

exports.findAll = function (req, res) {
    User.findAll(function (err, User) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(User);
    });
};
exports.create = function (req, res) {
    const new_User = new User(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {
        User.create(new_User, function (err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "User added successfully!", data: user });
        });
    }
};
exports.findById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.update(req.params.id, new User(req.body), function (err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'User successfully updated!'});
        });
    }
};
exports.delete = function (req, res) {
    User.delete(req.params.id, function (err, user) {
        console.log("HI"+req.params.id);
        if (err)
                res.send(err);
        res.json({ error: false, message: 'User successfully deleted!'});
    });
};

