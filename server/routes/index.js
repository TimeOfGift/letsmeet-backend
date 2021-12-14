import express from 'express';
import { getAllInterest } from '../controllers/interest';
import { signup, signin } from '../controllers/auth';
import { signUpValidator, signInValidator } from '../middlewares/userValidation';


const router = express.Router();

router.route('/auth/signup').post(signUpValidator, signup);
router.route('/auth/signin').post(signInValidator, signin);

router.route('/interest')
  .get(getAllInterest);

export default router;