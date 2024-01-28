import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the User model
        required: true,
      },
    Title: {
        type: String, 
        required: true,
    },
    StartDate: {
        type: Date,
        required: true
    },
    EndDate: {
        type: Date,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    TaskDesc: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Priority: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
