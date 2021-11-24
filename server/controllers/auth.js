// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();
export const signup = (req, res)=> {
  const {
    first_name,
    last_name,
    email,
    password,
    username
  } = req.body;
   
  return User.findOne({ email }).then(registeredUser => {
    if (registeredUser){
      return res.json({
        status: 'error',
        message: 'User already signup'
      })
    }
    User.create({
      first_name,
      last_name,
      email,
      password,
      username
    }).then(user => {
      res.json({
        status: 'success',
        message: 'Successfully create account with Eventmeet',
        data: user
      }).status(201)
    }).catch(e => {
      res.json({
        status: 'error',
        message: e,
      })

    })


  }).catch(e => {
    res.json({
      status: 'error',
      message: e,
    })

  });
}

