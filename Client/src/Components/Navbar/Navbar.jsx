import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Searched_Tasks from '../../Pages/Searched_Task/Searched_Tasks'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [alltask, setAlltask] = useState([]);
  const [inputval, setInputval] = useState('');
  const [profile, setProfile] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  const closeSidebar = () => {
    setSidebar(false);
  };

  const handleProfile = () => [
    setProfile(!profile)
  ]

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/');
      setAlltask(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, [alltask]);

  const searchTasks = () => {
    return alltask.filter((task) =>
      task.Title.toLowerCase().includes(inputval.toLowerCase())
    );
  };

  const searchedTasks = searchTasks();


  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className="ham-btn" onClick={handleSidebar}>
            <img src={!sidebar ? "/Images/Hambar.png" : "./Images/Cross.png"} alt="Icon" />
          </div>
          <div className='search-bar'>
            <input type="text" placeholder='Search' value={inputval} onChange={e => setInputval(e.target.value)} />
            <img src="/Images/Search.png" alt="Icon" className='search-img' />
          </div>
          <div className='links'>
            <ul>
              <li><img src="/Images/Bell.png" alt="Icon" /></li>
              <li><img src="/Images/Moon.png" alt="Icon" /></li>
              <li className='profile-section'><img src="/Images/User.png" alt="Icon" onClick={handleProfile} />
                {
                  profile &&
                  <div className='profile-cnt'>

                  </div>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {
        sidebar && <Sidebar handleSidebar={closeSidebar} />
      }
      {
        (inputval) ? <div className='search-cnt'><Searched_Tasks data={searchedTasks} /> </div> : ""
      }
    </>
  )
}

export default Navbar;
