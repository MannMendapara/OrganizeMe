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
      <div className='datacard-cnt'>
        {
          allTask.map((item, i) => {
            const startDate = new Date(item.StartDate);
            const endDate = new Date(item.EndDate);

            // Format the dates as "dd/mm/yyyy"
            const formattedStartDate = startDate.toLocaleDateString('en-GB');
            const formattedEndDate = endDate.toLocaleDateString('en-GB');
            return (
              <Task_Card key={i} Start={formattedStartDate} Title={item.Title} End={formattedEndDate} Status={item.Status} />
            )
          })
        }
      </div>
    </div>
  )
}

export default All_Task