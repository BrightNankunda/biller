import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllBills } from '../../Actions/BillActions';
 
const AllSchedules = () => {

   const dispatch = useDispatch()

   const {loading, bills} = useSelector(state => state.bills)

   useEffect(() => {
      dispatch(AllBills())
      return () => {
         // cleanup
      }
   }, [])

   return (
      <div className="bg-light w-100 full-height">
         {loading && <div className="d-flex justify-content-center w-100 align-content-center">
            <div className="spinner-border text-primary" role="status">
               <span className="sr-only">Loading...</span>
            </div>
         </div>}
         {bills && bills.map(bill => (
            <div className="m-2 rounded bg-white w-95" key={bill._id}>
               <h4 className="p-2">{bill.propertyType.toUpperCase()} SCHEDULE</h4>
            </div>

         ))}
      </div>
   );
}
 
export default AllSchedules;