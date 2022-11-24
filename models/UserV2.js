const mongoose = require('mongoose');

const UserV2Schema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  region: {
    type: Number
  },
  city: {
    type: Number
  }
}, { timestamps: true });

const UserV2 = mongoose.model('UserV2', UserV2Schema);

module.exports = UserV2