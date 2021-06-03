import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AllBills as GetAllBills} from '../../Actions/BillActions'

const AllBills = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(GetAllBills())
      return () => {
         // cleanup
      }
   }, [])

   const AllSavedBills = useSelector(state => state.bills)
   const {loading, bills, error} = AllSavedBills
   
   const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
   }
   return ( 
      <div className="w-100">
         <h4 className="text-center">ALL BILLS</h4>
         {loading && <h2 className="text-center">Loading...</h2>}
         {bills && bills.map(bill => 
            <div className="list-group">
               <h5 className="list-group-item text-center">{capitalize(bill.propertyType)}</h5>
               <h5 className="list-group-item text-center">{bill.advocate}</h5>
               <h5 className="list-group-item text-center text-primary">
               Total: Ugx {bill.total}</h5>
            </div>
         )}
         {error && <div className="alert alert-danger">
            {error}
         </div>}
      </div>
   );
}
 
export default AllBills;