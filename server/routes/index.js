import express from 'express';
import { getAllInterest } from '../controllers/interest';


const router = express.Router();

router.route('/interest')
  .get(getAllInterest);

export default router;