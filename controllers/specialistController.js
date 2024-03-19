const mongoose = require('mongoose');
const Specialist = require('../models/specialistModel');

const createSpecialist = async (req, res) => {
  const { firstname, lastname, position } = req.body;

  try {
    const specialist = await Specialist.create({
      firstname,
      lastname,
      position,
    });
    res.status(200).json(specialist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSpecialists = async (req, res) => {
  const specialists = await Specialist.find({}).sort({ createdAt: -1 });
  res.status(200).json(specialists);
};

const deleteSpecialist = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid Id provided' });
  }

  const specialist = await Specialist.findOneAndDelete({ _id: id });

  if (!specialist) {
    return res
      .status(400)
      .json({ error: 'There is no Specialist with that Id' });
  }
  res.status(200).json(specialist);
};

module.exports = {
  createSpecialist,
  getSpecialists,
  deleteSpecialist,
};
