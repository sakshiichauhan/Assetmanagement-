import express from 'express';
import {
    registerEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} from '../controller/employeeController.js';
import  Authenticated  from '../middleware/authMiddleware.js'; // Import authentication middleware

const employeeRouter = express.Router();

employeeRouter.post('/register-employee', Authenticated, registerEmployee); // Apply authenticate middleware
employeeRouter.get('/get-employee', Authenticated, getEmployees); // Apply authenticate middleware
employeeRouter.get('/get-employee/:id', Authenticated, getEmployeeById); // Apply authenticate middleware
employeeRouter.put('/update-employee/:id', Authenticated, updateEmployee); // Apply authenticate middleware
employeeRouter.delete('/delete-employee/:id', Authenticated, deleteEmployee); // Apply authenticate middleware

export default employeeRouter;
