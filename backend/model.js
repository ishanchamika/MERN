const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const  employeeSchema = new Schema({
    empId: String,
    empDate: String,
    empName: String,
    empWeight: Number,
});

const User = mongoose.model('User', userSchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = 
{
    User,
    Employee
}