import express from 'express'
import { signUp, logIn, get, logOut } from '../controllers/authController.js';
import {file, getAllFiles} from '../controllers/getController.js';
const router = express.Router();
router.post('/users/signup', signUp)
router.post('/users/login', logIn)
router.get('/', get)
router.get('/users/logout', logOut)
router.get('/files', getAllFiles)
router.get('/files/id', file);


export default router;