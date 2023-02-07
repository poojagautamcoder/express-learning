const { usersModel } = require("../models/index.js");

const adduser = async (req, res) => {
  try {
    const data = new usersModel(req.body);
    const result = await data.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await usersModel.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getoneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await usersModel.findById(id);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await usersModel.findByIdAndDelete(id);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await usersModel.findByIdAndUpdate(id, req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adduser,
  getAllUser,
  getoneUser,
  deleteUser,
  updateUser,
};
