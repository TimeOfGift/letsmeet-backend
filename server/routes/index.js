import express from 'express';
import { getAllInterest } from '../controllers/interest';
import { signup } from '../controllers/auth';
import { signUpValidator } from '../middlewares/userValidation';


const router = express.Router();

router.route('/auth/signup').post(signUpValidator, signup);
router.route('/auth/signin').post(signUpValidator, signup);



router.route('/interest')
  .get(getAllInterest);

export default router;