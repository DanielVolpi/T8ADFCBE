const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const specialistSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Specialist', specialistSchema);
