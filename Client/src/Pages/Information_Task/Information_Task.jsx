import { useEffect, useState } from "react";
import "./Information_Task.css";
import axios from "axios";

const Information_Task = ({ taskId, CloseInformation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${taskId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const startDate = new Date(data.StartDate);
  const formattedStartDate = startDate.toLocaleDateString();

  const endDate = new Date(data.EndDate);
  const formattedEndDate = endDate.toLocaleDateString();
  return (
   
    <>
      <div className="info-cnt">
        <div className="info-cont">
          <div className="info-data-wrapper">
          <img src="./Images/Cross.png" alt="" className="close-icon" onClick={CloseInformation} />
            <div className="classnameinfo-data">
              <lable>Task Title : </lable>
              <span>{data.Title}</span>
            </div>
            <div className="classnameinfo-data">
              <lable>StartDate : </lable>
              <span>{formattedStartDate}</span>
            </div>
            <div className="classnameinfo-data">
              <lable>EndDate : </lable>
              <span>{formattedEndDate}</span>
            </div>
            <div className="classnameinfo-data">
              <lable>Description : </lable>
              <span>{data.TaskDesc}</span>
            </div>
            <div className="classnameinfo-data">
              <lable>Status : </lable>
              <span>{data.Status}</span>
            </div>
            <div className="classnameinfo-data">
              <lable>Category : </lable>
              <span>{data.Category}</span>
            </div>
            <div className="classnameinfo-data">
              <lable>Priority : </lable>
              <span>{data.Priority}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information_Task;
