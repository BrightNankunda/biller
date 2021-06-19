import React from 'react';
import SideBar from '../BillComponents/SideBar';
 
const Calendar = () => {
   return (
      <div className="d-flex ">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>
         <div className="col-lg-9">
            <h3>CALENDAR</h3>

         </div>
      </div>
   );
}
 
export default Calendar;