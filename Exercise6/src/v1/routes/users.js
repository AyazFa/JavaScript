var express = require('express');
var router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getUser);

router.post('/', userController.createUser);

router.patch('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

module.exports = router;
