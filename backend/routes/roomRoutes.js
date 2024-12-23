import express from 'express';
import { createRoom, getRooms, getRoomById, updateRoom, deleteRoom } from '../controller/roomController.js';

const roomRouter = express.Router();
roomRouter .post("/create-rooms", createRoom);
roomRouter .get("/get-rooms", getRooms);
roomRouter .get("/get-rooms/:id", getRoomById);
roomRouter .put("/update-rooms/:id", updateRoom);
roomRouter .delete("/delete-rooms/:id", deleteRoom);

export default roomRouter;
