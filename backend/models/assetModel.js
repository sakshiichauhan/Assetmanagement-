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
    Room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'room',
      required: true,
    },
    assignedDate: {
      type: Date,
      default: Date.now,
    },
    returnDate: {
      type: Date,
      default: null,
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
