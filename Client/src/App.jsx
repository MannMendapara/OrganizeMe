import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Completed_Task from './Pages/Completed_Task/Completed_Task'
import Running_Tasks from './Pages/Running_Task/Running_Tasks'
import Create_Task from './Components/Create_Task/Create_Task'
import All_Task from './Pages/All_Task/All_Task'

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
      </Routes>
    </BrowserRouter>
  )
}
export default App
