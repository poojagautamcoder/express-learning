const express = require("express");
const router = express.Router();
const {
  adduser,
  getAllUser,
  getoneUser,
  deleteUser,
  updateUser,
} = require("../controlers/user.controlers.js");

router.get("/", getAllUser);
router.get("/:id", getoneUser);
router.post("/", adduser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
