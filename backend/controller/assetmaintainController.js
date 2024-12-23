import assetMaintenance from '../models/maintainAssetModel.js'; // Adjust path as needed

// Function to create a new asset maintenance record
export const createMaintenanceRecord = async (req, res) => {
    try {
        const maintenanceData = req.body;
        const newMaintenanceRecord = new assetMaintenance(maintenanceData);
        
        await newMaintenanceRecord.save();
        
        res.status(201).json({
            message:" create maintenance record"
        }); // Return the created record
    } catch (error) {
        console.error('Error creating maintenance record:', error);
        res.status(500).json({ error: 'Failed to create maintenance record' });
    }
};

// Function to get all maintenance records for a specific asset
export const getMaintenanceRecordsByAsset = async (req, res) => {
    const { assetID } = req.params; // Get assetID from URL parameters

    try {
        const maintenanceRecords = await assetMaintenance.find({ assetID }).populate('assetID'); // Populate asset details
        
        if (maintenanceRecords.length === 0) {
            return res.status(404).json({ error: 'No maintenance records found for this asset' });
        }
        
        res.status(200).json(maintenanceRecords); // Return the records
    } catch (error) {
        console.error('Error fetching maintenance records:', error);
        res.status(500).json({ error: 'Failed to fetch maintenance records' });
    }
};

// Function to update an existing maintenance record
export const updateMaintenanceRecord = async (req, res) => {
    const { id } = req.params; // Get the maintenance record ID from URL
    const { maintenanceDate, maintenanceDetails, maintenanceType } = req.body; // Data to update

    try {
        const updatedMaintenanceRecord = await assetMaintenance.findByIdAndUpdate(
            id, 
            { maintenanceDate, maintenanceDetails, maintenanceType, updatedAt: Date.now() }, // Update the record
            { new: true } // Return the updated record
        );
        
        if (!updatedMaintenanceRecord) {
            return res.status(404).json({ error: 'Maintenance record not found' });
        }
        
        res.status(200).json(updatedMaintenanceRecord); // Return the updated record
    } catch (error) {
        console.error('Error updating maintenance record:', error);
        res.status(500).json({ error: 'Failed to update maintenance record' });
    }
};

// Function to delete a maintenance record
export const deleteMaintenanceRecord = async (req, res) => {
    const { id } = req.params; // Get the maintenance record ID from URL

    try {
        const deletedMaintenanceRecord = await assetMaintenance.findByIdAndDelete(id);

        if (!deletedMaintenanceRecord) {
            return res.status(404).json({ error: 'Maintenance record not found' });
        }
        
        res.status(204).send(); // Return no content after successful deletion
    } catch (error) {
        console.error('Error deleting maintenance record:', error);
        res.status(500).json({ error: 'Failed to delete maintenance record' });
    }
};

// Function to get all maintenance records (optional, could be useful)
export const getAllMaintenanceRecords = async (req, res) => {
    try {
        const maintenanceRecords = await assetMaintenance.find();
        
        res.status(200).json(maintenanceRecords); // Return all records
    } catch (error) {
        console.error('Error fetching all maintenance records:', error);
        res.status(500).json({ error: 'Failed to fetch maintenance records' });
    }
};
