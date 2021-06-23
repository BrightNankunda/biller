import React from 'react';
import { useDispatch } from 'react-redux';
import SideBar from '../BillComponents/SideBar';
 
const SingleBill = (props) => {

   const dispatch = useDispatch()
   const param = props.match.params.billId
   
   return (
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>
         <div className="col-lg-9">
            <h4 className="text-center">SINGLE BILL</h4>
            <h4 className="text-center">{param}</h4>
         </div>
      </div>
   );
}
 
export default SingleBill;