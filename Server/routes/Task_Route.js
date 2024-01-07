import express, { response } from "express";
import Task from "../models/Task_Model.js";

const Task_router = express.Router();

Task_router.get("/", async (req, res) => {
  try {
    const data = await Task.find({});
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

Task_router.post("/add", async (req, res) => {
  try {
    const { Title, StartDate, EndDate, Status } = req.body;
    // Check For Empty field
    if (!Title || !StartDate || !EndDate || !Status) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }
    //NewTask
    const newTask = await Task.create({
      Title,
      StartDate,
      EndDate,
      Status,
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default Task_router;
