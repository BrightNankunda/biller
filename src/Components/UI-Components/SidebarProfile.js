import React from 'react';
import { JournalBookmark, JournalRichtext, List, PencilFill, PencilSquare, People, PersonCircle, QuestionDiamond } from 'react-bootstrap-icons';
 
const SidebarProfile = () => {
   return (
      <div className="" style={{height: 94 + 'vh'}}>
         <div className="px-3 py-2 ">

            <div className="my-2 px-3 border rounded bg-white">
               <p className="text-primary mx-2 mt-1 d-flex ">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <People className="new-navbar-icon"/>
                        </span>Connections
                     </p>
               <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PersonCircle className="new-navbar-icon"/>
                        </span>Groups
                     </p>

               <p className="text-primary mx-2 mt-1 d-flex ">
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
                           <JournalBookmark className="new-navbar-icon"/>
                        </span>Education
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
               <hr/>
               <div className="my-2 px-3 border rounded bg-white">
                  <p className="text-primary mx-2 mt-1 d-flex ">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PencilSquare className="new-navbar-icon"/>
                        </span>Articles
                     </p>
                  <p className="text-primary mx-2 mt-1 d-flex">
                        <span className="d-flex justify-content-center align-items-center px-2">
                           <PencilFill className="new-navbar-icon"/>
                        </span>Notes
                     </p>
               </div>
         </div>
      </div>
   );
}
 
export default SidebarProfile;