import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'redux'
import {AllBills as GetAllBills} from '../../Actions/BillActions'

const AllBills = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(GetAllBills())
      return () => {
         // cleanup
      }
   }, [])

   // const {bills} = useSelector(state => state.bills)
   // const {loading, bills: AllBills, error} = bills
   // console.log(bills)

   return ( 
      <div className="w-100">
         <h4 className="text-center">ALL BILLS</h4>
      </div>
   );
}
 
export default AllBills;