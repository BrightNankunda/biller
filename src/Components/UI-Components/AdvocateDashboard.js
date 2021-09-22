import React from 'react';
import Navbars from './Navbars';
import SidebarAdvocate from './SidebarAdvocate';
 
const AdvocateDashboard = () => {
   return (
      <div className="fluid-container">
         <Navbars />
         <div className="d-flex mt-2">
            <div className="mx-3" style={{minWidth: 230 + 'px', maxWidth: 260 + 'px'}}>
               <SidebarAdvocate />
            </div>
            <div className="col-lg-9">
               Analytics
            </div>
         </div>
      </div>
   );
}
 
export default AdvocateDashboard;