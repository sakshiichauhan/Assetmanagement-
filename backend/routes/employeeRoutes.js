import express from "express";
import {
  registerEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
} from "../controller/employeeController.js";
import Authenticated from "../middleware/authMiddleware.js";

const employeerouter = express.Router();

// Route to register a new employee
employeerouter.post("/registeremp", Authenticated,registerEmployee);

// Route to get all employees of the logged-in user
employeerouter.get("/getemp", Authenticated,getEmployees);

// Route to get an employee by ID
employeerouter.get("/getemp/:id", Authenticated,getEmployeeById);

// Route to update an employee's information
employeerouter.put("/update/:id", Authenticated,updateEmployee);

export default employeerouter;
