import React from 'react';
import { ForwardFill, PersonFill } from 'react-bootstrap-icons';
import SideBar from '../BillComponents/SideBar';
import Calendar from './Calendar';
import LineGraph from './LineGraph';
 
const Dashboard = (props) => {

   return (
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />

         </div>
         <div className="col-lg-9 w-100 bg-light">
            <div className="w-100 m-1">
               <div className="col-lg-12 bg-white row top-bar w-100 d-flex justify-content-end align-content-center">

                  <PersonFill className="my-auto mx-2 two-times"/>
                  <h3 className="lead mx-1 my-2" >ADMIN DASHBOARD</h3>
                  <ForwardFill className="my-auto mx-2 two-times"/>
               </div>
               <div className="d-flex w-100">
                  <div className="clients-count col-lg-4 m-2 rounded bg-white">
                     <h4>21 CLIENTS</h4>
                  </div>
                  <div className="projects col-lg-4 m-2 rounded bg-white">
                     <h4>31 PROJECTS</h4>
                  </div>
                  <div className="advocates col-lg-4 m-2 rounded bg-white">
                     <h4>42 ADVOCATES</h4>
                  </div>
               </div>
            </div>
            <div className="d-flex m-1 forty-height">
               <div className="col-lg-7 bg-white m-2">
                  <LineGraph />
               </div>
               <div className="col-lg-5 bg-white m-2 forty-height">
                  <Calendar />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Dashboard;