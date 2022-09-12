// import DB from "../models/database.js";
import DB from '../models/database.js'
import User from '../models/user';
import Interest from '../models/interest';

import "dotenv/config";

const userData = [
  {
  first_name: 'admin',
  last_name: 'admin',
  email: 'admin1@eventmeet.com',
  password: '$2b$10$F4iopNtOizZVfgvDOUa4R.7Um5R0os7XVYKgw.GQJUr.WQNRARePW', //aDmin@1password
  username: 'admin1'
}
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


Promise.all([User.create(userData), 
  Interest.create(interestData)])
  .then(() => {
  DB._disconnect();
});

