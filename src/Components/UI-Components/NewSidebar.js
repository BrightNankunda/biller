import React from 'react';
import { Calendar2Day, Calendar2Event, Calendar2Month, Paperclip, PatchExclamation, PatchPlus, People } from 'react-bootstrap-icons';
 
const SideBars = () => {
   return (
      <div className="fluid-container">
         <div className="" style={{minHeight: 97+'vh'}}>
            <div className="w-100">
               <div className="h-100 border rounded px-2 py-1">
               
                  <div className="py-1 mb-2 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Calendar2Month className="new-navbar-icon"/>
                        </span>Check your events
                     </p>
                     <p className="mx-auto">6</p>
                  </div>
                  <div className="py-1 mb-2 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PatchExclamation className="new-navbar-icon"/>
                        </span>Seek Legal Aid
                     </p>
                  </div>

                  <div className="py-1 mb-2 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PatchExclamation className="new-navbar-icon"/>
                        </span>Legal Tips
                     </p>
                     <p>4</p>
                  </div>

                  <div className="py-1 mb-2 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Calendar2Event className="new-navbar-icon"/>
                        </span>Tasks
                     </p>
                     <p className="mx-auto">11</p>
                  </div>
                  <div className="py-1 mb-2 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Calendar2Day className="new-navbar-icon"/>
                        </span>Calendar
                     </p>
                  </div>
               
                  <div className="py-1 mb-3 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <People className="new-navbar-icon"/>
                        </span>Friends
                     </p>
                     <p className="mx-auto">215</p>
                  </div>
                  

                  <div className="py-1 mb-3 d-flex cursor-pointer justify-content-between">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Paperclip className="new-navbar-icon"/>
                        </span>Articles
                     </p>
                     <p className="mx-auto">9</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default SideBars;