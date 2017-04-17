var express = require('express');
var router = express.Router();
var Handlebars = require("handlebars");

var books = [{title: "Harry Potter à l'école des sorciers",author: "J.K Rowling",url: "http://www.encyclopedie-hp.org/wp-content/uploads/sites/4/2014/09/couverture_es.jpg"},{title: "Making things happen",author: "Elizabeth Murphy",url: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png"},{title: "Moby-Dick",author: "Herman Melville",url: "http://i.dailymail.co.uk/i/pix/2011/06/15/article-2003632-0C90802A00000578-22_233x351.jpg"},{title: "Harry Potter et la chambre des secrets",author: "J.K Rowling",url: "http://static.fnac-static.com/multimedia/images_produits/ZoomPE/4/9/2/9782070541294/tsp20071011005424/Harry-Potter-et-la-chambre-des-secrets.jpg"},{title: "Sherlock Holmes",author: "Sir Arthur Conan Doyle",url: "https://truebloodaddictdotnet.files.wordpress.com/2015/10/51voy2vgejl.jpg"},{title: "Cagliostro",author: "Vicente Huidobro",url: "https://s-media-cache-ak0.pinimg.com/564x/dc/c7/d0/dcc7d0deee6cde61c04a42bba33fe749.jpg"},{title: "Les aventure de Tintin: Le Trésor de Rackham le Rouge",author: "Hérgé",url: "https://images-na.ssl-images-amazon.com/images/I/A1JjDSaitGL.jpg"},
{title: "Harry Potter à l'école des sorciers",author: "J.K Rowling",url: "http://www.encyclopedie-hp.org/wp-content/uploads/sites/4/2014/09/couverture_es.jpg"},{title: "Making things happen",author: "Elizabeth Murphy",url: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png"},{title: "Moby-Dick",author: "Herman Melville",url: "http://i.dailymail.co.uk/i/pix/2011/06/15/article-2003632-0C90802A00000578-22_233x351.jpg"},{title: "Harry Potter et la chambre des secrets",author: "J.K Rowling",url: "http://static.fnac-static.com/multimedia/images_produits/ZoomPE/4/9/2/9782070541294/tsp20071011005424/Harry-Potter-et-la-chambre-des-secrets.jpg"},{title: "Sherlock Holmes",author: "Sir Arthur Conan Doyle",url: "https://truebloodaddictdotnet.files.wordpress.com/2015/10/51voy2vgejl.jpg"},{title: "Cagliostro",author: "Vicente Huidobro",url: "https://s-media-cache-ak0.pinimg.com/564x/dc/c7/d0/dcc7d0deee6cde61c04a42bba33fe749.jpg"},{title: "Les aventure de Tintin: Le Trésor de Rackham le Rouge",author: "Hérgé",url: "https://images-na.ssl-images-amazon.com/images/I/A1JjDSaitGL.jpg"}];



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dashboard', {
        title: "dBooks",
        book: books
    });
});

module.exports = router;
