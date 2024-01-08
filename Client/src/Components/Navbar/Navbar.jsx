import './Navbar.css'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <>
    <nav className='nav'>
      <div className='container'>
        <div className="ham-btn"  onClick={handleSidebar}>
          <img src={!sidebar ? "./Images/Hambar.png" : "./Images/Cross.png"} alt="Icon" />
        </div>
        <div className='search-bar'>
          <input type="text" placeholder='Search'/>
          <img src="./Images/Search.png" alt="Icon" />
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
      sidebar && <Sidebar />
    }
    </>
  )
}

export default Navbar;
