import { useState } from "react";
import "./Create_Task.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create_Task = () => {

  const Navigate = useNavigate();

  // State
  const [taskTitle, setTaskTitle] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  // Validation state
  const [titleError, setTitleError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [priorityError, setPriorityError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [descError, setDecsError] = useState(false);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form fields
    if (!taskTitle) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!endDate) {
      setEndDateError(true);
    } else {
      setEndDateError(false);
    }

    if (!priority) {
      setPriorityError(true);
    } else {
      setPriorityError(false);
    }

    if (!category) {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
    if (!taskDesc) {
      setDecsError(true);
    } else {
      setDecsError(false);
    }

    // If any validation errors, prevent form submission
    if (titleError || endDateError || priorityError || categoryError || descError ) {
      console.error("Please fill in all required fields.");
      return;
    }

    console.log(taskTitle,endDate,priority,category,taskDesc);

    try {
      // Send the form data to the server
      await axios.post('http://localhost:3000/add', {
        Title: taskTitle,
        EndDate: endDate,
        Priority: priority,
        Category: category,
        TaskDesc: taskDesc,
      });
      console.log(response.data);
      // Clear the form fields after successful submission (you may adjust this based on your needs)
      setTaskTitle('');
      setEndDate('');
      setPriority('');
      setCategory('');
      setTaskDesc('');
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="Create-task-container">
      <form className="cont" onSubmit={handleSubmit}>
        <div className="title">
          <p>Create Your Task</p>
        </div>
        <div className="input-field">
          <label htmlFor="Task-Title">Task-Title</label>
          <br />
          <input type="text" id="Task-Title" placeholder="Task-Title" name="Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
        </div>
        <div className="input-field">
          <label htmlFor="End-date">End-Date</label>
          <br />
          <input type="date" name="EndDate" id="End-date" placeholder="End-Date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        <div className="input-field">
          <label htmlFor="Priority">Priority</label>
          <br />
          <select type="text" name="Priority" id="Priority" onChange={(e) => setPriority(e.target.value)}>
            <option value="Very Important">Very Important</option>
            <option value="Important">Important</option>
            <option value="Less Important">Less Important</option>
          </select>
          {priorityError && <p className="error-message">Please select a priority</p>}
        </div>
        <div className="input-field">
          <label htmlFor="Category">Category</label>
          <br />
          <select type="text" name="Category" id="Priority" onChange={(e) => setCategory(e.target.value)}>
            <option value="Daily Task">Daily Task</option>
            <option value="Weekly Task">Weekly Task</option>
            <option value="Monthly Task">Monthly Task</option>
          </select>
          {categoryError && <p className="error-message">Please select a category</p>}
        </div>
        <div className="Text-Area">
          <label htmlFor="Task-desc">Priority level</label>
          <br />
          <textarea
            name="TaskDesc"
            id="Task-desc"
            cols="30"
            rows="10"
            placeholder="Write important notes"
            className="Task-desc"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
           {descError && <p className="error-message">Please enter a task description</p>}
        </div>
        <div className="confirm-btn-cnt">
          <button className="confirm-btn" type="submit">Add to List</button>
        </div>
      </form>
    </div>
  );
};

export default Create_Task;
