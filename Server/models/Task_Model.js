import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    Title: {
        type: String, 
        required: true,
    },
    StartDate: {
        type: String,
        required: true
    },
    EndDate: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true,
    },
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
