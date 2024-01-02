import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dashboard">
        <img src="./Images/dashboard.png"   alt="Icon" />
        <p>Dashboard</p>
      </div>
      <div className="all-task">
        <img src="./Images/alltask.png" alt="Icon" />
        <p>All Task</p>
      </div>
      <div className="cmplt-task">
        <img src="./Images/cmp-task.png" alt="Icon" />
        <p>Complited Task</p>
      </div>
      <div className="add-task">
        <img src="./Images/addtask.png" alt="Icon" />
        <p>Add Task</p>
      </div>
    </div>
  );
};

export default Sidebar;
