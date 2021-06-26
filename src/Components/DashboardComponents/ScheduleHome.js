import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
import AllSchedules from './AllSchedules';
 
const ScheduleHome = (props) => {

   const goToRoute = (routeName) => {
      props.history.push('/billing' + routeName)
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
               <div onClick={() => goToRoute('/companies')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4" >
                     <h4 className="mx-2">THIRD SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>COMPANIES</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/tradeMarks')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4">
                     <h4 className="mx-2">FORTH SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>TRADEMARKS, PATENTS AND CHATTELS TRANSFER</h4>
                  </div>
               </div>
               <div onClick={() => goToRoute('/business')} className="rounded-mid m-2 my-2 cursor-pointer py-2 bg-white d-flex w-100 px-3">
                  <div className="col-lg-4">
                     <h4 className="mx-2">FIFTH SCHEDULE</h4>
                  </div>
                  <div className="col-lg-8 ">
                     <h4>BUSINESS</h4>
                  </div>
               </div>
            </div>
            <div className="w-100 d-flex m-2 mx-auto">
               <h6 className="d-flex justify-content-center p-4 bg-white">
                  <Link to="/schedules/addClient">CREATE CLIENT</Link>
               </h6>
               <h6 className="d-flex justify-content-center p-4 bg-white">
                  <Link to="/schedules/clients">CLIENTS</Link>
               </h6>
               <h6 className="d-flex justify-content-center p-4 bg-white">
                  <Link to="/allschedules">ALL BILLS</Link>
               </h6>
               {/* <h3 className="d-flex justify-content-center p-4 bg-white">
                  <Link to="/allBills">ALL BILLS</Link>
               </h3> */}
            </div>
         </div>
      </div>
      </div>
   );
}
 
export default ScheduleHome;