import DB from "../models/database";
import User from '../models/user';
import "dotenv/config";

const data = [
  {
  first_name: 'sMoris',
  last_name: 'obogo',
  email: 'obffffff@jjjjj.com',
  password: 'ooooooooo',
  username: 'wqxcffvgg'
}, 

  {
    first_name: 'sMoris',
    last_name: 'obogo',
    email: 'obffffff@jjjjj.com',
    password: 'ooooooooo',
    username: 'wqxcffvgg'
  }, 
  {
    first_name: 'sMoris',
    last_name: 'obogo',
    email: 'obffffff@jjjjj.com',
    password: 'ooooooooo',
    username: 'wqxcffvgg'
  }, 
  {
    first_name: 'sMoris',
    last_name: 'obogo',
    email: 'obffffff@jjjjj.com',
    password: 'ooooooooo',
    username: 'wqxcffvgg'
  }, 


]

User.collection.drop();
User.create(data).then(()=>{
  DB._disconnect();
});
