import React from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const Report = (props) => {

   const goToRoute = (routeName) => {
      props.history.push('/reports' + routeName)
   }
   return (
      
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <div className="col-lg-12 p-4">
                  <div className="d-flex mx-2 row ">
                     <div onClick={()=> goToRoute('/clients')} className="report-divs rounded-mid bg-light col-lg-5 m-4">
                        <h4>CLIENTS</h4>
                     </div>
                     <div onClick={()=> goToRoute('/bills')} className="report-divs rounded-mid bg-light col-lg-5 m-4">
                        <h4>BILLS</h4>
                     </div>
                  </div>
                  <div className="d-flex mx-2 row">
                     <div onClick={()=> goToRoute('/projects')} className="report-divs rounded-mid bg-light col-lg-5 m-4">
                        <h4>PROJECTS</h4>
                     </div>
                     <div onClick={()=> goToRoute('/advocates')} className="report-divs rounded-mid bg-light col-lg-5 m-4">
                        <h4>ADVOCATES</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>   
      </div>
   );
}
 
export default Report;