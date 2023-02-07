const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/testdb");
    console.log("connected");
    return db;
  } catch (error) {
    console.log(error, "========");
  }
};

module.exports = dbConnection;
