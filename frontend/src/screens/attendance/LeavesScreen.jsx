import BreadCrumb from "../../components/widgets/Breadcrumb";
import { useGetHolidaysQuery } from "../../slices/leaveApiSlice";

const LeavesScreen = () => {
   const {data:holidays, isLoading, error} = useGetHolidaysQuery();

   const pages = [{
      name: 'Leaves',
      path: '/leaves'
   }];
   return (  
      <main>
         <BreadCrumb title={'Leaves'} pages={pages} />
         <div className="bottom-data">
                    <div className="orders">
                        <div className="header">
                            <i className='bx bx-receipt'></i>
                            <h3>Holidays List</h3>
                            <i className='bx bx-filter'></i>
                            <i className='bx bx-search'></i>
                        </div>
                        <table>
                            <thead>
                              
                                <tr>
                                    <th>Name</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Created on</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                            {isLoading ? (
                              <tr><td colSpan='5'>Loading</td></tr>
                              ) : error ? (
                               <tr><td colSpan='5'>{error?.data?.message || error.message}</td></tr>
                            ) :(
                            <> 
                            {holidays.map((holiday) => (
                                 <tr key={holiday._id}>
                                    <td>{holiday.name}</td>
                                    <td>{holiday.fromDate}</td>
                                    <td>{holiday.toDate}</td>
                                    <td>{holiday.createdAt}</td>
                                 </tr>
                                 ))}
                            </>
                            )}
                            </tbody>
                        </table>
                    </div>

                    <div className="reminders">
                        <div className="header">
                            <i className='bx bx-note'></i>
                            <h3>Remiders</h3>
                            <i className='bx bx-filter'></i>
                            <i className='bx bx-plus'></i>
                        </div>
                        <ul className="task-list">
                            <li className="completed">
                                <div className="task-title">
                                    <i className='bx bx-check-circle'></i>
                                    <p>Start Our Meeting</p>
                                </div>
                                <i className='bx bx-dots-vertical-rounded'></i>
                            </li>
                            <li className="completed">
                                <div className="task-title">
                                    <i className='bx bx-check-circle'></i>
                                    <p>Analyse Our Site</p>
                                </div>
                                <i className='bx bx-dots-vertical-rounded'></i>
                            </li>
                            <li className="not-completed">
                                <div className="task-title">
                                    <i className='bx bx-x-circle'></i>
                                    <p>Play Footbal</p>
                                </div>
                                <i className='bx bx-dots-vertical-rounded'></i>
                            </li>
                        </ul>
                    </div>
                    </div>
      </main>
   );
}
 
export default LeavesScreen;