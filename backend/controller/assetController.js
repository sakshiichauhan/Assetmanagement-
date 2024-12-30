import Asset from "../models/assetModel.js";

// Register a new asset
export const registerAsset = async (req, res) => {
    try {
        const { name, description, model, serialNumber, condition, assetType,employeeId , assignedToRoom, assignedDate } = req.body;
        const userId = req.id; 
        
        // Validate input
        if (!name || !serialNumber || !assetType) {
            return res.status(400).json({
                message: "Name, Serial Number, and Asset Type are required.",
                success: false,
            });
        }

        // Check if the asset with the same serial number already exists
        let asset = await Asset.findOne({ serialNumber });
        if (asset) {
            return res.status(400).json({
                message: "Asset with the same serial number already exists.",
                success: false,
            });
        }

        // Create the new asset
        asset = await Asset.create({
            name,
            description,
            model,
            serialNumber,
            condition,
            assetType,
            assignedToEmployee: employeeId, // Correct field usage
            assignedToRoom,
            assignedDate,
            createdby: userId, // User creating the asset
        });

        return res.status(201).json({
            message: "Asset registered successfully.",
            asset,
            success: true,
        });
    } catch (error) {
        console.error("Error registering asset:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

// Get all assets assigned to the logged-in user
export const getAllAssets = async (req, res) => {
    try {
        const keyword = req.query.keyword || ""; // Optional search keyword

        const query = { // Correct field usage
            $or: [
                { name: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { model: { $regex: keyword, $options: "i" } },
                { condition: { $regex: keyword, $options: "i" } },
                { assetType: { $regex: keyword, $options: "i" } },
            ],
        };

        // Fetch assets assigned to the logged-in user with optional search keyword
        const assets = await Asset.find(query).populate({
            path: '  assignedToemployee', 
        }).sort({ createdAt: -1
        });


        if (!assets || assets.length === 0) {
            return res.status(404).json({
                message: "No assets found.",
                success: false,
            });
        }

        return res.status(200).json({
            assets,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching assets:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

// Get an asset by ID (can also check if the asset is assigned to the logged-in user)
export const getAssetById = async (req, res) => {
    try {
        const assetId = req.params.id;

        // Fetch the asset by ID and check if it is assigned to the logged-in user
        const asset = await Asset.findOne({assetId }) // Ensuring asset is assigned to logged-in user
           .populate({
            path: 'employees', // Assuming 'assignedToEmployee' and 'assignedToRoom' are populated fields
        });

        if (!asset) {
            return res.status(404).json({
                message: "Asset not found or not assigned to you.",
                success: false,
            });
        }

        return res.status(200).json({
            asset,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching asset by ID:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

// Admin view all assets created by them
export const getAdminAsset = async (req, res) => {
    try {
        const adminId = req.id; // Get the logged-in admin ID

        const assets = await Asset.find({ createdBy: adminId }).populate({
            path: 'employees', 
        });

        if (!assets || assets.length === 0) {
            return res.status(404).json({
                message: "No assets found.",
                success: false,
            });
        }

        return res.status(200).json({
            assets,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching admin assets:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

// Update an asset's details
export const updateAsset = async (req, res) => {
    try {
        const { name, description, model, condition, assignedToRoom, returnDate, assetType } = req.body;
        const adminId = req.id; // Get userId from the request

        // Update data object
        const updateData = { name, description, model, condition, assignedToRoom, returnDate, assetType };
        const asset = await Asset.findOneAndUpdate(
            { _id: req.params.id, assignedToEmployee: adminId }, 
            updateData,
            { new: true }
        );

        if (!asset) {
            return res.status(404).json({
                message: "Asset not found or not assigned to you.",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Asset information updated successfully.",
            asset,
            success: true,
        });
    } catch (error) {
        console.error("Error updating asset:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

// Delete Asset by ID
export const deleteAsset = async (req, res) => {
    try {
        const adminId = req.id; // Get userId from the request

        // Delete the asset if assigned to the logged-in user
        const asset = await Asset.findOneAndDelete({ _id: req.params.id, assignedToEmployee: adminId }); // Changed userId to adminId

        if (!asset) {
            return res.status(404).json({
                message: "Asset not found or not assigned to you.",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Asset deleted successfully.",
            success: true,
        });
    } catch (error) {
        console.error("Error deleting asset:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};
