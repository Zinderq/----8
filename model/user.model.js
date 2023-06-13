var connection = require('../config/config.bd');
var User = function (user) {
    this.Id_user = user.id_user;
    this.User_name = user.user_name;
    this.Second_name = user.second_time;
    this.User_email = user.user_email;
    this.Login = user.login;
    this.Passord = user.password;
};
User.create = function (newUser, result) {
    connection.query("INSERT INTO user set ?", newUser, function (err, res) {
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
User.findById = function (id, result) {
    connection.query("Select * from user where Id_user = ?", id,
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
User.findAll = function (result) {
    connection.query("Select * from user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('user : ', res);
            result(null, res);
        }
    });
};
User.update = function (id, user, result) {
    connection.query("UPDATE user SET ? WHERE Id_user = ?",
        [user, id],
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
User.delete = function (id, result) {
    connection.query("DELETE FROM user WHERE Id_user = ?",
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
module.exports = User;
