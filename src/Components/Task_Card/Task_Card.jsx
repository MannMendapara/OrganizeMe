import React from 'react'
import './Task_Card.css'

const Task_Card = ({ Status, Start, End, Title }) => {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='data'>
                        <div className="des">{Title}</div>
                        <div className="start-date des">{Start}</div>
                        {
                            End && <div className="end-date des">{End}</div>
                        }
                        {
                            Status ? (<div>Completed</div>) : (
                                <div className="complete des">
                                    <input type="checkbox" /> Mark as Complete
                                </div>
                            )
                        }
                    </div>
                    <div className='card-icons'>
                        <img src="./Images/icon.png" alt="" />
                        <img src="./Images/write.png" alt="" />
                        <img src="./Images/delete.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task_Card
