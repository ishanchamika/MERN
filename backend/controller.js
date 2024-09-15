const { response } = require('./app');
const User = require('./model');

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
const addUser = (req, res, next) => 
{

        const user = new User({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
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
const finduser = (req, res, next) =>
    {
        const email =  req.body.username;
        const password = req.body.password;
        User.findOne({email:email})
            .then(response => {
                if(response)
                {
                    if(response.password == password)
                    {
                        res.json({message: 'success'});
                    }
                    else
                    {
                        res.json({message: 'password does not match'});
                    }
                }
                else
                {
                    res.json({message: 'User not found'});
                }
            })
            .catch(error => {
                res.json({error});
            });
    }


exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.finduser = finduser;