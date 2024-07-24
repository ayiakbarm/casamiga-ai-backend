import * as mongoose from "mongoose";

interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}
// Define the schema for the User model
const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      unique: true, // Ensure the username is unique
      required: true, // The username field is required
    },
    email: {
      type: String,
      required: true, // The email field is required
      // You might want to add more validation for email
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    toJSON: {
      // Transform the output when converting to JSON
      transform: function (doc, ret) {
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Create and export the User model based on the schema
const User = mongoose.model<UserDocument>("User", userSchema);
export default User;
