import { body } from "express-validator";

export const validateRegister = [
    body('username').trim().notEmpty().withMessage('username is required'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('password').trim().notEmpty().withMessage('password is required')
];
