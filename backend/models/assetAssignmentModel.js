import mongoose from "mongoose";

const assetAssignmentSchema = new mongoose.Schema({
  employeeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee', // Reference to employee collection
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  assetID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'asset', // Reference to asset collection
    required: true,
  },
  assetName: {
    type: String,
    required: true,
  },
  assetCategory: {
    type: String,
    required: true,
  },
  assetCondition: {
    type: String,
    enum: ['New', 'Used', 'Refurbished'],
    required: true,
  },
  assignmentDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  assignedBy: {
    type: String,
    required: true,
  },
  screenStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Returned'],
    default: 'Pending',
  },
});
const assetAssignmentModel = mongoose.model.assetAssignmentModel || mongoose.model("assetAssignement", assetAssignmentSchema);



export default assetAssignmentModel;
