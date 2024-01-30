import Task_Card from '../../Components/Task_Card/Task_Card'
import './Searched_Task.css'

const Searched_Tasks = ({ data }) => {
    return (
        <>
            <div className='main-cnt'>
                <div className='Result-title'>
                    <h2>Result</h2>
                </div>
                {
                    data.length === 0 ? (<h2 className='nodatafound'>No Data Found</h2>) : (
                        <div className='datacard-cnt'>
                            {
                                data.map((item, i) => {
                                    const startDate = new Date(item.StartDate);
                                    const endDate = new Date(item.EndDate);
                                    // Format the dates as "dd/mm/yyyy"
                                    const formattedStartDate = startDate.toLocaleDateString('en-GB');
                                    const formattedEndDate = endDate.toLocaleDateString('en-GB');
                                    return (
                                        <Task_Card key={i} Start={formattedStartDate} Title={item.Title} End={formattedEndDate} Status={item.Status} id={item._id} />
                                    )
                                })
                            }
                        </div>
                    )
                }
                <div className='line-img'>
                    <img src="/Images/line.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Searched_Tasks
