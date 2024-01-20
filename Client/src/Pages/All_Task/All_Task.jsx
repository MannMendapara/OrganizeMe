import { useEffect, useState } from 'react'
import Task_Card from '../../Components/Task_Card/Task_Card';
import './All_Task.css'
import axios from 'axios'

const All_Task = () => {

  //states
  const [allTask, setAllTask] = useState([]);

  //useEffect
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setAllTask(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, [allTask]);

  return (
    <div className='all-task-container'>
      <div className="top-cont">
        <div className="top-title">
          <p>All Task</p>
        </div>
      </div>
      <div className="top-bar-menu">
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

          <div className="status">
        <select type="text" name="Category" className="sorting" >
        <option value="default" disabled selected>By Status</option>
            <option value="Running">Running</option>
            <option value="Completed">Completed</option>
            
          </select></div>
      </div>
      <div className='search'>
          <input type="text" placeholder='Search'/>
          <img src="./Images/Search.png" alt="Icon" />
        </div>
        </div>  
      <div className='datacard-cnt'>
        {
          allTask.map((item, i) => {
            const startDate = new Date(item.StartDate);
            const endDate = new Date(item.EndDate);
            // Format the dates as "dd/mm/yyyy"
            const formattedStartDate = startDate.toLocaleDateString('en-GB');
            const formattedEndDate = endDate.toLocaleDateString('en-GB');
            return (
              <Task_Card key={i} Start={formattedStartDate} Title={item.Title} End={formattedEndDate} Status={item.Status} id={item._id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default All_Task