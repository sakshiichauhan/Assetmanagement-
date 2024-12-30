import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: true,
      match: [/^\+?(\d.*){3,}$/, 'Please enter a valid phone number'],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    maintenanceRequest: {
      type: [mongoose.Schema.Types.ObjectId], // Change to an array of ObjectIds
      ref: 'MaintenanceRequest',
      default: [], // Default value as an empty array
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt automatically
    minimize: false, // Ensures empty objects are not removed
  }
);

// Check if the model already exists in mongoose.models before defining it
const employeeModel =
  mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export default employeeModel;
