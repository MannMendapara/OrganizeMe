import React from 'react'
import './Task_Card.css'

const Task_Card = () => {
    return (
        <div className='card'>
            <div className='data'>
                <div className="title des">Java Script</div>
                <div className="start-date des">12/2/12</div>
                <div className="end-date des">12/12/12</div>
                <div className="complete des">
                    <input type="checkbox" /> Mark as Complete
                </div>
            </div>
            <div className='card-icons'>
                <img src="./Images/addtask.png" alt="" />
                <img src="./Images/addtask.png" alt="" />
                <img src="./Images/addtask.png" alt="" />
            </div>
        </div>

    )
}

export default Task_Card
