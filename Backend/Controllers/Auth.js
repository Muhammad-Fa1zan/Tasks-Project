import User from "../Models/user.model.js";
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';





export const userRegister = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { username, email, password } = req.body;

        const isUserExisted = await User.findOne({ email });
        if (isUserExisted) {
            return res.status(400).json({ message: 'User already existed' })
        };

        const user = await User.create({ username, email, password });
        const token = jwt.sign({
            userId: user._id,
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
        );

        res.status(201).json({
            userId: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


export const loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({
        userId: user._id,
    },
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
    )
    res.json({ message: 'login successfull', userId: user._id, token });
};

export const UpdatePassword = async (req, res) => {
    const user = await User.findById(req.user);
    const { password } = req.body;
    
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    };
    user.password = password;
    await user.save();
    res.json({ message: 'Password changed successfully' });
   
};

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user).select('-password')
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};