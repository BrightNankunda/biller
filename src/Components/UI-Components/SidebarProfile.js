import React from 'react';
 
const SidebarProfile = () => {
   return (
      <div className="" style={{height: 94 + 'vh'}}>
         <div className="p-2 rounded border">
            <div className="row w-100">
               <img src="/logo192.png" alt="user profile"
                  className="rounded-circle"
                  style={{height: 60 + 'px', width: 60 + 'px'}}/>
            </div>
            <div className="">
               <h5 className="text-center">KK Advocates</h5>
               <h6 className="text-center">Managing Partner</h6>
               <h5 className="text-center">Nankunda BRIGHT</h5>
            </div>
         </div>
      </div>
   );
}
 
export default SidebarProfile;