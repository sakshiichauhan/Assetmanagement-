import assetAssignmentModel from '../models/assetAssignmentModel.js';

// Create a new asset assignment
export const createAssetAssignment = async (req, res) => {
  const newAssetAssignment = new assetAssignmentModel(req.body);
  try {
    await newAssetAssignment.save();
    res.status(201).json({ msg: 'Asset assignment created successfully'});
  } catch (error) {
    res.status(500).json({ msg: 'Failed to create asset assignment', error: error.message });
  }
};

// Get all asset assignments
export const getAllAssetAssignments = async (req, res) => {
  try {
    const assetAssignments = await assetAssignmentModel.find();
    res.status(200).json({ msg: 'Asset assignments fetched successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch asset assignments', error: error.message });
  }
};

// Get an asset assignment by ID
export const getAssetAssignmentById = async (req, res) => {
  try {
    const assetAssignment = await assetAssignmentModel.findById(req.params.id);
    if (!assetAssignment) return res.status(404).json({ msg: 'Asset assignment not found' });
    res.status(200).json({ msg: 'Asset assignment fetched successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch asset assignment', error: error.message });
  }
};

// Update an asset assignment by ID
export const updateAssetAssignment = async (req, res) => {
  try {
    const updatedAssetAssignment = await assetAssignmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAssetAssignment) return res.status(404).json({ msg: 'Asset assignment not found' });
    res.status(200).json({ msg: 'Asset assignment updated successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to update asset assignment', error: error.message });
  }
};

// Delete an asset assignment by ID
export const deleteAssetAssignment = async (req, res) => {
  try {
    const deletedAssetAssignment = await assetAssignmentModel.findByIdAndDelete(req.params.id);
    if (!deletedAssetAssignment) return res.status(404).json({ msg: 'Asset assignment not found' });
    res.status(200).json({ msg: 'Asset assignment deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to delete asset assignment', error: error.message });
  }
}; 
