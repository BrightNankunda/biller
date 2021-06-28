import React from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const ProjectsReport = () => {
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
                     <h5>Reports/Projects</h5>
                  </div>
                  
                  <div className="light-color my-1 pb-3 pt-2 px-5 projects-table">
                     <table className="w-100">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>FIRST NAME</th>
                              <th>SCHEDULE</th>
                              <th>AMOUNT</th>
                              <th>BILL</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="border-bottom border-dark">
                              <td>1</td>
                              <td>OGWANG</td>
                              <td>LAND SCHEDULE</td>
                              <td>5421000</td>
                              <td>75410000</td>
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
 
export default ProjectsReport;