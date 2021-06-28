import React from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const Settings = () => {
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h2>SETTINGS</h2> 
            </div>
         </div>
      </div>
   );
}
 
export default Settings;