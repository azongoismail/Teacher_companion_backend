import express from 'express'
import { signUp, logIn, get, logOut } from '../controllers/authController.js';
const router = express.Router();
router.post('/users/signup', signUp)
router.post('/users/login', logIn)
router.get('/', get)
router.get('/users/logout', logOut)


export default router;