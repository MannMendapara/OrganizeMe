import { useEffect, useState } from 'react'
import './Edit_Task.css'
import axios from 'axios'

const Edit_Task = ({ taskId }) => {
    //States
    const [taskData, setTaskData] = useState({
        Title: '',
        StartDate: '',
        EndDate: '',
        Priority: '',
        Category: '',
        TaskDesc: '',
    });
    const [Title,setTitle] = useState('')
    const [StartDate,setStartDate] = useState('')
    const [EndDate,setEndDate] = useState('')
    const [Priority,setPriority] = useState('')
    const [Category,setCategory] = useState('')
    const [taskDesc,setTaskDesc] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(Title,EndDate,Priority,Category,taskDesc,StartDate)
    }

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                if (!taskId) {
                    console.error("Task ID is undefined");
                    return;
                }
                // Make an API call to fetch the task data by ID
                const response = await axios.get(`http://localhost:3000/${taskId}`);
                setTaskData(response.data);
            } catch (error) {
                console.error('Error fetching task data:', error);
            }
        };
        fetchTaskData();
    }, [taskId]);

    return (
        <div className='model'>
            <form className='cont' onSubmit={(e) => handleFormSubmit(e)}>
                <div className="input-field">
                    <label htmlFor="Task-Title">Task-Title</label>
                    <br />
                    <input type="text" id='Task-Title' placeholder='Task-Title' onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="Start-date">Start-Date</label>
                    <br />
                    <input type="date" id='Start-date' placeholder='Start-Date' onChange={(e) => setStartDate(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="End-date">End-Date</label>
                    <br />
                    <input type="date" id='End-date' placeholder='End-Date' onChange={(e) => {setEndDate(e.target.value)}}/>
                </div>
                <div className="input-field">
                    <label htmlFor="Priority">Priority</label>
                    <br />
                    <select type="text" id='Priority' onChange={(e) => {setPriority(e.target.value)}}>
                        <option value="Very Important">Very Important</option>
                        <option value="Important">Important</option>
                        <option value="Less Important">Less Important</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="Category">Category</label>
                    <br />
                    <select type="text" name="Category" id="Priority" onChange={(e) => {setCategory(e.target.value)}}>
                        <option value="Daily Task">Daily Task</option>
                        <option value="Weekly Task">Weekly Task</option>
                        <option value="Monthly Task">Monthly Task</option>
                    </select>
                </div>
                <div className='Text-Area'>
                    <label htmlFor="Task-desc">Task-Description</label>
                    <br />
                    <textarea name="" id="Task-desc" cols="30" rows="10" onChange={(e) => {setTaskDesc(e.target.value)}} placeholder='Write here' className='Task-desc'></textarea>
                </div>
                <div className='confirm-btn-cnt'>
                    <button className='confirm-btn' type='submit'>Confirm Edit</button>
                </div>
                <div className='markasdone-delete-btn-cnt'>
                    <button className='markasdone-btn'>Mark as Done</button>
                    <button className='delete-btn'>Delete</button>
                </div>
            </form>
        </div>
    );
}

export default Edit_Task
