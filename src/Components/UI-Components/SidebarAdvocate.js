import React from 'react';
import { CardChecklist, JournalRichtext, List, PencilFill, PencilSquare, QuestionDiamond } from 'react-bootstrap-icons';
 
const SidebarAdvocate = () => {
   return (
      <div className="fluid-container" style={{height: 94 + 'vh'}}>
         <div className="px-3 py-2 rounded border">
            <div className="w-100 d-flex justify-content-center">
               <img src="/logo192.png" alt="company logo"
                  className="rounded-circle"
                  style={{height: 60 + 'px', width: 60 + 'px'}}/>
            </div>
            
            <div className="d-flex flex-col justify-content-center align-items-center border-bottom ">
               <p className="xl-font font-weight-450">KK Advocates</p>
               <p className="xl-font font-weight-450">Managing Partner</p>
               <p className="xl-font font-weight-450">Nankunda BRIGHT</p>
            </div>

            <div className="my-2 px-3">
               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <CardChecklist className="new-navbar-icon"/>
                        </span>Home
                     </p>
               <p className="text-primary mx-2 mt-1 d-flex">
                  <span className="d-flex justify-content-center align-items-center px-2">
                     <CardChecklist className="new-navbar-icon"/>
                  </span>Dashboard
               </p>

               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <CardChecklist className="new-navbar-icon"/>
                        </span>Projects
                     </p>
               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PencilSquare className="new-navbar-icon"/>
                        </span>Articles
                     </p>

               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PencilFill className="new-navbar-icon"/>
                        </span>Notes
                     </p>
               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <List className="new-navbar-icon"/>
                        </span>Tasks
                     </p>
               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <QuestionDiamond className="new-navbar-icon"/>
                        </span>Indeed
                     </p>
               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <JournalRichtext className="new-navbar-icon"/>
                        </span>Skills
                     </p>
            </div>
         </div>
      </div>
   );
}
 
export default SidebarAdvocate;