import React from 'react';
import Navbars from './Navbars';
import SideBars from './SideBars';
 
const UserPage = () => {
   return (
      <div className="fluid-container position-relative">
         <div className="w-100 auth-user-navbar-position-absolute ">
            <Navbars />
         </div>
         <div className="row">
            <div className="col-lg-3">
               <SideBars />
            </div>
            <div className="col-lg-6 bg-primary">
               DYNAMIC SECTION
            </div>
            <div className="col-lg-3 bg-light">
               FOLLOW SECTION
            </div>
         </div>
         <div className="footer bg-dark w-100">
            Suitors Inc 2021
         </div>
      </div>
   );
}
 
export default UserPage;