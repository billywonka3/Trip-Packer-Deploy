const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const householdSchema = new Schema({
  name: String,
});

const Household = mongoose.model('Household', householdSchema);

module.exports = Household;