import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchABill } from '../../Actions/BillActions';
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

   // const {loading: loadingDelete, redirectDeletor} = useSelector(state => state.deletedClient)

   // useEffect(() => {
   //    if(redirectDeletor) {
   //       props.history.replace('/reports/clients')
   //    }
   //    return () => {
   //       // cleanup
   //    }
   // }, [redirectDeletor])
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
                  <h5>SCALE: {bill.scaleOrRentalType}</h5>
                  <h5>ADVOCATE CATEGORY: {' ' + bill.advocate}</h5>
                  <h5>TOTAL: USH.<span>{' ' + bill.total}</span></h5>
                  <h5>LAND VALUE: USH.<span>{' ' + bill.landValue}</span></h5>
                  <div className="d-flex justify-content-between mt-2 mb-1">
                     <Link to={"/reports/billToUpdate/" + bill._id} className="update-link">UPDATE</Link>
                     <button className="btn delete-btn">DELETE</button>
                  </div>
               </div> }
            </div>
         </div>
      </div>
   );
}
 
export default SingleSchedule;