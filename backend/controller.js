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
            id: req.body.id,
            name: req.body.name
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



exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
// exports.getUserById = getUserById; 