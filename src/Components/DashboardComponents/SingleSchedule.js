import React from 'react';
import { useDispatch } from 'react-redux';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const SingleSchedule = (props) => {

   const dispatch = useDispatch()
   const param = props.match.params.scheduleId
   
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
               <div className="light-color p-2">
                  <h5>CLIENTS NAME</h5>
                  <h5>VALUE OF LAND</h5>
                  <h6>Scale of charges on sales, purchases, mortgages, debentures.</h6>
                  <h5>VENDORS ADVOCATE</h5>
                  <h5>FINAL AMOUNT AFTER CALCULATION</h5>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default SingleSchedule;