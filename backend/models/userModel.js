import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['employee', 'admin'], // role must be either 'employee' or 'admin'
        required: true
    }
},{timestamps:true});

// Create the User model from the schema
const User = mongoose.model.userModel || mongoose.model('User', userSchema);



export default User;
