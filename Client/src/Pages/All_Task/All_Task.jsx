import React from 'react'
import { data } from '../../Task_Data';
import Task_Card from '../../Components/Task_Card/Task_Card';
import './All_Task.css'

const All_Task = () => {
  return (
    <div className='all-task-container'>
    <div className="top-cont">
    <div className="top-title">
      <p>All Task</p>
    </div>
    </div>

    <div className='datacard-cnt'>
        {
          data.map((item, i) => {
            return (
              <Task_Card key={i} Start={item.Start} Title={item.Title} End={item.End} Status={item.Status} />
            )
          })
        }
      </div>
    </div>
  )
}

export default All_Task