import React from 'react';
import { PlusLg } from 'react-bootstrap-icons';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const ClientReports = () => {
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="blue col-lg-3">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <div className="m-3">
                  <div className="client-report-header mb-2">
                     <h5>Reports/Clients</h5>
                  </div>
                  <div className="d-flex justify-content-between ">
                     <input className="search-client-input my-3 light-color py-2 px-1" 
                     placeholder="SEARCH A CLIENT "
                     type="text"/>

                     <div className="light-color col-lg-4 py-1 create-client d-flex my-3 justify-content-center align-content-center align-items-center">
                        <PlusLg className="my-auto nav-icon mx-2"/>
                        <h5 className="text-center">CREATE NEW CLIENT</h5>
                     </div>
                  </div>
                  <div className="light-color my-1">
                     <table className="w-100">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th scope="col-lg-2">FIRST NAME</th>
                              <th>LAST NAME</th>

                           </tr>
                        </thead>
                        <tbody>
                           <tr className="border-bottom">
                              <td>1</td>
                              <td>OGWANG</td>
                              <td>TONNY</td>
                           </tr>
                        </tbody>

                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default ClientReports;