const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pickerSchema = new schema({
    // pickerId: String,
    pickerName: String,
    pickerAge: Number,
    pickerAddress: String,
    pickerPhone: String,
    pickerAccount: String,
});

const Picker = mongoose.model('Picker', pickerSchema);
module.exports = {Picker};