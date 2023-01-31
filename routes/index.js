var express = require('express');
var router = express.Router();
const userRouter = require('./users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title111: 'Express' });
});

router.use('/user', userRouter)


module.exports = router;
