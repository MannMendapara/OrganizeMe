import React from 'react'
import './Edit_Task.css'

const Edit_Task = () => {
    return (
        <div className='model'>
            <div className="cont">
                <div className="input-field">
                    <label htmlFor="Task-Title">Task-Title</label>
                    <br />
                    <input type="text" id='Task-Title' placeholder='Task-Title' />
                </div>
                <div className="input-field">
                    <label htmlFor="Start-date">Start-Date</label>
                    <br />
                    <input type="date" id='Start-date' placeholder='Start-Date' />
                </div>
                <div className="input-field">
                    <label htmlFor="End-date">End-Date</label>
                    <br />
                    <input type="date" id='End-date' placeholder='End-Date' />
                </div>
                <div className="input-field">
                    <label htmlFor="Priority">Priority</label>
                    <br />
                    <select type="text" id='Priority'>
                        <option value="" disabled selected>Choose Priority</option>
                        <option value="">Very Important</option>
                        <option value="">Important</option>
                        <option value="">Less Important</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="Category">Task-Title</label>
                    <br />
                    <input type="text" id='Category' placeholder='Category' />
                </div>
                <div className='Text-Area'>
                    <label htmlFor="Task-desc">Task-Description</label>
                    <br />
                    <textarea name="" id="Task-desc" cols="30" rows="10" placeholder='Write here' className='Task-desc'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Edit_Task
