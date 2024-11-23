import mongoose, { Schema, Document } from 'mongoose';

// Define the schema for the Course model
const courseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    whatYouWillLearn: {
      type: [String], // Array of strings, each item representing a learning point
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming each course has an instructor linked to a User model
      required: true,
    },
    duration: {
      type: Number, // Duration in hours or minutes
      required: true,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    category: {
      type: String, // Category of the course (e.g., "Development", "Design")
      required: true,
    },
    price: {
      type: Number, // Price of the course, could be free or paid
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    studentsEnrolled: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Users who have enrolled in the course
    }],
    reviews: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number, required: true },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now }
    }]
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the Course model
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;
