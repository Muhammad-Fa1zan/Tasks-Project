import {  createTodo, deleteTodo,  getTodos, updateTodo } from "../Controllers/Task.js";
import express from 'express';
import { protect } from "../Middlewares/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.post('/task', protect, createTodo);
taskRouter.get('/task', protect, getTodos);
taskRouter.put('/task/:id', protect, updateTodo);
taskRouter.delete('/task/:id', protect, deleteTodo);
export default taskRouter;