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
