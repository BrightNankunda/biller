import React from 'react';
import { CardChecklist, List, ListCheck, PencilFill, PencilSquare } from 'react-bootstrap-icons';
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
            <div className="p-2 rounded-lg shadow-sm " style={{minWidth: 1070 + 'px', maxWidth: 1100 + 'px'}}>
               <div className="w-100">
                  <h1 className="l-font text-center text-primary underline">ADVOCATE DASHBOARD</h1>
                  <div className="d-flex">
                     <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <CardChecklist className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">5</p>
                           <p className="xl-font d-block text-primary">PROJECTS</p>
                           <p className="my-0">PERSONAL: 3</p>
                           <p className="my-0">ASSIGNED: 2</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD A PROJECT">+</p>
                        </div>                    
                     </div>
                     <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <PencilSquare className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">5</p>
                           <p className="xl-font d-block text-primary">ARTICLES</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD AN ARTICLE">+</p>
                        </div>                    
                     </div>
                     <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <List className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">3</p>
                           <p className="xl-font d-block text-primary">PENDING TASKS</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD A TASK">+</p>
                        </div>                    
                     </div>
                  </div>
               </div>
               <div className="w-100">
                  <div className="d-flex">
                     <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <PencilSquare className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">4</p>
                           <p className="xl-font d-block text-primary">LEGAL TIPS</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD AN ARTICLE">+</p>
                        </div>                    
                     </div>
                     <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <ListCheck className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">3</p>
                           <p className="xl-font d-block text-primary">DRAFTS</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD A TASK">+</p>
                        </div>                    
                     </div>
                     <div className="col-lg-4 p-2">
                        <div className="border rounded border-primary w-100 h-100 d-flex justify-content-center align-items-center flex-col">
                           <PencilFill className="three-times text-primary mt-2"/>
                           <p className="l-font d-block my-0">7</p>
                           <p className="xl-font d-block text-primary">NOTES</p>
                           <p className="three-times font-weight-650 text-primary d-block cursor-pointer" title="ADD A PROJECT">+</p>
                        </div>                    
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   );
}
 
export default AdvocateDashboard;