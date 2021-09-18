import React from 'react';
import { BagCheck, HouseDoor, Messenger, PersonCircle, PersonFill } from 'react-bootstrap-icons';
 
const Navbars = () => {
   return (
      <div className="fluid-container">
         <div className="d-flex border-bottom">
            <h4 className="text-primary">Suitors</h4>
            <form className="ml-2 col-lg-3">
               <input type="text" className="form-control form-control-sm new-navbar-search bg-light" placeholder="search" />
            </form>
            <div className="mx-auto d-flex"> 
               <p className="text-primary mx-2 my-auto d-flex justify-content-center ">
                  <span className="d-flex justify-content-center align-items-center px-2">
                     <HouseDoor className="new-navbar-icon"/>
                  </span>Home
               </p>
               <p className="text-primary mx-2 my-auto d-flex justify-content-center ">
                  <span className="d-flex justify-content-center align-items-center px-2">
                     <PersonFill className="new-navbar-icon"/>
                  </span>Counsel
               </p>
               <p className="text-primary mx-2 my-auto d-flex justify-content-center ">
                  <span className="d-flex justify-content-center align-items-center px-2">
                     <PersonCircle className="new-navbar-icon"/>
                  </span>Advocate
               </p>
               <p className="text-primary mx-2 my-auto d-flex justify-content-center ">
                  <span className="d-flex justify-content-center align-items-center px-2">
                     <Messenger className="new-navbar-icon"/>
                  </span>Messages
               </p>
               <p className="text-primary mx-2 my-auto d-flex justify-content-center ">
                  <span className="d-flex justify-content-center align-items-center px-2">
                     <BagCheck className="new-navbar-icon"/>
                  </span>Notifications
               </p>
            </div>
            <div className="ml-auto mr-2 d-flex justify-content-center align-item-center">
               <div className="user-initials m-auto p-1 my-auto cursor-pointer">
                  <h5 className="md-font">NB</h5>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Navbars;