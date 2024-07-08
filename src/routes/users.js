const express = require('express');

const userController = require('../controller/users')

const router = express.Router();

// read users
router.get('/getdata', userController.getAllUsers)

// create users
router.post('/createdata', userController.createUsers)

// update users
router.patch('/updatedata/:id', userController.updateUsers)

// delete users
router.delete('/deletedata/:id', userController.deleteUsers)

module.exports = router;