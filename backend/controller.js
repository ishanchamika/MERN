const { response } = require('./app');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const User = require('./model');
// const Employee = require('./model');
const { User, Employee } = require('./model');

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
                const token = jwt.sign({userId: userdata._id}, 'ishan789', {expiresIn: '1m'});
                res.json({token: token});
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
        const data =await Employee.find();
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
// ====================================================================================================================================
exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.finduser = finduser;
exports.addEmployee = addEmployee;
exports.getEmployees = getEmployees;