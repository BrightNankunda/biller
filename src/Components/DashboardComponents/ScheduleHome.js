import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../BillComponents/SideBar';
import AllSchedules from './AllSchedules';
 
const ScheduleHome = () => {
   return (
      <div className="d-flex flex-col">
         <AllSchedules />
         <div className="w-100 bg-light">
            <h3 className="d-flex justify-content-center p-4 bg-white">
               <Link to="/schedules/addClient">CREATE CLIENT</Link>
            </h3>
            <h3 className="d-flex justify-content-center p-4 bg-white">
               <Link to="/schedules/clients">CLIENTS</Link>
            </h3>
            <h3 className="d-flex justify-content-center p-4 bg-white">
               <Link to="/billing">CREATE BILL</Link>
            </h3>
            {/* <h3 className="d-flex justify-content-center p-4 bg-white">
               <Link to="/allBills">ALL BILLS</Link>
            </h3> */}
         </div>
      </div>
   );
}
 
export default ScheduleHome;