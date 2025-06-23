import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String, // Unique identifier for the user from Clerk
    required: true, // Required field
    unique: true, // Ensure this field is unique
  },
  email: {
    type: String, // User's email address
    required: true, // Required field
    unique: true, // Ensure this field is unique
  },
  photo: {
    type: String, // User's email address
    required: true, // Required field
  },
  firstName: {
    type: String, // User's first name
  },
  lastName: {
    type: String, // User's last name
  },
  creditBalance: {
    type: Number, // User's credit balance
    default: 5,
  },
});
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
