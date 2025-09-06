import { body } from "express-validator";

export const validateLogin = [
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('password').trim().notEmpty().withMessage('Password is required')
];
