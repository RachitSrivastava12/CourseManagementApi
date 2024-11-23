import mongoose, { Schema } from 'mongoose';
// Define the schema for the Lecture model
const lectureSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String, // Content of the lecture (could be a link to a video, text, or rich media)
        required: true,
    },
    duration: {
        type: Number, // Duration in minutes or seconds
        required: true,
    },
    resources: [{
            type: String, // Array of resource URLs or file links for lecture materials
        }],
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section', // Reference to the section this lecture belongs to
        required: true,
    }
}, {
    timestamps: true,
});
// Create and export the Lecture model
const Lecture = mongoose.models.Lecture || mongoose.model('Lecture', lectureSchema);
export default Lecture;
