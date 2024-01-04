import React from "react";
import "./Create_Task.css";

const Create_Task = () => {
  return (
    <div className="Create-task-container">
      <div className="cont">
        <div className="title">
          <p>Create Your Task</p>
        </div>
        <div className="input-field">
          <label htmlFor="Task-Title">Task-Title</label>
          <br />
          <input type="text" id="Task-Title" placeholder="Task-Title" />
        </div>
        <div className="input-field">
          <label htmlFor="End-date">End-Date</label>
          <br />
          <input type="date" id="End-date" placeholder="End-Date" />
        </div>
        <div className="input-field">
          <label htmlFor="Priority">Priority</label>
          <br />
          <select type="text" id="Priority">
            <option value="" disabled selected>
              Choose Priority
            </option>
            <option value="">Very Important</option>
            <option value="">Important</option>
            <option value="">Less Important</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="Category">Category</label>
          <br />
          <select type="text" id="Priority">
            <option value="" disabled selected>
              Choose Task
            </option>
            <option value="">Daily Task</option>
            <option value="">Weekly Task</option>
            <option value="">Monthly Task</option>
          </select>
        </div>

        <div className="Text-Area">
          <label htmlFor="Task-desc">Priority level</label>
          <br />
          <textarea
            name=""
            id="Task-desc"
            cols="30"
            rows="10"
            placeholder="Write important notes"
            className="Task-desc"
          ></textarea>
        </div>
        <div className="confirm-btn-cnt">
          <button className="confirm-btn">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Create_Task;
