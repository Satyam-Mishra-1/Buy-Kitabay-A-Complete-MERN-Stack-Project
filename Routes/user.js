import express from 'express'
import { register, users , profile } from '../Controllers/user.js';
import { login } from '../Controllers/user.js';
import { Authenticated } from '../Middleware/auth.js';

const router = express.Router();

router.post('/register',register)

router.post('/login',login)

router.get('/all',users)

router.get('/profile',Authenticated ,profile);

export default router;