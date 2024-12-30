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
    Asset: {
      type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing 'Asset'
      ref: 'Asset',
      default: [], // Default to an empty array if no assets are associated
    },
    AssetMaintenance: {
      type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing 'AssetMaintenance'
      ref: 'AssetMaintenance',
      default: [], // Default to an empty array if no asset maintenance records are associated
    },
    AssetReplacement: {
      type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing 'AssetReplacement'
      ref: 'assetReplacement',
      default: [], // Default to an empty array if no asset replacements are associated
    },
    requestAsset: {
      type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing 'RequestAssets'
      ref: 'requestAssets',
      default: [], // Default to an empty array if no asset requests are associated
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    minimize: false, // Ensures that empty objects are not removed from the schema
  }
);

// Check if the model already exists in mongoose.models before defining it
const employeeModel =mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export default employeeModel;
