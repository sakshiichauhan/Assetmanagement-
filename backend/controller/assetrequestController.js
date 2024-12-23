import requestAssetModel from '../models/assetRequestModel.js';

// Function to create a new asset request
export const createRequest = async (req, res) => {
    try {
        const requestAssets = new requestAssetModel(req.body); // Use request body data directly
        await requestAssets.save();
        res.status(201).json({
            message: "newRequest created"
    });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create request' });
    }
};

// Function to update request status
export const updateRequestStatus = async (req, res) => {
    const { id } = req.params;
    const { requestAssets } = req.body;

    try {
        const updatedRequest = await assetRequestModel.findByIdAndUpdate(id, { requestStatus }, { new: true });
        if (!updatedRequest) {
            return res.status(404).json({ error: 'Request not found' });
        }
        res.status(200).json(updatedRequest);
    } catch {
        res.status(500).json({ error: 'Failed to update request status' });
    }
};

// Function to fetch all requests by employee ID
export const fetchRequestsByEmployee = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const requestAssets = await assetRequestModel.find({ employeeID: employeeId });
        res.status(200).json(requests);
    } catch {
        res.status(500).json({ error: 'Failed to fetch requests' });
    }
};

// Function to fetch all requests by status
export const fetchRequestsByStatus = async (req, res) => {
    const { status } = req.params;

    try {
        const requestAssets = await assetRequestModel.find({ requestStatus: status });
        res.status(200).json(requests);
    } catch {
        res.status(500).json({ error: 'Failed to fetch requests by status' });
    }
};

// Function to delete a request
export const deleteRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRequest = await assetRequestModel.findByIdAndDelete(id);
        if (!deletedRequest) {
            return res.status(404).json({ error: 'Request not found' });
        }
        res.status(204).send(); // No content status after successful delete
    } catch {
        res.status(500).json({ error: 'Failed to delete request' });
    }
};
