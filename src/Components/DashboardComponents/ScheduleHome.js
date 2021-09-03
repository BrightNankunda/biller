import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
 
const ScheduleHome = (props) => {

   const goToRoute = (routeName) => {
      let url = props.match.url
      let path = props.match.path
      // path + LAND
      // "/reports/client/:clientId/land"
      // and we match the client id and pass it to redux in the back end
      if(path === "/schedules/createBill/:clientId") {
         props.history.push( url + routeName)
      } else {
         props.history.push('/billing' + routeName)
      }
   }

   return (
      <div>
      <AppNavbar />
      <div className="d-flex">
         <div className="col-lg-3 blue full-height">
            <SideBar />
         </div>
         <div className="col-lg-9 bg-light d-flex flex-col w-100">
            <div className="schedules d-flex flex-col justify-content-center">
               <div onClick={() => goToRoute('/land')} className="row rounded-mid m-2 my-3 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  
                  <div className="col-lg-12">
                     <h4 className="text-center">LAND</h4>
                  </div>
               </div>
               <div  onClick={() => goToRoute('/rent')} className="rounded-mid m-2 my-3 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  
                  <div className="col-lg-12 ">
                     <h4 className="text-center">RENT</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/criminal')} className="rounded-mid m-2 my-3 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-12 ">
                     <h4 className="text-center">CRIMINAL SCHEDULE</h4>
                  </div>
               </div>

               <div onClick={() => goToRoute('/companies')} className="rounded-mid m-2 my-3 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  
                  <div className="col-lg-12 ">
                     <h4 className="text-center">COMPANIES</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/debentures')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-12 ">
                     <h4 className="text-center">DEBENTURES</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/family')} className="rounded-mid m-2 my-3 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-12 ">
                     <h4 className="text-center">FAMILY PRACTICE</h4>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
      </div>
   );
}
 
export default ScheduleHome;