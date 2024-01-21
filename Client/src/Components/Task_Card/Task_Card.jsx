import { useState, useEffect } from "react";
import "./Task_Card.css";
import Edit_Task from "../Edit_Task/Edit_Task";
import axios from "axios";
import Information_Task from "../../Pages/Information_Task/Information_Task";

const Task_Card = ({ id, Status, Start, End, Title }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [Checked, setChecked] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    const res = await axios.delete(`http://localhost:3000/delete/${id}`);

    if (!res) {
      console.error("Error");
    }
  };

  const handleInfo = async () => {
    setIsInfo(true);
  };
  const handleCloseInfo = async () => {
    setIsInfo(false);
  };
  useEffect(() => {
    const updateStatus = async () => {
      try {
        const response = await axios.put(`http://localhost:3000/status/${id}`);
        if (!response) {
          console.error("Error");
        }
        setChecked(false);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    if (Checked) {
      updateStatus();
    }
  }, [Checked]);

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="data">
            <div className="des">{Title}</div>
            <div className="start-date des">{Start}</div>
            {End && <div className="end-date des">{End}</div>}
            {Status === "Completed" ? (
              <div className="completed">Completed</div>
            ) : (
              <div className="complete des">
                <input
                  type="checkbox"
                  checked={Checked}
                  onChange={() => setChecked(true)}
                />{" "}
                Mark as Complete
              </div>
            )}
          </div>
          <div className="card-icons">
            <img
              src="./Images/icon.png"
              className="img-btn"
              alt="Info"
              onClick={handleInfo}
            />
            {Status !== "Completed" ? (
              <img
                src="./Images/write.png"
                className="img-btn"
                alt="Edit"
                onClick={handleEditClick}
              />
            ) : (
              ""
            )}
            <img
              src="./Images/delete.png"
              className="img-btn"
              alt="Delete"
              onClick={handleDelete}
            />
          </div>
          {isEditing && <Edit_Task taskId={id} Editing={handleCloseEdit} />}
          {isInfo && (
            <Information_Task taskId={id} Information={handleCloseInfo} />
          )}
        </div>
      </div>
    </>
  );
};

export default Task_Card;
