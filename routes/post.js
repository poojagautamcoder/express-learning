var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send("UserList")
  });

router.post('/users', function(req, res, next) {
    res.send("create user")
  });

  router.get('/:id', (req, res) =>{
 res.send(`User will get by id ${req.params.id}`)
  })

  module.exports = router;