import express from 'express';
import { deleteHoliday, getHolidays, saveHolidays } from '../controllers/leaveController.js';
const router = express.Router();

router.route('/holiday').get(getHolidays).post(saveHolidays).delete(deleteHoliday);

export default router;