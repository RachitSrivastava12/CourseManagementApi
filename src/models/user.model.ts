import mongoose, { Schema, Document } from 'mongoose';

// Define the schema for the User model
const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    googleid: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    watching: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video', // Replace 'Video' with the actual model name you want to reference
    }],
    role: {
      type: String,
      enum: ['admin', 'user', 'moderator'],  // Example roles, adjust as needed
      default: 'user',
    },
    verificationToken: {
      type: String,
    },
    verificationExpire: {
      type: Date,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpire: {
      type: Date,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
