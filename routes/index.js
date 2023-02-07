var express = require("express");
var router = express.Router();
const usersRouter = require("./users.js");

router.use("/users", usersRouter);

router.get("/", function (req, res, next) {
  res.render("index", { title: "hello world" });
});

module.exports = router;
