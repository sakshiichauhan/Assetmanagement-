import express from 'express';
import {
  createAssetAssignment,
  getAllAssetAssignments,
  getAssetAssignmentById,
  updateAssetAssignment,
  deleteAssetAssignment,
} from '../controller/assetassignmentController.js';  

const assignassetRouter = express.Router();
assignassetRouter.post('/create-assetassign', createAssetAssignment);
assignassetRouter.get('/get-assetassign', getAllAssetAssignments);
assignassetRouter.get('/get-asseta/:id', getAssetAssignmentById);
assignassetRouter.put('/update-assetassign:id', updateAssetAssignment);
assignassetRouter.delete('/delete-assetassign/:id', deleteAssetAssignment);

export default assignassetRouter;
