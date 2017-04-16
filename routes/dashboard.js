var express = require('express');
var router = express.Router();

var books = {
    one: {
        title: "Harry Potter et les reliques de la mort",
        author: "J.K Rowling"
    },
    two: {
        title: "Harry Potter et les reliques de la mort",
        author: "Some other book faggot"
    },
    three: {
        title: "ANTICONSTITUTION DE LA MAUDITE ILE DE LLIAMGOCHGOCHSAMSIAMLLIGOCH",
        author: "Herman Melville"
    },
    four: {
        title: "Moby Dick",
        author: "Herman Melville"
    },
    five: {
        title: "Moby Dick",
        author: "Herman Melville"
    },
    six: {
        title: "Moby Dick",
        author: "Herman Melville"
    },
    onee: {
        title: "Harry Potter et les reliques de la mort",
        author: "J.K Rowling"
    },
    twoe: {
        title: "Harry Potter et les reliques de la mort",
        author: "Some other book faggot"
    },
    threee: {
        title: "Moby Dick",
        author: "Herman Melville"
    },
    foure: {
        title: "Moby Dick",
        author: "Herman Melville"
    },
    fivee: {
        title: "Moby Dick",
        author: "Herman Melville"
    },
    sixe: {
        title: "Moby Dick",
        author: "Herman Melville"
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', {
      title: "dBooks",
      book: books
    });
});

module.exports = router;
