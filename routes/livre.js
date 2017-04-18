var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/livre/:id', function(req, res, next) {
    res.render('livre', {
        title: "dBooks",
        id: req.params.id
    });
});

module.exports = router;