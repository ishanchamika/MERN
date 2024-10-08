const express = require('express');
const router = express.Router();
const controller = require('./controller');
const picker = require('./CONTROLLER/CPicker');


router.get('/users',controller.getUsers);
router.post('/user',controller.addUser);
router.put('/Updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);
router.post('/finduser',controller.finduser);

router.post('/addemployee',controller.addEmployee);
router.get('/getemployees',controller.getEmployees);
router.post('/deleteemployee', controller.deleteEmployee);
router.put('/updateemployee', controller.updateEmployee);
router.post('/findemployee', controller.findEmployee);

router.post('/registerpicker', picker.registerPicker);

module.exports = router;