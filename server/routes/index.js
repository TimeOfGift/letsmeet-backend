import express from 'express';
import { createInterest, getAllInterest, interest } from '../controllers/interest';
import { signup, signIn } from '../controllers/auth';
import { event, updateEvent, deleteEvent } from '../controllers/event';
import { signUpValidator, signInValidator, eventValidator, updateEventValidator } from '../middlewares/userValidation';
import authToken from '../middlewares/authToken';
import { getUser } from '../middlewares/middleware.user';



const router = express.Router();

  router.route('/auth/signup').post(
  signUpValidator,
  getUser('validate'),
  signup
);

router.route('/auth/signin').post(
  getUser('authenticate'),
  signInValidator,
  signIn
);

//  user interest
router.route('/user/interest').post(
  authToken,
  getUser('authenticate'),
  createInterest
);

router.route('/user/interest/').get(
  authToken,
  getUser('authenticate'),
  getAllInterest
);

router.route('/user/interest/:interestId').delete(
  authToken,
  getUser('authenticate'),
  interest
);

//  user event
router.route('/user/event').post(
  authToken,
  getUser('authenticate'),
  eventValidator,
  event
);

router.route('/user/event/:eventId').put(
  authToken,
  getUser('authenticate'),
  updateEventValidator,
  updateEvent
);

router.route('/user/event/:eventId').delete(
  authToken,
  getUser('authenticate'),
  deleteEvent
);

export default router;