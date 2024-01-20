import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Searched_Tasks from '../../Pages/Searched_Task/Searched_Tasks'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [alltask, setAlltask] = useState([]);
  const [inputval, setInputval] = useState('');
  const [filteredTask, setFilteredTasks] = useState([]);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  const closeSidebar = () => {
    setSidebar(false);
  };

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setAlltask(response.data);
      const searchedArray = response.data.filter((task) =>
        task.Title.toLowerCase().includes(inputval.toLowerCase())
      );
      setFilteredTasks(searchedArray);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, [inputval, alltask]);



  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className="ham-btn" onClick={handleSidebar}>
            <img src={!sidebar ? "./Images/Hambar.png" : "./Images/Cross.png"} alt="Icon" />
          </div>
          <div className='search-bar'>
            <input type="text" placeholder='Search' value={inputval} onChange={e => setInputval(e.target.value)} />
            <img src="./Images/Search.png" alt="Icon" className='search-img' />
          </div>
          <div className='links'>
            <ul>
              <li><img src="./Images/Bell.png" alt="Icon" /></li>
              <li><img src="./Images/Moon.png" alt="Icon" /></li>
              <li><img src="./Images/User.png" alt="Icon" /></li>
            </ul>
          </div>
        </div>
      </nav>
      {
        sidebar && <Sidebar handleSidebar={closeSidebar} />
      }
      {
        (inputval) ? <Searched_Tasks data={filteredTask} /> : ""
      }
    </>
  )
}

export default Navbar;
