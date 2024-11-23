import mongoose, { Schema, Document } from 'mongoose';

// Define the schema for the Section model
const sectionSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String, // Brief description of the section
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course', // Reference to the course this section belongs to
      required: true,
    },
    lectures: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lecture', // Array of lectures in this section
    }],
  },
  {
    timestamps: true,
  }
);

// Create and export the Section model
const Section = mongoose.models.Section || mongoose.model('Section', sectionSchema);

export default Section;
