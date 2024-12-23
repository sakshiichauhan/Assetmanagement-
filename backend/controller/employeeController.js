import  employeeModel  from "../models/employeeModel.js"; // Import employee model
import { getISTDateTime } from '../utils/timezone.js';  // Import the IST conversion function

// Register new employee
export const registerEmployee = async (req, res) => {
    try {
        const { employeeName, employeeId, department, jobTitle, email, phone } = req.body;
    

        // Validate required fields
        if (!employeeName || !employeeId || !department || !jobTitle || !email || !phone) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        // Check if the employee already exists
        let employee = await employeeModel.findOne({ employeeId });
        if (employee) {
            return res.status(400).json({
                message: "Employee already exists.",
                success: false
            });
        }

        // Get current date in IST
        const currentDateIST = getISTDateTime();  // Use the utility function to get the current date-time in IST

        // Create a new employee record
        employee = await employeeModel.create({
            employeeName,
            employeeId,
            department,
            jobTitle,
            email,
            phone,
            userId: req.id,  // Assuming the logged-in user ID is available in req.id
            createdAt: currentDateIST,  // Store the date in IST
            updatedAt: currentDateIST   // Store the date in IST
        });

        return res.status(201).json({
            message: "Employee registered successfully.",
            employee,
            success: true
        });

    } catch (error) {
        console.log(error);  // Log error for debugging
        res.status(500).json({
            message: "Server error.",
            success: false
        });
    }
}

// Get all employees of a logged-in user
export const getEmployees = async (req, res) => {
    try {
        const userId = req.id;  // Logged-in user ID
        const employees = await employeeModel.find({ userId });

        if (!employees || employees.length === 0) {
            return res.status(404).json({
                message: "No employees found.",
                success: false
            });
        }

        return res.status(200).json({
            employees,
            success: true
        });

    } catch (error) {
        console.log(error);  // Log error for debugging
        res.status(500).json({
            message: "Server error.",
            success: false
        });
    }
}

// Get employee by ID
export const getEmployeeById = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await employeeModel.findById(employeeId);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found.",
                success: false
            });
        }

        return res.status(200).json({
            employee,
            success: true
        });

    } catch (error) {
        console.log(error);  // Log error for debugging
        res.status(500).json({
            message: "Server error.",
            success: false
        });
    }
}

// Update employee information
export const updateEmployee = async (req, res) => {
    try {
        const { employeeName, department, jobTitle, email, phone } = req.body;

        const updateData = { employeeName, department, jobTitle, email, phone };

        // Get current date in IST for updatedAt
        const updatedDateIST = getISTDateTime();  // Use the utility function to get the current date-time in IST
        updateData.updatedAt = updatedDateIST;

        const employee = await employeeModel.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Employee information updated successfully.",
            employee,
            success: true
        });

    } catch (error) {
        console.log(error);  // Log error for debugging
        res.status(500).json({
            message: "Server error.",
            success: false
        });
    }
}

// Delete employee
export const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await employeeModel.findByIdAndDelete(employeeId);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Employee deleted successfully.",
            success: true
        });

    } catch (error) {
        console.log(error);  // Log error for debugging
        res.status(500).json({
            message: "Server error.",
            success: false
        });
    }
}
