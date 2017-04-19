var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/livre/:id', function(req, res, next) {

    var connection = mysql.createConnection({
        host: "192.168.2.65",
        user: "readonly",
        password: "uQgbI7IKaP1gn91n",
        database: "dBooks"
    });

    connection.connect(connection);

    connection.query('SELECT * FROM `Livres` WHERE `ID` = ?', [req.params.id], (err, result, fields) => {
        if(err || !result){
            res.header("404");
            throw err;
        } else {
            console.log("Query Successful!" + result[0].TitreLivre);
        }

        res.render('livre', {
            title: "dBooks",
            TitreLivre: result[0].TitreLivre,
            Annee: result[0].AnneeParution
        });

        connection.end();
        console.log("Connection Ended!");
    });
});

    
module.exports = router;