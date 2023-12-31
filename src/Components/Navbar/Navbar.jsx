import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='ham-btn'>
          <img src="./public/Images/Hambar.png" alt="" />
        </div>
        <div className='search-bar'>
          <input type="text" placeholder='Search'/>
          <img src="./public/Images/Search.png" alt="" />
        </div>
        <div className='links'>
          <ul>
            <li><img src="./public/Images/Bell.png" alt="Icon" /></li>
            <li><img src="./public/Images/Moon.png" alt="Icon" /></li>
            <li><img src="./public/Images/User.png" alt="Icon" /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
