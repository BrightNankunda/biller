import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchABill, DeleteABill } from '../../Actions/BillActions';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const SingleSchedule = (props) => {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(FetchABill(props.match.params.billId))
      console.log('BILL ID', props.match.params.billId)
      return () => {
         // cleanup
      }
   }, [])

   const {loading, bill} = useSelector(state => state.singleBill)
   console.log('LOADING', loading, 'BILL', bill)

   const {loading: loadingBillDelete, redirectBillDeletor} = useSelector(state => state.deletedBill)
   console.log('DELETED BILL', 'REDIRECT BILL DELETOR', redirectBillDeletor)

   useEffect(() => {
      if(redirectBillDeletor) {
         props.history.push('/reports/bills')
      }
      return () => {
               // cleanup
      }
   },[redirectBillDeletor])

   const DeleteBill = (billId) => {
      dispatch(DeleteABill({billId}))
   }

   const rentOptions = [
      {choice: "1", value : "Rack rent means rent representing the value of the land and buildings"},
      {choice: "2", value : "Ground rent means rent representing the value of the land without buildings on it"}
   ]

   const advocateOptions = [
      {choice: "1", value : "Vendor's Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance"},
      {choice: "2", value : "Purchase's Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance"},
      {choice: "3", value : "Mortgagor's Advocate: For deducting title to freehold or lease property, perusing mortagage and completing"},
      {choice: "4", value : "Mortgagee's Advocate: For investigating title to freehold or lease hold property and completing"}
   ]

   const scaleOptions = [
      {choice: "1", value : "Scale of charges on sales, purchases, mortgages and debentures"},
      {choice: "2", value : "Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered"}
   ]

   const landRegistrationOptions = [
      {choice : "YES"},
      {choice : "NO"}
   ]

   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9 p-4">
               <div className="schedule-header">
                  <h3>Schedules/LandSchedule/Bill</h3>
               </div>
               {loading && <div className="w-100">
                  <div className="d-flex justify-content-center my-auto align-content-center">
                     <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                  </div>
               </div>
               }

               {!loading && bill &&
               <div className="light-color p-2">
                  <h5>CLIENT ID: {bill.createdFor}</h5>
                  <h5>SCHEDULE TYPE: {bill.propertyType}</h5>
                  <h5>SCALE: {rentOptions[parseInt(bill.scaleOrRentalType) - 1].value}</h5>
                  <h5>ADVOCATE CATEGORY: {advocateOptions[parseInt(bill.advocate) - 1].value}</h5>
                  <h5>PROPERTY REGISTERED: {landRegistrationOptions[parseInt(bill.registered)].choice}
                  </h5>
                  <h5>TOTAL: USH.<span>{' ' + bill.total}</span></h5>
                  <h5>LAND VALUE: USH.<span>{' ' + bill.landValue}</span></h5>
                  <div className="d-flex justify-content-between mt-2 mb-1">
                     <Link to={"/reports/billToUpdate/" + bill._id} className="update-link">UPDATE</Link>
                     <button className="btn delete-btn" onClick={() => DeleteBill(bill._id)}>DELETE</button>
                  </div>
               </div> }
            </div>
         </div>
      </div>
   );
}
 
export default SingleSchedule;