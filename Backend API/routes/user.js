const router = require('express').Router();

const userController = require('../controller/user')

router.post('/register', userController.user_register)

router.post('/login', userController.user_login)

module.exports=router