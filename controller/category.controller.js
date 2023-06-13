const Category = require('../model/category.model');

exports.findAll = function (req, res) {
    Category.findAll(function (err, Category) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(Category);
    });
};
exports.create = function (req, res) {
    const new_Category = new Category(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {
        Category.create(new_Category, function (err, category) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Category added successfully!", data: category });
        });
    }
};
exports.findById = function (req, res) {
    Category.findById(req.params.id, function (err, category) {
        if (err)
            res.send(err);
        res.json(category);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Category.update(req.params.id, new Category(req.body), function (err, category) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Category successfully updated!'});
        });
    }
};
exports.delete = function (req, res) {
    Category.delete(req.params.id, function (err, category) {
        console.log("HI"+req.params.id);
        if (err)
                res.send(err);
        res.json({ error: false, message: 'Category successfully deleted!'});
    });
};

