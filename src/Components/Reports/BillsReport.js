import React, { useEffect } from 'react';
import { PencilFill, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AllUserBills, DeleteABill } from '../../Actions/BillActions';
import { AllUserCriminals } from '../../Actions/CriminalActions';
import { FetchClients } from '../../Actions/ClientActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const BillsReport = () => {
   const dispatch = useDispatch()
   
   const {loading, bills, billsCount} = useSelector(state => state.userBills)
   const {loading: loadingClients, clients} = useSelector(state => state.clients)
   
   const {loading: loadingCriminals, criminals, criminalsCount} = useSelector(state => state.userCriminals)
  
   const {loading: loadingBillDelete, redirectBillDeletor} = useSelector(state => state.deletedBill)
   console.log('DELETED BILL', 'REDIRECT BILL DELETOR', redirectBillDeletor)

   console.log(billsCount, 'USERBILLS', bills)
   useEffect(() => {
      dispatch(AllUserBills())
      dispatch(AllUserCriminals())
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])


   useEffect(() => {
      if(redirectBillDeletor) {
         dispatch(AllUserBills())
         dispatch(FetchClients())
         dispatch(AllUserCriminals())
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
      console.log('ID', typeof(id) )
      if(id === null) return
      // return clients.find(client => client._id === id)
      return clients.find(client => client._id === id).firstName
      // return (id !== null) ? clients.find(client => client._id === id) : ''

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
                              <th>PROPERTY VALUE</th>
                              <th>TOTAL</th>
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

                                 <td>{ clients && bills  && getClientDetails(bill.createdFor)}</td>
                                 <td>
                                    <Link to={"/reports/bill/" + bill._id} className="bill-link">
                                       {bill.propertyType} SCHEDULE</Link>
                                 </td>
                                 <td>{bill.landValue}</td>
                                 <td>{bill.total}</td>
                                 <td>
                                 <Link className="update-link-client m-1" to={"/reports/billToUpdate/" + bill._id}>
                                    <PencilFill />
                                 </Link>
                                 <span  className="delete-btn-client text-danger m-1">
                                    <Trash onClick={() => deleteBill(bill._id, index)}/>
                                 </span>
                                 </td>
                              </tr>

                        ))}
                        {criminals && criminals.map((criminal, index) => (
                              <tr className="border-bottom border-dark" key={criminal._id}>
                                 <td>
                                    <Link to={"/reports/bill/" + criminal._id} className="bill-link">
                                       {billsCount + index + 1}
                                    </Link>
                                 </td>

                                 <td>ID FOR CLIENT
                                 {/* { clients && criminals  && getClientDetails(criminal.createdFor)} */}
                                 </td>
                                 <td>
                                    <Link to={"/reports/bill/" + criminal._id} className="bill-link">
                                       CRIMINAL SCHEDULE</Link>
                                 </td>
                                 <td>{criminal.subjectValue}</td>
                                 <td>{criminal.total}</td>
                                 <td>
                                 <Link className="update-link-client m-1" to={"/reports/billToUpdate/" + criminal._id}>
                                    <PencilFill />
                                 </Link>
                                 <span  className="delete-btn-client text-danger m-1">
                                    <Trash onClick={() => deleteBill(criminal._id, index)}/>
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