import React from 'react';
 
const Settings = () => {
   return (
      <div>
         <AppNavBar />
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