import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../BillComponents/SideBar';
import AllSchedules from './AllSchedules';
 
const ScheduleHome = () => {
   return (
      <div className="d-flex flex-col">
         <AllSchedules />
         <div className="w-100">
            <Link to="/schedules/addClient">Create Client</Link>
         </div>
      </div>
   );
}
 
export default ScheduleHome;