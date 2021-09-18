import React from 'react';
import { Paperclip, PatchPlus, People } from 'react-bootstrap-icons';
 
const SideBars = () => {
   return (
      <div className="fluid-container">
         <div className="" style={{minHeight: 97+'vh'}}>
            <div className="h-100 col-lg-2 border rounded-sm m-2" style={{minHeight: 45 + 'vh'}}>
               
                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <People className="new-navbar-icon"/>
                        </span>Check for Friends
                     </p>
                     <p className="xs-font mx-auto">Increase your counsel community</p>
                  </div>
                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PatchPlus className="new-navbar-icon"/>
                        </span>Give Legal Aid
                     </p>
                     <p className="xs-font mx-auto">Help the ones indeed</p>
                  </div>

                  <div className="py-1 mb-3 d-flex flex-col cursor-pointer">
                     <p className="text-primary mx-2 mt-1 d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <Paperclip className="new-navbar-icon"/>
                        </span>Create an Article
                     </p>
                     <p className="xs-font mx-auto">Give Legal Advice</p>
                  </div>
            </div>
         </div>
      </div>
   );
}
 
export default SideBars;