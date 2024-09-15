const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());



//_________________Get all users___________________
app.get('/users', (req, res) => 
{
    controller.getUsers( (req, res, next) => 
    {
        res.send();
    });
});
//__________________________________________________


//____________________Add user_____________________
app.post('/user', (req, res) =>{
    controller.addUser( req.body, (callback) => 
    {
        res.send();
    });
});
//__________________________________________________


//___________________Update user____________________
app.put('/Updateuser', (req, res) => 
{
    controller.updateUser(req.body, (callback) =>
    {
        res.send();
    })
})
//__________________________________________________


//____________________Delete user___________________
app.delete('/deleteuser', (req, res) =>
{
    controller.deleteUser(req.body, (callback) =>
    {
        res.send();
    })
})
//__________________________________________________

//____________________Find user_____________________
app.post('/finduser', (req, res) =>
{
    controller.finduser(req.body, (callback) =>
    {
        res.send();
    })
})
//__________________________________________________
module.exports = app;