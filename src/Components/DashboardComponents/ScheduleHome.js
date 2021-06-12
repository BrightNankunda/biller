import React from 'react';
import { Link } from 'react-router-dom';
 
const ScheduleHome = () => {
   return (
      <div>
         <Link to="/schedules/addClient">Create Client</Link>
      </div>
   );
}
 
export default ScheduleHome;