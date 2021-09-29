import React from 'react';
// import FullCalendar, {dayGridPlugin} from 'fullcalendar'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/react'
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const Calendar = () => {
   console.log('Day grid plugin', dayGridPlugin)
   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3>CALENDAR</h3>
               
               <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
            </div>
         </div>
      </div>
   );
}
 
export default Calendar;