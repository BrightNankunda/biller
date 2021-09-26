import React from 'react';
import { JournalBookmark, PencilFill, PencilSquare, People, PersonCircle } from 'react-bootstrap-icons';
 
const SidebarProfile = () => {
   return (
      <div className="" style={{height: 94 + 'vh'}}>
         <div className="px-3 py-2 ">
         {/* rounded border */}
            <div className="w-100 d-flex justify-content-center">
               <img src="/logo192.png" alt="user profile"
                  className="rounded-circle"
                  style={{height: 60 + 'px', width: 60 + 'px'}}/>
            </div>
            {/* border-bottom */}
            <div className="d-flex flex-col justify-content-center align-items-center">
               <p className="xl-font font-weight-450 text-white">KK Advocates</p>
               <p className="xl-font font-weight-450 text-secondary">Managing Partner</p>
               <p className="xl-font font-weight-450 text-white">Nankunda BRIGHT</p>
            </div>

            <div className="my-2 px-3">
               <p className="text-white mx-2 mt-1 d-flex ">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <People className="new-navbar-icon"/>
                        </span>Connections
                     </p>
               <p className="text-white mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PersonCircle className="new-navbar-icon"/>
                        </span>Groups
                     </p>

               <p className="text-white mx-2 mt-1 d-flex ">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PencilSquare className="new-navbar-icon"/>
                        </span>Articles
                     </p>
               <p className="text-white mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PencilFill className="new-navbar-icon"/>
                        </span>Notes
                     </p>
               <p className="text-white mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <JournalBookmark className="new-navbar-icon"/>
                        </span>Education
                     </p>
            </div>
         </div>
      </div>
   );
}
 
export default SidebarProfile;