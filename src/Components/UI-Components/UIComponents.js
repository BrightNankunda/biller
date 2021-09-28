import React, { useState } from 'react';
import Buttons from './Buttons';
import Cards from './Cards';
import Forms from './Forms';
import FriendsSidebar from './FriendsSidebar';
import Modals from './Modals';
import Navbars from './Navbars';
import SearchForms from './SearchForms';
import SidebarAdvocate from './SidebarAdvocate';
import NewSidebar from './NewSidebar'
import SidebarProfile from './SidebarProfile';
import SideBars from './SideBars';
import VerificationForms from './VerificationForms';
import Tables from './Tables';
import NewArticle from './NewArticle'
import CreateCompanyForm from './CreateCompanyForm';
import AppModal from './AppModal';
import { Modal, Button } from 'react-bootstrap';
 
const UIComponents = () => {

   const [show, setShow] = useState(false);
   const [showModal, setShowModal] = useState(false);


   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div className="fluid-container" style={{minHeight: 95 + 'vh'}}>
         <h4 className="text-center text-primary border-bottom mt-2">UI COMPONENTS</h4>
         <div className="w-100 my-3">
            <h5 className="text-center">NAV BARS</h5>
            <Navbars />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">SEARCH FORMS</h5>
            <SearchForms />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">SIDE BARS</h5>
            <div className="d-flex">
               <SideBars />
               <FriendsSidebar />
               <SidebarProfile />
               <SidebarAdvocate />
               <NewSidebar />
            </div>
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">VERIFICATION FORMS</h5>
            <VerificationForms />
            <CreateCompanyForm />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">BUTTONS</h5>
            <Buttons />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">FORMS</h5>
            <Forms />
         </div>

         <div className="w-100 my-3">
            <h5 className="text-center">CARDSss</h5>
            <Cards />

            <NewArticle />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">TABLES</h5>
            <Tables />
         </div>
         <div>
            <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form className="border rounded-sm p-3">
                     {/* FORM INPUTS, CHECKBOXES */}
                        <div class="form-group">
                           <label htmlFor="fname">First Name</label>
                           <input type="fname" class="form-control form-control-sm" id="fname" placeholder="Enter first name"/>
                        </div>
                        <div class="form-group">
                           <label for="lname">Last Name</label>
                           <input type="lname" class="form-control form-control-sm" id="lname" placeholder="Enter last name"/>
                        </div>
                        <div class="form-group">
                           <label for="uname">User Name</label>
                           <input type="uname" class="form-control form-control-sm" id="uname" placeholder="Enter your User name"/>
                        </div>
                        <div class="form-group">
                           <label for="email">Email address</label>
                           <input type="email" class="form-control form-control-sm" id="email" placeholder="name@ugbill.com"/>
                        </div>
                        <div class="form-group">
                           <label for="password">Password</label>
                           <input type="password" class="form-control form-control-sm" id="password" placeholder="Enter Password"/>
                        </div>
                        <div class="form-group">
                           <label for="password">Confirm Password</label>
                           <input type="password" class="form-control form-control-sm" id="password" placeholder="Enter Password"/>
                        </div>
                        
                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" id="check"/>
                           <label class="form-check-label" for="check">
                              Check me To Enable Button, Keep me logged In?
                           </label>
                        </div>
                     
                        <div className="d-flex justify-content-center mb-2">
                           <button className="custom-blue-button" >Submit</button>
                        </div>
                  
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="warning" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
            </Modal>
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">MODALS</h5>
            <Modals />
         </div>
      </div>
   );
}
  
export default UIComponents;