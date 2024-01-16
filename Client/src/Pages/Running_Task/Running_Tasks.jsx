import {useEffect,useState} from 'react'
import Task_Card from '../../Components/Task_Card/Task_Card'
import './Running_Task.css'
import { data } from '../../Task_Data'

const Running_Tasks = () => {

  const [panding, setPanding] = useState([]);

  useEffect(() => {
    try {
      let PandingTask = [];
      data.forEach((item) => {
        if (item.Status !== "Completed") {
          PandingTask.push(item);
        }
      })
      setPanding(PandingTask);
    } catch (e) {
      console.error(e);
    }
  }, [])

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
            return (
              <Task_Card key={i} Start={item.Start} Title={item.Title} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Running_Tasks
