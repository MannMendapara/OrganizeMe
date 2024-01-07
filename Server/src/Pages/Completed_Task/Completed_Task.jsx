import React, {useEffect, useState} from 'react'
import './Completed_Task.css'
import Task_Card from '../../Components/Task_Card/Task_Card';
import { data } from '../../Task_Data';

const Completed_Task = () => {

  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      let completedTask = [];
      data.forEach((item) => {
        if (item.Status === "Completed") {
          completedTask.push(item);
        }
      })
      setCompleted(completedTask);
    } catch (e) {
      console.error(e);
    }
  }, [])

  return (
    <div className='completed-cnt'>
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
  )
}

export default Completed_Task
