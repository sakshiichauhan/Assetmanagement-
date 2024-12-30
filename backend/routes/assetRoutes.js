import express from "express";
import {
    registerAsset,
    getAllAssets,
    getAssetById,
    getAdminAsset,
    updateAsset,
    deleteAsset,
} from "../controller/assetController.js";
import Authenticated from "../middleware/authMiddleware.js";

const assetrouter = express.Router();

// Route to register a new asset
assetrouter.post("/registerassets",Authenticated, registerAsset);

// Route to get all assets
assetrouter.get("/getassets", Authenticated,getAllAssets);


assetrouter.get("/getassets/:id", Authenticated,getAssetById);

assetrouter.get("/admin/assets", Authenticated, getAdminAsset);

// Route to update an asset
assetrouter.put("/updateassets/:id", Authenticated,updateAsset);

// Route to delete an asset by its ID
assetrouter.delete("/deleteassets/:id", Authenticated,deleteAsset);

export default assetrouter;
