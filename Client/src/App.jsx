import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Completed_Task from './Pages/Completed_Task/Completed_Task'
import Running_Tasks from './Pages/Running_Task/Running_Tasks'
import Create_Task from './Components/Create_Task/Create_Task'
import All_Task from './Pages/All_Task/All_Task'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/running' element={<Running_Tasks />} />
        <Route path='/completed' element={<Completed_Task />} />
        <Route path='/add-task' element={< Create_Task/>} />
        <Route path='/all-task' element={< All_Task/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/reg' element={< Register/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
