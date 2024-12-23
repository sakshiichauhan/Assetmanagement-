import express from 'express';
import {
  createAssetReplacement,
  getAllAssetReplacements,
  getAssetReplacementById,
  updateAssetReplacement,
  deleteAssetReplacement,
} from '../controller/assetreplacementController.js';

const assetreplacementRouter = express.Router();
assetreplacementRouter.post('/create-assetreplacement', createAssetReplacement);
assetreplacementRouter.get('/get-assetreplacement', getAllAssetReplacements);
assetreplacementRouter.get('/getasset/:id', getAssetReplacementById);
assetreplacementRouter.put('/update-asset/:id', updateAssetReplacement);
assetreplacementRouter.delete('/delete-asset/:id', deleteAssetReplacement);

export default assetreplacementRouter;
