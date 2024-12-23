import express from 'express';
import {
    createRequest,
    updateRequestStatus,
    fetchRequestsByEmployee,
    fetchRequestsByStatus,
    deleteRequest
} from '../controller/assetrequestController.js';  
const assetrequestRouter = express.Router();
assetrequestRouter.post('/create-requests', createRequest);
assetrequestRouter.put('/update-requests/:id/status', updateRequestStatus);
assetrequestRouter.get('/fetch-requests/employee/:employeeId', fetchRequestsByEmployee);
assetrequestRouter.get('/requests/status/:status', fetchRequestsByStatus);
assetrequestRouter.delete('/delete-requests/:id', deleteRequest);

export default assetrequestRouter;
