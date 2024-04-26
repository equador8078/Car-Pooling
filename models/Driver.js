// models/Driver.js

const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  email: String,
  licence: String,
  vehicleName: String,
  vehicleNumber: String,
  city: String
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
