import { useState } from 'react';
import './Task_Card.css'
import Edit_Task from '../Edit_Task/Edit_Task'

const Task_Card = ({ id, Status, Start, End, Title }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEdit=()=>{
        setIsEditing(false);
    }

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
                            Status ? (<div className='completed'>Completed</div>) : (
                                <div className="complete des">
                                    <input type="checkbox" /> Mark as Complete
                                </div>
                            )
                        }
                    </div>
                    <div className='card-icons'>
                        <img src="./Images/icon.png" alt="Info" />
                        { Status !== "Completed" ?
                            (<img src="./Images/write.png" alt="Edit" onClick={handleEditClick}/>) : ""
                        }
                        <img src="./Images/delete.png" alt="Delete" />
                    </div>
                    {isEditing && <Edit_Task taskId={id} Editing={handleCloseEdit} />}
                </div>
            </div>
        </>
    )
}

export default Task_Card
