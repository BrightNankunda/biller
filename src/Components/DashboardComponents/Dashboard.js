import React from 'react';
import SideBar from '../BillComponents/SideBar';
import Calendar from './Calendar';
import LineGraph from './LineGraph';
 
const Dashboard = (props) => {
   const pushRouter = () => {
      props.history.push("/pushed")
   }
   const replaceRouter = () => {
      props.history.replace("/replace")
   }
   return (
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />

         </div>
         <div className="col-lg-9 w-100 bg-light">
            <div className=" m-1">
               <div className="row top-bar w-100 d-flex justify-content-end">
                  PersonIcon
                  <h3 >ADMIN </h3>
                  ForwardIcon
               </div>
               <div className="d-flex w-100">
                  <div className="clients-count col-30 m-2 rounded bg-white">
                     <h4>21 CLIENTS</h4>
                  </div>
                  <div className="projects col-30 m-2 rounded bg-white">
                     <h4>31 PROJECTS</h4>
                  </div>
                  <div className="advocates col-30 m-2 rounded bg-white">
                     <h4>42 ADVOCATES</h4>
                  </div>
               </div>
            </div>
            <div className="d-flex m-1">
               <div className="col-lg-6">
                  <LineGraph />
               </div>
               <div className="col-lg-3">
                  <Calendar />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Dashboard;