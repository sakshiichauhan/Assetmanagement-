import assetReplacementModel from '../models/assetReplacementModel.js';

// Create a new asset replacement
export const createAssetReplacement = async (req, res) => {
  const newAssetReplacement = new assetReplacementModel(req.body);
  try {
    await newAssetReplacement.save();
    res.status(201).json({ msg: 'Asset replacement created successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to create asset replacement', error: error.message });
  }
};

// Get all asset replacements
export const getAllAssetReplacements = async (req, res) => {
  try {
    const assetReplacements = await assetReplacementModel.find();
    res.status(200).json({ msg: 'Asset replacements fetched successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch asset replacements', error: error.message });
  }
};

// Get an asset replacement by ID
export const getAssetReplacementById = async (req, res) => {
  try {
    const assetReplacement = await assetReplacementModel.findById(req.params.id);
    if (!assetReplacement) return res.status(404).json({ msg: 'Asset replacement not found' });
    res.status(200).json({ msg: 'Asset replacement fetched successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch asset replacement', error: error.message });
  }
};

// Update an asset replacement by ID
export const updateAssetReplacement = async (req, res) => {
  try {
    const updatedAssetReplacement = await assetReplacementModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAssetReplacement) return res.status(404).json({ msg: 'Asset replacement not found' });
    res.status(200).json({ msg: 'Asset replacement updated successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to update asset replacement', error: error.message });
  }
};

// Delete an asset replacement by ID
export const deleteAssetReplacement = async (req, res) => {
  try {
    const deletedAssetReplacement = await assetReplacementModel.findByIdAndDelete(req.params.id);
    if (!deletedAssetReplacement) return res.status(404).json({ msg: 'Asset replacement not found' });
    res.status(200).json({ msg: 'Asset replacement deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to delete asset replacement', error: error.message });
  }
};
