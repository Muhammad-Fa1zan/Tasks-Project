import express from 'express';
import { getProfile, loginUser, UpdatePassword, userRegister } from '../Controllers/Auth.js';
import { validateRegister } from '../Middlewares/validator.register.js';
import { validateLogin } from '../Middlewares/validator.login.js';
import { protect } from '../Middlewares/authMiddleware.js';


const userRouter = express.Router();
userRouter.post('/register', validateRegister, userRegister);
userRouter.post('/login', validateLogin, loginUser);
userRouter.get('/profile', protect, getProfile);
userRouter.put('/password-change', protect, UpdatePassword);

export default userRouter;