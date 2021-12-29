import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import env from 'dotenv';
import User from '../models/user';


env.config();


export const signup = (req, res)=> {
  const {
    first_name,
    last_name,
    email,
    password,
    username
  } = req.body;
  
  const hashedPassword = bcrypt.hashSync(password, 10);
   
  return User.findOne({ email }).then(registeredUser => {
    if (registeredUser){
      return res.json({
        status: 'error',
        message: 'User already signup'
      })
    }
    User.create({ first_name, last_name, email, password:hashedPassword, username }).then(user => {
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

// MONGO_URL=mongodb://localhost:27017/letsmeet

export const signin = (req, res) => {
  const { email, password } = req.body;
  return User.findOne({email}).then(user => {
    if(!user){
        return res.json({
          status: 'Failed',
          message: 'Invalid Email or Password'
        });
    }
    const checkPassword = bcrypt.compareSync(password, user.password)
    if(checkPassword){
      const payload = { email: user.email }
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 10 }); // Expires in 10 hours
      req.token = token;
       res.json({
        status: 'Success',
        message: 'successfull login',
        firstname: user.first_name,
        lastname: user.last_name,
        email: user.email,
        token
      }).status(201);
    }
    return res.status(422)
    .json({
      status: 'Failed',
      message: 'Invalid Email or Passworddddd',
      user
    });
  }).catch(err => res.status(500).json({ status: 'Failed', message: err.message }));
}

