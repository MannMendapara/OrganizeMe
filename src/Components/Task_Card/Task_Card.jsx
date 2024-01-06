import React from 'react'
import './Task_Card.css'

const Task_Card = () => {
    return (
        <>
        <div className='main-container'>
        <div className='card-container'>
            <div className='card-title'>
             <p>Running Tasks</p>  
            <img src="./Images/line.png" alt=""/>
            </div>
        <div className='card'>
            
            <div className='data'>
                <div className="des">Java Script</div>
                <div className="start-date des">12/2/12</div>
                <div className="end-date des">12/12/12</div>
                <div className="complete des">
                    <input type="checkbox" /> Mark as Complete
                </div>
            </div>
            <div className='card-icons'>
                <img src="./Images/icon.png" alt="" />
                <img src="./Images/write.png" alt="" />
                <img src="./Images/delete.png" alt="" />
            </div>
        </div>
</div>
<div className='line'>
<img src="./Images/lineVertical.png" alt="" />
</div>
{/* <div className='card-container'>
            <div className='card-title'>
             <p>Running Tasks</p>  
            <img src="./Images/line.png" alt=""/>
            </div>
        <div className='card'>
            
            <div className='data'>
                <div className="des">Java Script</div>
                <div className="start-date des">12/2/12</div>
                <div className="end-date des">12/12/12</div>
                <div className="complete des">
                    <input type="checkbox" /> Mark as Complete
                </div>
            </div>
            <div className='card-icons'>
                <img src="./Images/icon.png" alt="" />
                <img src="./Images/write.png" alt="" />
                <img src="./Images/delete.png" alt="" />
            </div>
        </div>
</div> */}
</div>

</>
    )
}

export default Task_Card
