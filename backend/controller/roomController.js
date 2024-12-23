import roomModel from '../models/roomModel.js';

// Create new room
export const createRoom = async (req, res) => {
  try {
    const { roomName, roomId } = req.body;
    const room = new roomModel({
      roomId,
      roomName
    })
    await room.save();
    res.status(201).json({
        message : "newRoom created"
    });  // Return the created room
  } catch (error) {
    res.status(500).json({ message: 'Failed to create room' });
  }
};

// Get all rooms
export const getRooms = async (req, res) => {
  try {
    const room = await roomModel.find();  // Get all rooms from the database
    res.status(200).json({
        message: "success"
  });  // Return the list of rooms
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms' });
  }
};

// Get room by ID
export const getRoomById = async (req, res) => {
  try {
    const rooms = await roomModel.findById(req.params.id);  // Find room by ID
    if (!rooms) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(rooms);  // Return the found room
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch room' });
  }
};

// Update room by ID
export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await roomModel.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }  // Return the updated room
    );
    if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(updatedRoom);  // Return the updated room
  } catch (error) {
    res.status(500).json({ message: 'Failed to update room' });
  }
};

// Delete room by ID
export const deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await roomModel.findByIdAndDelete(req.params.id);  // Delete room by ID
    if (!deletedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json({ message: 'Room deleted successfully' });  // Return success message
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete room' });
  }
};
