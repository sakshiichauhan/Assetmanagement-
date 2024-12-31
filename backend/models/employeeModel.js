import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: [true, "Employee name is required"],
    },
    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      unique: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\+?(\d.*){3,}$/, "Please enter a valid phone number"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: [true, "User ID is required"],
    },
    assets: [
      {
        type: mongoose.Schema.Types.ObjectId, // Array of ObjectIds referencing 'Asset'
        ref: "asset",
        default: [], // Default to an empty array
      },
    ],
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId, // Array of ObjectIds referencing 'Room'
        ref: "asset",
        default: [], // Default to an empty array
      },
    ],
    assetMaintenance: [
      {
        type: mongoose.Schema.Types.ObjectId, // Array of ObjectIds referencing 'AssetMaintenance'
        ref: "assetmaintenance",
        default: [], // Default to an empty array
      },
    ],
    assetReplacement: [
      {
        type: mongoose.Schema.Types.ObjectId, // Array of ObjectIds referencing 'AssetReplacement'
        ref: "assetreplacement",
        default: [], // Default to an empty array
      },
    ],
    requestAssets: [
      {
        type: mongoose.Schema.Types.ObjectId, // Array of ObjectIds referencing 'RequestAssets'
        ref: "requestassets",
        default: [], // Default to an empty array
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    minimize: false, // Ensures empty objects are not removed
  }
);

// Check if the model already exists in mongoose.models before defining it
const employeeModel = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default employeeModel;
