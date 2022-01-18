const User = require('../model/user')
const mongoose = require('mongoose')
const createError = require("http-errors");
const bcrypt = require("bcryptjs");

const {registerValidation, loginValidation} = require('../validation/user')

//registering user
exports.user_register = async (req, res, next) => {
    //validating user data
    const { valid, error } = registerValidation(req.body);
  
    if (!valid) {
      next(createError(400, error));
      return;
    }
  
    //checking if the user already exsist
  
    try {
      const userExist = await User.findOne({ username: req.body.username });
  
      if (userExist) {
        // res.send({
        //   status: 400,
        //   message: "User already exist"
        // })
        throw createError(400, "Username already exist");
        return;
      }
    }catch (err) {
      next(err);
      return;
    }

    try {
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
      
        //creating new user
        const user = new User({
          name: req.body.name,
          username: req.body.username,
          password: hashedPassword,
        });
        
        await user.save();
        res.send({
            status: 200,
            message: 'User created successfully'
        })

    } catch (err) {
      next(err);
      return;
    }
  };


//login new user
exports.user_login = async (req, res, next) => {
  //validating user data
  const { valid, error } = loginValidation(req.body);

  if (!valid) {
    next(createError(400, error));
    return;
  }

  //checking if the email exsist
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      throw createError(404, "Incorrect Username");
    }


    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      next(createError(400, "Incorrect password"));
      return;
    }

    res.status(200).send({
      status: 200,
      message: "Login Successful"
    })
    
  } catch (error) {
    next(error);
    return;
  }
};