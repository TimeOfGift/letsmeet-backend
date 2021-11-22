// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../models/database';

dotenv.config();

const signup = (req, res)=> {
  const {
    first_name,
    last_name,
    email,
    password,
    username
  } = req.body;

  db.create({
    first_name,
    last_name,
    email,
    password,
    username
  })
  

}

