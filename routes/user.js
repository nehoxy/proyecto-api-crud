const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/users', userController.getAllUsers);

router.post('/users', userController.createUser);

router.put('/users/:id', userController.updateUsers)

router.delete('/users/:id', userController.deleteUser)

module.exports = router;