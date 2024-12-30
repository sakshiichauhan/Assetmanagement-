import express from 'express';
import { register, login, logout } from '../controller/userController.js'; // Adjust the path as necessary


const userRouter = express.Router();

// Register route
userRouter.post('/userregister', register);

// Login route
userRouter.post('/userlogin', login);

// Logout route
userRouter.post('/userlogout', logout);

export default userRouter;
