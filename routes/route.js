import express from 'express'
import { signUp, logIn } from '../controllers/authController.js';
const router = express.Router();
router.post('/users/signup', signUp)
router.post('/users/login', logIn)


export default router;