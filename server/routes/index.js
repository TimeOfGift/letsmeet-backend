import express from 'express';
import { getAllInterest } from '../controllers/interest';
import { signup, signIn } from '../controllers/auth';
import { signUpValidator, signInValidator } from '../middlewares/userValidation';
import authToken from '../middlewares/authToken';
import { getUser } from '../middlewares/middleware.user';
// import interest from '../models/interest';



const router = express.Router();

router.route('/auth/signup').post(signUpValidator, getUser('validate'), signup);
router.route('/auth/signin').post(
  signInValidator,
  getUser('authenticate'), 
  signIn
  );

  //  user interest
router.route('/user/interest').get(
  authToken,
  getUser('authenticate'), 
  getAllInterest
  );

export default router;