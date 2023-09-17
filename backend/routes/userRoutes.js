import express from 'express';
const router = express.Router();

import { registerUser,logoutUser, loginUser, getUsers } from '../controllers/userController.js';

router.post('/', registerUser)
router.get('/', getUsers)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router;