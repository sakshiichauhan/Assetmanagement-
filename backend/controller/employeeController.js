import mongoose from "mongoose";
import employeeModel from "../models/employeeModel.js"; // Import employee model
import assetModel from "../models/assetModel.js"; // Import asset model

// Register a new employee
export const registerEmployee = async (req, res) => {
  try {
    const { employeeName, employeeId, department, jobTitle, email, phone } = req.body;

    // Validate required fields
    if (!employeeName || !employeeId || !department || !jobTitle || !email || !phone) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    // Check if an employee with the same employeeId already exists
    const existingEmployee = await employeeModel.findOne({ employeeId });
    if (existingEmployee) {
      return res.status(400).json({
        message: "An employee with the same ID already exists.",
        success: false,
      });
    }

    // Create the new employee record
    const employee = await employeeModel.create({
      employeeName,
      employeeId,
      department,
      jobTitle,
      email,
      phone,
      userId: req.id, // Assuming `req.id` contains the logged-in user's ID
    });

    return res.status(201).json({
      message: "Employee registered successfully.",
      employee,
      success: true,
    });
  } catch (error) {
    console.error("Error registering employee:", error);
    res.status(500).json({
      message: "Failed to register employee.",
      success: false,
    });
  }
};

// Assign asset to an employee
export const assignAssetToEmployee = async (req, res) => {
  try {
    const { employeeId, assetId } = req.body;

    // Validate employeeId and assetId as valid ObjectIds
    if (!mongoose.Types.ObjectId.isValid(employeeId) || !mongoose.Types.ObjectId.isValid(assetId)) {
      return res.status(400).json({
        message: "Invalid employee or asset ID.",
        success: false,
      });
    }

    // Find the asset and check if it's available
    const asset = await assetModel.findById(assetId);
    if (!asset || asset.status !== "available") {
      return res.status(400).json({
        message: "Asset not available.",
        success: false,
      });
    }

    // Update the asset's status and assign it to the employee
    asset.assignedTo = employeeId;
    asset.status = "assigned";
    await asset.save();

    // Find the employee and update their assigned assets
    const employee = await employeeModel.findById(employeeId);
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found.",
        success: false,
      });
    }
    employee.Asset.push(asset._id); // Update the "Asset" field in the employee model
    await employee.save();

    res.status(200).json({
      message: "Asset assigned successfully.",
      asset,
      success: true,
    });
  } catch (error) {
    console.error("Error assigning asset:", error);
    res.status(500).json({
      message: "Failed to assign asset.",
      success: false,
    });
  }
};

// Get all employees for the logged-in user
export const getEmployees = async (req, res) => {
  try {
    const userId = req.id; // Assuming `req.id` contains the logged-in user's ID

    const employees = await employeeModel.find({ userId });

    if (!employees.length) {
      return res.status(404).json({
        message: "No employees found for the logged-in user.",
        success: false,
      });
    }

    return res.status(200).json({
      employees,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({
      message: "Failed to fetch employees.",
      success: false,
    });
  }
};

// Get an employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id;

    // Validate employeeId as a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      return res.status(400).json({
        message: "Invalid employee ID.",
        success: false,
      });
    }

    const employee = await employeeModel.findById(employeeId);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found.",
        success: false,
      });
    }

    return res.status(200).json({
      employee,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching employee by ID:", error);
    res.status(500).json({
      message: "Failed to fetch employee.",
      success: false,
    });
  }
};

// Update an employee's information
export const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const { employeeName, department, jobTitle, email, phone } = req.body;

    // Validate employeeId as a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      return res.status(400).json({
        message: "Invalid employee ID.",
        success: false,
      });
    }

    // Validate required fields
    if (!employeeName || !department || !jobTitle || !email || !phone) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    // Update the employee record
    const updatedEmployee = await employeeModel.findByIdAndUpdate(
      employeeId,
      { employeeName, department, jobTitle, email, phone },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        message: "Employee not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Employee updated successfully.",
      employee: updatedEmployee,
      success: true,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({
      message: "Failed to update employee.",
      success: false,
    });
  }
};
