import { useEffect, useState } from 'react'
import Task_Card from '../../Components/Task_Card/Task_Card'
import './Running_Task.css'
import axios from 'axios'

const Running_Tasks = () => {

  const [panding, setPanding] = useState([]);
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setAllTask(response.data);
        try {
          let PandingTask = [];
          allTask.forEach((item) => {
            if (item.Status !== "Completed") {
              PandingTask.push(item);
            }
          })
          setPanding(PandingTask);
        } catch (e) {
          console.error(e);
        }
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, [allTask])

  return (
    <div className='running-cnt'>
      <div className="top-cont">
        <div className="top-title">
          <p>Running Task</p>
        </div>
      </div>
<div className="top-bar">
      <div className='sort-task'>
        <div className="priority">
        <select type="text" name="Priority" className="sorting">
        <option value="default" disabled selected>By Priority</option>
            <option value="Very Important">Very Important</option>
            <option value="Important">Important</option>
            <option value="Less Important">Less Important</option>
          </select>
        </div>
        <div className="category">
        <select type="text" name="Category" className="sorting" >
        <option value="default" disabled selected>By Category</option>
            <option value="Daily Task">Daily Task</option>
            <option value="Weekly Task">Weekly Task</option>
            <option value="Monthly Task">Monthly Task</option>
          </select></div>
      </div>
      <div className='search'>
          <input type="text" placeholder='Search'/>
          <img src="./Images/Search.png" alt="Icon" />
        </div>
        </div>     
      <div className='datacard-cnt'>
        {
          panding.map((item, i) => {
            const startDate = new Date(item.StartDate);
            // Format the dates as "dd/mm/yyyy"
            const formattedStartDate = startDate.toLocaleDateString('en-GB');
            return (
              <Task_Card key={i} Start={formattedStartDate} Title={item.Title} id={item._id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Running_Tasks
