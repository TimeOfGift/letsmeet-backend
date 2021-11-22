import DB from "../models/database";
import User from '../models/user';
import Interest from '../models/interest';

import "dotenv/config";

const userData = [
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


const interestData =[
  {
    name: 'swimming',
    isSelected: false,
  },
  {
    name: 'football',
    isSelected: false,
  },
  {
    name: 'dancing',
    isSelected: false,
  },
  {
    name: 'cats',
    isSelected: false,
  },
  {
    name: 'pets',
    isSelected: false,
  },
  {
    name: 'amusement',
    isSelected: false,
  },
  {
    name: 'swimming',
    isSelected: false,
  },
  {
    name: 'football',
    isSelected: false,
  },
  {
    name: 'dancing',
    isSelected: false,
  },
  {
    name: 'cats',
    isSelected: false,
  },
  {
    name: 'pets',
    isSelected: false,
  },
  {
    name: 'amusement',
    isSelected: false,
  },
  {
    name: 'movies',
    isSelected: false,
  },
  {
    name: 'zoo',
    isSelected: false,
  },
  {
    name: 'dancing',
    isSelected: false,
  },
  {
    name: 'cats',
    isSelected: false,
  },
  {
    name: 'pets',
    isSelected: false,
  },
  {
    name: 'amusement',
    isSelected: false,
  },
];


User.collection.drop();
Interest.collection.drop();


Promise.all([User.create(userData), Interest.create(interestData)]).then(() => {
  DB._disconnect();
});

