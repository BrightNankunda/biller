import React, { useEffect } from 'react';
import { PencilFill, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AllUserBills } from '../../Actions/BillActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const BillsReport = () => {
   const dispatch = useDispatch()

   const {loading, bills, billsCount} = useSelector(state => state.userBills)
   
   console.log(billsCount, 'USERBILLS', bills)
   useEffect(() => {
      dispatch(AllUserBills())
      return () => {
         // cleanup
      }
   }, [])

   console.log('LOADING', loading, 'BILLS', bills, 'NUMBER OF BILLS', billsCount)

   const deleteBill = (billId) => {
      console.log('DELETE BUTTON BILL ID', billId)
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="blue col-lg-3">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <div className="m-3">
                  <div className="client-report-header mb-2">
                     <h5>Reports/Bills</h5>
                  </div>
                  {loading && 
                     <div className="w-100">
                        <div className="d-flex justify-content-center my-auto align-content-center">
                           <div className="spinner-border text-primary" role="status">
                              <span className="sr-only">Loading...</span>
                           </div>
                        </div>
                     </div>
                  }
                  
                  {!loading && <div className="light-color my-1 pb-3 pt-2 px-5 bills-table">
                     <table className="w-100">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>CLIENT ID</th>
                              <th>SCHEDULE</th>
                              <th>LAND VALUE</th>
                              <th>ACTIONS</th>
                           </tr>
                        </thead>
                        <tbody>
                        {bills && bills.map(bill => (
                              <tr className="border-bottom border-dark" key={bill._id}>
                                 <td>
                                    <Link to={"/reports/bill/" + bill._id} className="bill-link">
                                       {bill._id}
                                    </Link>
                                 </td>
                                 <td>{bill.createdBy}</td>
                                 <td>{bill.propertyType} SCHEDULE</td>
                                 <td>{bill.landValue}</td>
                                 <td>
                                 <Link className="update-link-client m-1" to={"/reports/billToUpdate/" + bill._id}>
                                    <PencilFill />
                                 </Link>
                                 <span  className="delete-btn-client text-danger m-1">
                                    <Trash onClick={() => deleteBill(bill._id)}/>
                                 </span>
                                 </td>
                              </tr>

                        ))}
                        </tbody>

                     </table>
                  </div> }
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default BillsReport;