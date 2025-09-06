import express from 'express';
import { getProfile, loginUser, userRegister } from '../Controllers/Auth.js';
import { validateRegister } from '../Middlewares/validator.register.js';
import { validateLogin } from '../Middlewares/validator.login.js';
import { protect } from '../Middlewares/authMiddleware.js';


const userRouter = express.Router();
userRouter.post('/register', validateRegister, userRegister);
userRouter.post('/login', validateLogin, loginUser);
userRouter.get('/profile', protect, getProfile);

export default userRouter;