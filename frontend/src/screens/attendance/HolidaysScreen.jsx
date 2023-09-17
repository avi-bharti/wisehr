import { useState } from "react";
import BreadCrumb from "../../components/widgets/Breadcrumb";
import { useDeleteHolidayMutation, useGetHolidaysQuery, useSaveHolidayMutation } from "../../slices/leaveApiSlice";
import { toast } from "react-toastify";

const HolidaysScreen = () => {
   const {data:holidays,refetch, isLoading, error} = useGetHolidaysQuery();

   const [holidayId, setHolidayId] = useState(null);
   const [name,setName] = useState('')
   const [fromDate, setFromDate] = useState('')
   const [toDate, setToDate] = useState('')

   const [saveHoliday] = useSaveHolidayMutation();
   const [deleteHoliday] = useDeleteHolidayMutation();

   const HandleSubmit = async(e) => {
      e.preventDefault();
      try {
         const res = await saveHoliday({name,fromDate,toDate, holidayId}).unwrap();
         refetch();
      } catch (err) {
         toast.error(err?.data?.message ?? err.message);
      }
   }

   const HandleEdit = async (element) => {
      const row = element.target.closest('tr');
      setHolidayId(element.target.id)
      setName(row.querySelector('.holiday-name').textContent)
      setFromDate(row.cells[1].textContent)
      setToDate(row.cells[2].textContent)
   }
   const HandleCancle = async () => {
      setHolidayId(null)
      setName('')
      setFromDate('')
      setToDate('')
   }

   const HandleDelete = async (element) => {
      toast.warn(({ closeToast }) => (
         <div>
           <p>Are you sure you want to confirm?</p>
           <button onClick={() => handleConfirm(closeToast,element)}>Confirm</button>
           <button onClick={closeToast}>Cancel</button>
         </div>
       ), {
         position: toast.POSITION.TOP_CENTER,
         autoClose: false, // Keep the toast open until user confirms or cancels
         closeButton: false, // Remove the close button
       });
   }

   const handleConfirm = async (closeToast,element) => {
         try {
            const resp = await deleteHoliday({_id:element.target.id}).unwrap()
            refetch();
         } catch (err) {
            toast.error(err?.data?.message ?? err.message);
         }
         closeToast();
   }

   const pages = [{
      name: 'Holidays',
      path: '/holidays'
   }];
   return (  
      <main>
         <BreadCrumb title={'Holidays'} pages={pages} />
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
                                    <th>Actions</th>
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
                                    <td className="holiday-name">{holiday.name}</td>
                                    <td>{holiday.fromDate}</td>
                                    <td>{holiday.toDate}</td>
                                    <td>{new Date(holiday.createdAt).toDateString()}</td>
                                    <td>
                                       <i onClick={(e) => HandleEdit(e)} id={holiday._id} className="bx bx-pencil"></i>
                                       <i onClick={(e) => HandleDelete(e)} id={holiday._id} className="bx bx-trash"></i>
                                    </td>
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
                            <h3>Add Holiday</h3>
                            {/* <i className='bx bx-filter'></i> */}
                            {/* <i className='bx bx-plus'></i> */}
                        </div>
                        <form>
                           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                           <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                           <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}/>
                           <input type="submit" onClick={(e) => HandleSubmit(e)} />
                           <input type="button" onClick={(e) => HandleCancle(e)} value='Cancle'/>
                        </form>
                    </div>
                    </div>
      </main>
   );
}
 
export default HolidaysScreen;