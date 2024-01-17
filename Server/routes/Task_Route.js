import express from "express";
import Task from "../models/Task_Model.js";
import mongoose from "mongoose";

const Task_router = express.Router();

//Fetched all the tasks from database
Task_router.get("/", async (req, res) => {
  try {
    const data = await Task.find({});
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get Element by Id
Task_router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Task.findById(id);
    if (!data) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(data);
  } catch (e) {
    console.error("Error fetching data:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add the task to database
Task_router.post("/add", async (req, res) => {
  try {
    const { Title, EndDate, Priority, Category, TaskDesc } = req.body;
    const StartDate = new Date();

    // Check For Empty field
    if (!Title || !EndDate || !TaskDesc || !Category || !Priority) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }
    //NewTask
    const newTask = await Task.create({
      Title,
      StartDate,
      EndDate,
      Status: "Pending",
      TaskDesc,
      Category,
      Priority,
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update the task in database
Task_router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { Title, StartDate, EndDate, Status } = req.body;

    // Check For Empty field
    if (!Title || !StartDate || !EndDate || !Status) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    // Update Task by ID
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { Title, StartDate, EndDate, Status },
      { new: true } // Return the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// delete the task
Task_router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Find and delete the task by ID
    const deletedTask = await Task.findByIdAndDelete(id);

    // Check if the task was found and deleted
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully", deletedTask });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default Task_router;
