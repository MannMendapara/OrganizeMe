import { useEffect, useState } from "react";
import Task_Card from "../../Components/Task_Card/Task_Card";
import "./All_Task.css";
import axios from "axios";
import Searched_Tasks from "../Searched_Task/Searched_Tasks";

const All_Task = () => {
  //states
  const [sortBy, setSortBy] = useState('default');
  const [inputval, setInputval] = useState('');
  const [tasks, setTasks] = useState([]);

  // useEffect
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        // Set the tasks initially
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, [tasks]);

  // Function for sort tasks.
  const sortTasks = (tasksToSort, sortValue) => {
    return [...tasksToSort].sort((a, b) => {
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
          return new Date(a.StartDate) - new Date(b.StartDate);
      }
    });
  };

  // Function for searching task.
  const searchTasks = () => {
    return sortTasks(tasks, sortBy).filter((task) =>
      task.Title.toLowerCase().includes(inputval.toLowerCase())
    );
  };
  const searchedTasks = searchTasks();

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
          <input type="text" placeholder="Search" onChange={(e) => setInputval(e.target.value)} />
          <img src="/Images/Search.png" alt="Icon" />
        </div>
      </div>
      {
        (inputval) ? <div className='search-task'><Searched_Tasks data={searchedTasks} /> </div> : ""
      }
      <div className="datacard-cnt">
        {!inputval && sortTasks(tasks, sortBy).map((item, i) => {
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
