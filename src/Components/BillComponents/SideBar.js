import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import { BookFill, 
   Calendar2DateFill, 
   CurrencyBitcoin, GearFill, GiftFill, 
   HouseDoorFill, Keyboard, PersonFill } from 'react-bootstrap-icons';
// import jwtDecode from 'jwt-decode';
 
const SideBar = () => {

   const loggedIn = JSON.parse(localStorage.getItem('UgBillUser'))
   const isAuthenticated = (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true

   console.log(loggedIn);
   useEffect(() => {
      console.log('SIDE BAR');
      return () => {
         // cleanup
      }
   })

   return (
      <div className="w-100 d-flex flex-col full-height">

         {isAuthenticated && 
            <div className="d-flex justify-content-center my-3">
               <div className="circle user-icon my-auto mr-2">
                  <span ><PersonFill className="my-auto blue"/></span>
               </div>
               <h6 className="text-white my-3 my-auto" >
               {loggedIn.AuthedUser.email}</h6>
            </div>}

         <NavLink className="btn btn-outline my-3" to="/dashboard">
            <span className="dashboard-icons"><HouseDoorFill /></span>
            DASHBORAD</NavLink>

         <NavLink className="btn btn-outline my-3" to="/schedules">
            <span className="dashboard-icons"><GiftFill/></span> 
         SHEDULES</NavLink>

         <NavLink className="btn btn-outline my-3" to="/calendar">
            <span className="dashboard-icons"><Calendar2DateFill /></span>
            CALENDAR</NavLink>

         <NavLink className="btn btn-outline my-3" to="/reports">
            <span className="dashboard-icons"><BookFill /></span>
            REPORTS</NavLink>

         <NavLink className="btn btn-outline my-3" to="/billing">
            <span className="dashboard-icons"><CurrencyBitcoin /></span> 
            BILLING</NavLink>
         
         <NavLink className="btn btn-outline my-3 d-flex flex-align-content-center justify-content-around align-items-center" to="/ui-components">
            <span className="dashboard-icons"><Keyboard  /> UI Components</span> 
            </NavLink>

         {/* <NavLink className="btn btn-outline my-3" to="/settings">
            <span className="dashboard-icons"><GearFill /></span>
            SETTINGS</NavLink> */}
      </div>
   );
}
 
export default SideBar;