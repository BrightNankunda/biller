import React from 'react';
import { Paperclip, PatchPlus, People } from 'react-bootstrap-icons';
 
const SideBars = () => {
   return (
      <div className="fluid-container">
         <div className="" style={{minHeight: 97+'vh'}}>
            <div className="w-100 p-4">
               <div className="h-100 border rounded" style={{minHeight: 45 + 'vh'}}>
               
                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <People className="new-navbar-icon"/>
                        </span>Check for Friends
                     </p>
                     <p className="mx-auto">Increase your legal community</p>
                  </div>
                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PatchPlus className="new-navbar-icon"/>
                        </span>Give Legal Aid
                     </p>
                     <p className="mx-auto">Help the ones indeed</p>
                  </div>

                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Paperclip className="new-navbar-icon"/>
                        </span>Create an Article
                     </p>
                     <p className="mx-auto">Give Legal Advice</p>
                  </div>
               </div>
            </div>
            <div className="w-100 p-4">
               <div className="h-100 w-100 border rounded" style={{minHeight: 45 + 'vh'}}>
               
                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <People className="new-navbar-icon"/>
                        </span>Check for Friends
                     </p>
                     <p className="mx-auto">Increase your legal community</p>
                  </div>
                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PatchPlus className="new-navbar-icon"/>
                        </span>Give Legal Aid
                     </p>
                     <p className="mx-auto">Help the ones indeed</p>
                  </div>

                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Paperclip className="new-navbar-icon"/>
                        </span>Create an Article
                     </p>
                     <p className="mx-auto">Give Legal Advice</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default SideBars;