var connection = require('../config/config.bd');
var Category = function (category) {
    this.Id_category = category.id_category;
    this.Category_name = category.category_name;
    this.description_category = category.description_category;
};
Category.create = function (newCategory, result) {
    connection.query("INSERT INTO Category set ?", newCategory, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Category.findById = function (id, result) {
    connection.query("Select * from category where Id_category = ?", id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
};
Category.findAll = function (result) {
    connection.query("Select * from category", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('category : ', res);
            result(null, res);
        }
    });
};
Category.update = function (id, tp, result) {
    connection.query("UPDATE category SET ? WHERE Id_category = ?",
        [tp, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
};
Category.delete = function (id, result) {
    connection.query("DELETE FROM Category WHERE Id_category = ?",
        [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
};
module.exports = Category;
