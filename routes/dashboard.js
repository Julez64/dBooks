var express = require('express');
var router = express.Router();

var books = {
    one: {
        title: "Harry Potter à l'école des sorciers",
        author: "J.K Rowling",
        url: "http://www.encyclopedie-hp.org/wp-content/uploads/sites/4/2014/09/couverture_es.jpg"
    },
    two: {
        title: "Making things happen",
        author: "Elizabeth Murphy",
        url: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png"
    },
    three: {
        title: "Moby Dick",
        author: "Herman Melville",
        url: "http://i.dailymail.co.uk/i/pix/2011/06/15/article-2003632-0C90802A00000578-22_233x351.jpg"
    },
    four: {
        title: "Harry Potter et la chambre des secrets",
        author: "J.K Rowling",
        url: "http://static.fnac-static.com/multimedia/images_produits/ZoomPE/4/9/2/9782070541294/tsp20071011005424/Harry-Potter-et-la-chambre-des-secrets.jpg"
    },
    five: {
        title: "Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        url: "http://www.aboutgreatbooks.com/wp-content/uploads/2015/09/the-complete-sherlock-holmes-sherlock-holmes-books-679x1024.jpg"
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', {
      title: "dBooks",
      book: books
    });
});

module.exports = router;
