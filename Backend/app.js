import express from 'express';
import taskRouter from './Routes/task.route.js';
import userRouter from './Routes/user.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/user', userRouter);
app.use('/api' , taskRouter);

export default app;