const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/users',controller.getUsers);
router.post('/user',controller.addUser);
router.put('/Updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);
router.post('/finduser',controller.finduser);

router.post('/addemployee',controller.addEmployee);

module.exports = router;