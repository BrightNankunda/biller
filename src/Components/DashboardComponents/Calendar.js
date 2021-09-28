import FullCalendar from '@fullcalendar/react';
import React from 'react';
import AppNavbar from '../AppNavbar';
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
               <FullCalendar displayEventEnd="true" />
            </div>
         </div>
      </div>
   );
}
 
export default Calendar;