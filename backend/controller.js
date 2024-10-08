const { response } = require('./app');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User, Employee } = require('./model');
const {check, validationResult} = require('express-validator');
const e = require('express');

// get All Users______________________________
const getUsers = (req, res, next) => 
{
    User.find()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({error});
        });
}

// add USer____________________________________
const addUser =async (req, res, next) => 
{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword
        });
        user.save()
            .then(response => {
                res.json({response});
            })
            .catch(error => {
                res.json({error});
            });
}

// update User_________________________________
const updateUser = (req, res, next) => 
{
    // const id = req.body.id;
    // const name = req.body.name;
    const { id, name } = req.body;
    User.updateOne( {id:id}, {$set: {name:name}})
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({error});
        });
}

// delete User_________________________________
const deleteUser = (req, res, next) =>
{
    const id = req.body.id;
    User.deleteOne({id:id})
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({error});
        });
}

// find a user__________________________________
const finduser = async (req, res, next) =>
{
    const email =  req.body.username;
    const password = req.body.password;
    try {
        const userdata = await User.findOne({email:email});
        if(!userdata)
        {
            res.json({message: "user not found"});
        }
        else
        {
            const hash_pwd = userdata.password;
            const isMatch = await bcrypt.compare(password, hash_pwd);
            if(isMatch)
            {
                // res.json({message: "success"});
                const token = jwt.sign({userId: userdata._id}, 'ishan789', {expiresIn: '5m'});
                res.json({token: token, first_login: "yes"});
            }
            else
            {
                res.json({message: "invalid password"});
            }
        }

    }
    catch(err)
    {
        res.json({message: "network error"});
    }
}


// ===============================================================Employee=============================================================


// add Employee_____________________________________________________
const addEmployee = async (req, res) => 
{
    try
    {
        const employee = new Employee({
            empId: req.body.emp_id,
            empName: req.body.emp_name,
            empDate: req.body.emp_date,
            empWeight: req.body.emp_weight
        }); 
    
        employee.save();
        res.json({success: true});
    }
    catch(err)
    {
        res.json({success: false});
    }
}

// get all Employees________________________________________________
const getEmployees = async (req, res) =>
{
    try{
        const data = await Employee.find();
        if(data.length > 0)
        {
            res.json({data});
        }
        else
        {
            res.json({message: "no data found"});
        } 
    }
    catch(err)
    {
        res.json({message: "network error"});
    }
}
// delete Employee____________________________________________________
const deleteEmployee = async (req, res) =>
{
    const id = req.body.id;
    try
    {
        const result = await Employee.deleteOne({ _id: id});
        if(result.deletedCount === 0)
        {
            res.json({message: "failed"});
        }
        else
        {
            res.json({message: "success"});
        }   
    }
    catch(err)
    {
        res.json({message: "network error"});
    }
}

// update Employee____________________________________________________
const updateEmployee = async (req, res) =>
{
    const idxx = req.body.id;
    const empId = req.body.empID;
    const empName = req.body.empName;
    const empDate = req.body.empDate;
    const empWeight = req.body.empWeight;
    try{
        const response = await Employee.updateOne({_id: idxx}, {$set: {empId: empId, empName: empName, empDate: empDate, empWeight: empWeight}});
        if(response != null)
        {
            res.json({message: response});
        }
        else
        {
            res.json({message: "failed"});
        }
    }
    catch(err)
    {
        res.json({message: "network error"});
    }   
    
}

// find Employee____________________________________________________
const findEmployee = async (req, res) =>
{
    const id = req.body.id;
    try
    {
        const data = await Employee.findOne({_id: id});
        if(data)
        {
            res.json({data});
        }
        else
        {
            res.json({message: "no data found"});
        }  
    }
    catch(err)
    {
        res.json({message: "network error"});
    }
}
// =======================================================ADD PICKER==================================================================
const registerpicker = async (req, res) =>
{
    try
    {
        const {picker_name, picker_address, picker_phone, picker_age, picker_acc} = req.body;

        if(picker_name !== null)
        {
            
        }
    }
    catch (e)
    {
        res.json({message: "network error"});
    }
}

// ====================================================================================================================================
exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.finduser = finduser;
exports.addEmployee = addEmployee;
exports.getEmployees = getEmployees;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;
exports.findEmployee = findEmployee;
exports.registerpicker = registerpicker;