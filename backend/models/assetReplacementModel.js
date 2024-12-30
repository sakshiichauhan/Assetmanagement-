
import mongoose from 'mongoose';

// Define the schema for Asset Replacement
const assetReplacementSchema = new mongoose.Schema(
  {
    assetId: {
      type: mongoose.Schema.Types.ObjectId,  // Reference to the Asset model
      ref: 'Asset',  // Reference to Asset collection
      required: true,
    },
    employeeInfo: {
      type: mongoose.Schema.Types.ObjectId,  // Reference to the Employee model
      ref: 'Employee',  // Reference to Employee collection
      required: true,
    },
    assetInfo: {
      assetNameDescription: {
        type: String,
        required: true,
      },
      assetType: {
        type: String,
        required: true,
      },
      assetIdSerialNumber: {
        type: String,
        required: true,
      },
      Room: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'room',
        required: true,
      },
      reasonForReplacement: {
        type: String,
        required: true,
      },
    },
    replacementDetails: {
      requestedReplacementAssetNameDescription: {
        type: String,
        required: true,
      },
      requiredSpecifications: {
        type: String,
      },
      priorityLevel: {
        type: String,
        enum: ['High (Urgent)', 'Medium (Important)', 'Low (Routine)'],
        required: true,
      },
    },
    
     
      
    },
  
  { timestamps: true }
);


// Create the model for asset replacement
const assetReplacementModel = mongoose.model.assetReplacementModel || mongoose.model('assetreplacement', assetReplacementSchema);

export default assetReplacementModel;
