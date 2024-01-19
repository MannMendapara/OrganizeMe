import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'

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

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setAlltask(response.data);

      const searchedArray = alltask.filter((task) =>
        task.Title.toLowerCase().includes(inputval.toLowerCase())
      );

      console.log(searchedArray);
      setFilteredTasks(searchedArray);

      // Clear the input field
      setInputval('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className="ham-btn" onClick={handleSidebar}>
            <img src={!sidebar ? "./Images/Hambar.png" : "./Images/Cross.png"} alt="Icon" />
          </div>
          <div className='search-bar'>
            <input type="text" placeholder='Search' value={inputval} onChange={e => setInputval(e.target.value)} />
            <img src="./Images/Search.png" alt="Icon" className='search-img' onClick={handleSearch} />
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
    </>
  )
}

export default Navbar;
