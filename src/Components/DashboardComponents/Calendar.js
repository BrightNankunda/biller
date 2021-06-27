import React from 'react';
import SideBar from '../BillComponents/SideBar';
 
const Calendar = () => {
   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3>CALENDAR</h3>
            </div>
         </div>
      </div>
   );
}
 
export default Calendar;