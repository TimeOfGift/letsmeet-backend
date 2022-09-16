import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import env from 'dotenv';
import User from '../models/user';
import { uuid } from 'uuidv4';
env.config();


export const signup = (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    username
  } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  User.findOne({ email }).then(registeredUser => {
    User.create({ user_id: `user-$${uuid()}`, first_name, last_name, email, password: hashedPassword.trim(), username }).then(user => {
      return res.json({
        status: 'success',
        message: 'Successfully create account with Event-meet',
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

export const signIn = async (req, res) => {
  const { email } = req.user;
  await User.findOne({ email }).then(user => {
    const checkPassword = bcrypt.compareSync(req.body.password, user.password);
    if (checkPassword) {
      const payload = { email: user.email }
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 10 }); // Expires in 10 hours
      return res.json({
        status: 'Success',
        message: 'successfully login',
        data: {
          id: user._id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          token
        },
      }).status(200);
    }
    return res.status(422)
      .json({
        status: 'Failed',
        message: 'Invalid Email or Password',
      });
  }).catch(err => res.status(500).json({ status: 'Failed', message: `error signing in user:: ${err.message}` }));
}

