import mongoose from "mongoose";

const roomSchema = new mongoose.Schema( 
  {
    roomName: { 
      type: String, 
      required: true 
    },
    Assetname: {
          type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds referencing 'AssetReplacement'
          ref: 'Asset',
          default: [], // Default to an empty array if no asset replacements are associated
        },

  },
  {
    timestamps: true, 
      }
);

const roomModel = mongoose.model.roomModel || mongoose.model('room', roomSchema);

export default roomModel;