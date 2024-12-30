import mongoose from "mongoose";

const roomSchema = new mongoose.Schema( 
  {
    roomName: { 
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true, 
      }
);

const roomModel = mongoose.model.roomModel || mongoose.model('room', roomSchema);

export default roomModel;