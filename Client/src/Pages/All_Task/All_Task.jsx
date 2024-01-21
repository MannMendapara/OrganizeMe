import { useEffect, useState } from "react";
import Task_Card from "../../Components/Task_Card/Task_Card";
import "./All_Task.css";
import axios from "axios";

const All_Task = () => {
  //states
  const [sortedTask, setSortedTask] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  // useEffect
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        // Sort the data initially
        setSortedTask(sortTasks(response.data, sortBy));
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, [sortBy,sortedTask]);

  const sortTasks = (tasks, sortValue) => {
    return [...tasks].sort((a, b) => {
      // Implement your sorting logic based on the selected value
      switch (sortValue) {
        case 'Very Important':
        case 'Important':
        case 'Less Important':
          return a.Priority.localeCompare(b.Priority);
        case 'Daily Task':
        case 'Weekly Task':
        case 'Monthly Task':
          return a.Category.localeCompare(b.Category);
        case 'Pending':
          return b.Status.localeCompare(a.Status);
        case 'Completed':
          return a.Status.localeCompare(b.Status);
        default:
          // Default sorting (by start date, you can change it to another criteria)
          return new Date(a.StartDate) - new Date(b.StartDate);
      }
    });
  };

  return (
    <div className="all-task-container">
      <div className="top-cont">
        <div className="top-title">
          <p>All Task</p>
        </div>
      </div>
      <div className="top-bar-menu">
        <div className="all-sort-task">
          <div className="priority">
            <select
              type="text"
              name="Priority"
              defaultValue="default"
              className="sorting"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default" disabled>
                Sort By
              </option>
              <option value="Very Important">Very Important</option>
              <option value="Important">Important</option>
              <option value="Less Important">Less Important</option>
              <option value="Daily Task">Daily Task</option>
              <option value="Weekly Task">Weekly Task</option>
              <option value="Monthly Task">Monthly Task</option>
              <option value="Pending">Running</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="all-search">
          <input type="text" placeholder="Search" />
          <img src="./Images/Search.png" alt="Icon" />
        </div>
      </div>
      <div className="datacard-cnt">
        {sortedTask.map((item, i) => {
          const startDate = new Date(item.StartDate);
          const endDate = new Date(item.EndDate);
          // Format the dates as "dd/mm/yyyy"
          const formattedStartDate = startDate.toLocaleDateString("en-GB");
          const formattedEndDate = endDate.toLocaleDateString("en-GB");
          return (
            <Task_Card
              key={i}
              Start={formattedStartDate}
              Title={item.Title}
              End={formattedEndDate}
              Status={item.Status}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default All_Task;
