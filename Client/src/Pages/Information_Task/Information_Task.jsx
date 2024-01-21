import { useEffect, useState } from 'react'
import './Information_Task.css'
import axios from 'axios'

const Information_Task = ({ taskId, CloseInformation }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/${taskId}`).then(response => {
      setData(response.data);
    }).catch((e) => {
      console.error(e);
    })
  }, [])

  return (
    <>
      <div className="info-cnt">
        <div className='cont'>
        </div>
      </div>
    </>
  )
}

export default Information_Task