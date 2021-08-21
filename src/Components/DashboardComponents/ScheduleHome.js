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
               <div onClick={() => goToRoute('/land')} className="row rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4"  >
                     <h4 className="mx-2">FIRST SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>LAND</h4>
                  </div>
               </div>
               <div  onClick={() => goToRoute('/rent')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4">
                     <h4 className="mx-2">SECOND SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>RENT</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/criminal')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4" >
                     <h4 className="mx-2">THIRD SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>CRIMINAL SCHEDULE</h4>
                  </div>
               </div>

               <div onClick={() => goToRoute('/companies')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4" >
                     <h4 className="mx-2">FORTH SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>COMPANIES</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/tradeMarks')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4">
                     <h4 className="mx-2">FIFTH SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>TRADEMARKS, PATENTS AND CHATTELS TRANSFER</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/business')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4">
                     <h4 className="mx-2">SIXTH SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>BUSINESS</h4>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
      </div>
   );
}
 
export default ScheduleHome;