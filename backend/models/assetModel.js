import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    condition: {
      type: String,
      enum: ['new', 'used', 'refurbished'],
      required: true,
    },
    assetType: {
      type: String,
      enum: ['hardware', 'furniture', 'other'],
      required: true,
    },
    assignedToemployee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employeeId', // Reference to the User schema for employees
      default: null,
    },
    assignedRoomname: {
      type: String,
      required: null,
    },
    assignedDate: {
      type: Date,
      default: Date.now,
    },
    returnDate: {
      type: Date,
      default: null,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    minimize: false,
  }
);

// Check if the model already exists in mongoose.models before defining it
const Asset = mongoose.models.Asset || mongoose.model("Asset", assetSchema);

export default Asset;
