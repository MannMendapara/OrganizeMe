import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dashboard">
        <img src="./Images/dashboard.png"   alt="Icon" />
        <Link to ="/">Dashboard</Link>
      </div>
      <div className="all-task">
        <img src="./Images/alltask.png" alt="Icon" />
        <Link to="all-task">All Task</Link>
      </div>
      <div className="cmplt-task">
        <img src="./Images/cmp-task.png" alt="Icon" />
        <Link to ="completed">Completed Task</Link>
      </div>
      <div className="add-task">
        <img src="./Images/addtask.png" alt="Icon" />
        <Link to="add-task">Add Task</Link>
      </div>
    </div>
  );
};

export default Sidebar;
