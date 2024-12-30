
import roomModel from "../models/roomModel.js";

// Create a new room
export const createRoom = async (req, res) => {
  try {
    const { roomName } = req.body;
    constUserId = req.userId;
    
    // Validate required fields
    if (!roomName) {
      return res.status(400).json({
        message: "Room name is required.",
        success: false,
      });
    }

    // Create a new room
    const room = await roomModel.create({ roomName });

    return res.status(201).json({
      message: "Room created successfully.",
      room,
      success: true,
    });
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({
      message: "Failed to create room.",
      success: false,
    });
  }
};


// Get all rooms
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await roomModel.find();

    if (!rooms.length) {
      return res.status(404).json({
        message: "No rooms found.",
        success: false,
      });
    }

    return res.status(200).json({
      rooms,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({
      message: "Failed to fetch rooms.",
      success: false,
    });
  }
};

// Get a room by ID
export const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await roomModel.findById(id);

    if (!room) {
      return res.status(404).json({
        message: "Room not found.",
        success: false,
      });
    }

    return res.status(200).json({
      room,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching room:", error);
    res.status(500).json({
      message: "Failed to fetch room.",
      success: false,
    });
  }
};

// Update a room
export const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { roomName } = req.body;

    // Validate required fields
    if (!roomName) {
      return res.status(400).json({
        message: "Room name is required.",
        success: false,
      });
    }

    const updatedRoom = await roomModel.findByIdAndUpdate(
      id,
      { roomName },
      { new: true } // Return the updated document
    );

    if (!updatedRoom) {
      return res.status(404).json({
        message: "Room not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Room updated successfully.",
      room: updatedRoom,
      success: true,
    });
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({
      message: "Failed to update room.",
      success: false,
    });
  }
};

// Delete a room
export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRoom = await roomModel.findByIdAndDelete(id);

    if (!deletedRoom) {
      return res.status(404).json({
        message: "Room not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Room deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({
      message: "Failed to delete room.",
      success: false,
    });
  }
};
