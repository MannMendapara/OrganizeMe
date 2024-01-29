import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Searched_Tasks from '../../Pages/Searched_Task/Searched_Tasks'



const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [alltask, setAlltask] = useState([]);
  const [inputval, setInputval] = useState('');
  const [profile, setProfile] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

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

  const handleLogout=()=>{
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    navigate("/auth/login")
  }

    const DisplayUser=async()=>{
      const res = await axios.get(`http://localhost:3000/profile/${id}`);
      console.log(res);
      setName(res.data.name);
    }

  useEffect(() => {
    getData();
    DisplayUser()
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
              <li><img src="/Images/Bell.png" className='nav-img' alt="Icon" /></li>
              <li><img src="/Images/Moon.png"  className='nav-img' alt="Icon" /></li>
              <li className='profile-section'><img src="/Images/User.png" className='nav-img' alt="Icon" onClick={handleProfile} />
                {
                  profile &&
                  <div className='profile-cnt'>
                  <p>Name:{name}</p>
                  <p>Email:</p>
                  <button onClick={handleLogout}>Logout</button>
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
