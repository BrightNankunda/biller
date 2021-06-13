import React from 'react';
import {Link} from 'react-router-dom'
const ClientsLink = () => {
   return (
      <div className="w-100">
         <div className="d-flex justify-content-center">
            <Link to="/schedules/clients">All Clients</Link>
         </div>
         
      </div>
   );
}
 
export default ClientsLink;