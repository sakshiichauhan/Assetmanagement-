import express from 'express';
import {
    createMaintenanceRecord,
    getMaintenanceRecordsByAsset,
    updateMaintenanceRecord,
    deleteMaintenanceRecord,
    getAllMaintenanceRecords
} from '../controller/assetmaintainController.js'; // Adjust path as needed

const assetmaintainRouter = express.Router();


assetmaintainRouter.post('/creats-maintenance', createMaintenanceRecord);


assetmaintainRouter.get('/get-maintenance/asset/:assetID', getMaintenanceRecordsByAsset);


assetmaintainRouter.put('/update-maintenance/:id', updateMaintenanceRecord);


assetmaintainRouter.delete('/delete-maintenance/:id', deleteMaintenanceRecord);


assetmaintainRouter.get('/g-maintenance', getAllMaintenanceRecords);

export default assetmaintainRouter;
