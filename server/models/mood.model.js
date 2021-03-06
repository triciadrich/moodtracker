const mongoose = require('mongoose');

const MoodTrackerSchema = new mongoose.Schema({
    mood: {
        type: String,
        required: [true, "Mood is required."]
    },
    date: {
        type: Date,
        required: [true, "Date is required."]
    },
    log: {
        type: String,
        required: [true, "Log entry is required."]
    },
    fileName: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

const MoodTracker = mongoose.model("MoodTracker", MoodTrackerSchema);

module.exports = MoodTracker;