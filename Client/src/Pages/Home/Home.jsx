import './Home.css'
import { useEffect } from 'react'
import { useState } from 'react'
import Task_Card from '../../Components/Task_Card/Task_Card'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [completed, setCompleted] = useState([]);
  const [panding, setPanding] = useState([]);
  const [allTask, setAllTask] = useState([]);
  const [loading, setloading] = useState(true);
  const Navigate = useNavigate();

  const handleAllRunning = () => {
    Navigate('/user/running');
  }

  const handleAllCompleted = () => {
    Navigate('/user/completed')
  }

  const handleAddTask = () => {
    Navigate('/user/add-task')
  }

  useEffect(() => {
    axios.get('https://advance-toodoo.onrender.com/user/')
      .then(response => {
        // Assuming response.data is an array of tasks
        const tasks = response.data;

        // Filter and set completed and pending tasks
        const completedTasks = tasks.filter(item => item.Status === "Completed").slice(0, 6);
        const pendingTasks = tasks.filter(item => item.Status !== "Completed").slice(0, 6);

        setCompleted(completedTasks);
        setPanding(pendingTasks);
        setAllTask(tasks); // Set all tasks once after filtering completed and pending tasks
        setloading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, [allTask]);


  return (
    <>
      {loading ? <h2 className='home-cnt'>Loading...</h2> :
        (<div className='home-cnt'>
          <div className='running-task-cnt'>
            <div className='main-title'>
              <p>Running Task</p>
              <img src="/Images/line.png" alt="Line" />
            </div>
            <div className='datacard-cnt'>
              {
                panding.map((item, i) => {
                  const startDate = new Date(item.StartDate);

                  // Format the dates as "dd/mm/yyyy"
                  const formattedStartDate = startDate.toLocaleDateString('en-GB');
                  return (
                    <Task_Card key={i} Start={formattedStartDate} Title={item.Title} id={item._id} />
                  )
                })
              }
            </div>
            {panding.length >= 6 ? (
              <div className="btn-cnt">
                <button className='btn' onClick={handleAllRunning}>
                  All Running Tasks
                </button>
              </div>) : ""
            }
          </div>
          <div className='completed-task-cnt'>
            <div className='main-title'>
              <p>Completed Task</p>
              <img src="/Images/line.png" alt="Line" />
            </div>
            <div className='datacard-cnt'>
              {
                completed.map((item, i) => {
                  const startDate = new Date(item.StartDate);
                  const endDate = new Date(item.EndDate);

                  // Format the dates as "dd/mm/yyyy"
                  const formattedStartDate = startDate.toLocaleDateString('en-GB');
                  const formattedEndDate = endDate.toLocaleDateString('en-GB');
                  return (
                    <Task_Card key={i} id={item._id} Start={formattedStartDate} Title={item.Title} End={formattedEndDate} Status={item.Status} />
                  )
                })
              }
            </div>
            {completed.length >= 6 ? (
              <div className="btn-cnt">
                <button className='btn' onClick={handleAllCompleted}>
                  All Completed Tasks
                </button>
              </div>) : ""
            }
            <div className="add-task-btn-cnt">
              <button className='add-task-btn' onClick={handleAddTask}>+</button>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default Home
