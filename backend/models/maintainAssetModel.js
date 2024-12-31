import mongoose from "mongoose";

const assetMaintenanceSchema = new mongoose.Schema(
  {
    assetID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asset',
      required: true,
    },
    maintenanceDetails: {
      type: String,
    },
    maintenanceType: {
      type: String,
      required: true,
    },
  },
  { 
    timestamps: true  // Adds createdAt and updatedAt automatically
  }
);

const assetMaintenance = mongoose.model('assetmaintenance', assetMaintenanceSchema);

export default assetMaintenance;
