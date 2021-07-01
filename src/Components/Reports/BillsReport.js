import React, { useEffect } from 'react';
import { PencilFill, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AllUserBills, DeleteABill } from '../../Actions/BillActions';
import { FetchClients } from '../../Actions/ClientActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const BillsReport = () => {
   const dispatch = useDispatch()

   const {loading, bills, billsCount} = useSelector(state => state.userBills)
   
   console.log(billsCount, 'USERBILLS', bills)
   useEffect(() => {
      dispatch(AllUserBills())
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   const {loading: loadingClients, clients} = useSelector(state => state.clients)
   console.log('LOADING CLIENTS', loadingClients, 'CLIENTS FROM BILLS REPORT', clients)
   console.log('LOADING', loading, 'BILLS', bills, 'NUMBER OF BILLS', billsCount)

   const {loading: loadingBillDelete, redirectBillDeletor} = useSelector(state => state.deletedBill)
   console.log('DELETED BILL', 'REDIRECT BILL DELETOR', redirectBillDeletor)

   useEffect(() => {
      if(redirectBillDeletor) {
          dispatch(AllUserBills())
      }
      return () => {
               // cleanup
      }
   },[redirectBillDeletor])

   const deleteBill = (billId) => {
      dispatch(DeleteABill({billId}))
   }

   // FUNCTION TO FIND AND RETURN BILL OWNER DETAILS
   const getClientDetails = (id) => {
      return clients.find(client => client._id === id)
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
                  
                  {bills && clients && !loading && <div className="light-color my-1 pb-3 pt-2 px-5 clientss-table">
                     <table className="w-100">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>CLIENT NAME</th>
                              <th>SCHEDULE</th>
                              <th>LAND VALUE</th>
                              <th>ACTIONS</th>
                           </tr>
                        </thead>
                        <tbody>
                        {bills.map((bill, index) => (
                              <tr className="border-bottom border-dark" key={bill._id}>
                                 <td>
                                    <Link to={"/reports/bill/" + bill._id} className="bill-link">
                                       {index + 1}
                                    </Link>
                                 </td>

                                 <td>
                                    <Link to={"/reports/bill/" + bill._id} className="bill-link">
                                       { bills && getClientDetails(bill.createdFor).firstName}       
                                    </Link>
                                 </td>
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