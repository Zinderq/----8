var connection = require('../config/config.bd');
var Tender = function (tender) {
    this.Id_tender = tender.id_Tender;
    this.Tender_name = tender.type;
    this.Description = tender.description;
    this.Start_date = tender.start_date;
    this.End_date = tender.end_date;
    this.Location = tender.location;
};
Tender.create = function (newTender, result) {
    connection.query("INSERT INTO tender set ?", newTender, function (err, res) {
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
Tender.findById = function (id, result) {
    connection.query("Select * from tender where Id_tender = ?", id,
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
Tender.findAll = function (result) {
    connection.query("Select * from tender", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tender : ', res);
            result(null, res);
        }
    });
};
Tender.update = function (id, shp, result) {
    connection.query("UPDATE tender SET ? WHERE Id_tender = ?",
        [shp, id],
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
Tender.delete = function (id, result) {
    connection.query("DELETE FROM tender WHERE Id_tender = ?",
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
module.exports = Tender;
