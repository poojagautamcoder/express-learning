var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.json({title: "subject", message: "this is express js"})
});

router.get('/testing', function(req, res, next) {
    res.render('learn', { title: 'pooja gautam' });
  });

  router.get('/testing/test', function(req, res, next) {
     res.status(500).send({message: "I am a error message"})

  });
module.exports = router;