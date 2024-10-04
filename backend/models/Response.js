// models/Response.js
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  permission: String,
  dateTime: String,
  dateType: String
});

module.exports = mongoose.model('Response', responseSchema);
