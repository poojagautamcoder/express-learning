var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:id', function(req, res, next) {
  res.send('respond with a resource' + ' ' + req.params.id + req.query.name + req.body.name);
});



module.exports = router;