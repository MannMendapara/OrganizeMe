import './Home.css'
import { data } from '../../Task_Data'
import { useEffect } from 'react'
import { useState } from 'react'
import Task_Card from '../../Components/Task_Card/Task_Card'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [completed, setCompleted] = useState([]);
  const [panding, setPanding] = useState([]);
  const Navigate = useNavigate()

  const handleAllRunning = () => {
    Navigate('/running');
  }

  const handleAllCompleted = () => {
    Navigate('/completed')
  }

  const handleAddTask = () => {
    Navigate('/add-task')
  }

  useEffect(() => {
    try {
      let completedTask = [];
      let PandingTask = [];
      data.forEach((item) => {
        if (item.Status === "Completed" && completedTask.length <= 5) {
          completedTask.push(item);
        } else if(PandingTask.length <= 5){
          PandingTask.push(item);
        }
      })
      setCompleted(completedTask);
      setPanding(PandingTask);
    } catch (e) {
      console.error(e);
    }
  }, [])

  return (
    <div className='home-cnt'>
        <div className='running-task-cnt'>
          <div className='main-title'>
            <p>Running Task</p>
            <img src="./Images/line.png" alt="Line" />
          </div>
          <div className='datacard-cnt'>
            {
              panding.map((item, i) => {
                return (
                  <Task_Card key={i} Start={item.Start} Title={item.Title} />
                )
              })
            }
          </div>
          <div className="btn-cnt">
            <button className='btn' onClick={handleAllRunning}>
              All Running Tasks
            </button>
          </div>
        </div>
        <div className='completed-task-cnt'>
          <div className='main-title'>
            <p>Completed Task</p>
            <img src="./Images/line.png" alt="Line" />
          </div>
          <div className='datacard-cnt'>
            {
              completed.map((item, i) => {
                return (
                  <Task_Card key={i} Start={item.Start} Title={item.Title} End={item.End} Status={item.Status} />
                )
              })
            }
          </div>
          <div className="btn-cnt">
            <button className='btn' onClick={handleAllCompleted}>
              All Completed Tasks
            </button>
          </div>
          <div className="add-task-btn-cnt">
            <button className='add-task-btn' onClick={handleAddTask}>+</button>
          </div>
        </div>
    </div>
  )
}

export default Home
