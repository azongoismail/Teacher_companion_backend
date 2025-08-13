import express from 'express'
import { signUp, logIn, get } from '../controllers/authController.js';
const router = express.Router();
router.post('/users/signup', signUp)
router.post('/users/login', logIn)
router.get('/', get)


export default router;