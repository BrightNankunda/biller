import React from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const CompaniesBilling = () => {
   return (
      <div>
         <AppNavbar />
         <div className="d-flex relative">
            <div className="col-lg-3 blue sticky">
               <SideBar />
            </div>

            <div className="w-100 bg-light col-lg-9 ">
               <h4>COMPANIES BILLING</h4>
            </div>
         </div>
      </div>
   );
}
 
export default CompaniesBilling;