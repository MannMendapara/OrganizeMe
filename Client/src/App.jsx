import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Completed_Task from './Pages/Completed_Task/Completed_Task';
import Running_Tasks from './Pages/Running_Task/Running_Tasks';
import Create_Task from './Components/Create_Task/Create_Task';
import All_Task from './Pages/All_Task/All_Task';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      axios.defaults.headers.common['Authorization'] = storedToken;
      axios.get('http://localhost:3000/auth/login')
        .then(response => {
          if (response) {
            setIsLoggedIn(true);
          }
        })
        .catch(error => {
          console.error('Token validation error:', error);
        });
    }
  },[])

  return (
    <>
      {
        isLoggedIn ? (<BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/user' element={<Home />} />
            <Route path='/user/running' element={<Running_Tasks />} />
            <Route path='/user/completed' element={<Completed_Task />} />
            <Route path='/user/add-task' element={<Create_Task />} />
            <Route path='/user/all-task' element={<All_Task />} />
          </Routes>
        </BrowserRouter>) : (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/reg' element={<Register />} />
            </Routes>
          </BrowserRouter>
        )
      }
    </>
  );
}

export default App;
