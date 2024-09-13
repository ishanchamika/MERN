const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/users',controller.getUsers);
router.post('/user',controller.addUser);
router.put('/Updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);

module.exports = router;