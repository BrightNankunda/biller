import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
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
            <div className="col-lg-9 pl-2 bg-light">

               <div className="bg-white w-100 rounded p-2">
                  <FullCalendar
                  plugins={[ dayGridPlugin ]}
                  initialView="dayGridMonth"
                  events={[
                     { title: 'Developing', date: '2021-09-30' },
                     { title: 'Working', date: '2021-10-03' }
                  ]}
                  />
                  
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Calendar;