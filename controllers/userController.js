const mongoose = require('mongoose');
const User = require('../models/userModel');

const createUser = async (req, res) => {
  const { firstname, lastname, email, country, phoneNumber, position } =
    req.body;

  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      country,
      phoneNumber,
      position,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid Id provided' });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: 'There is no User with that Id' });
  }
  res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};
