import './Home.css'
import { data } from '../../Task_Data'
import { useEffect } from 'react'
import { useState } from 'react'
import Task_Card from '../../Components/Task_Card/Task_Card'

const Home = () => {

  const [completed, setCompleted] = useState([]);
  const [panding, setPanding] = useState([]);

  useEffect(() => {
    try {
      let completedTask = [];
      let PandingTask = [];
      data.forEach((item) => {
        if (item.Status === "Completed") {
          completedTask.push(item);
        } else {
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
        </div>
    </div>
  )
}

export default Home
