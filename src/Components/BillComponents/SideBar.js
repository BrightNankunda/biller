import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router'

import { BookFill, 
   Calendar2DateFill, CurrencyBitcoin, GearFill, GiftFill, 
   HouseDoorFill, Lock, PersonFill } from 'react-bootstrap-icons';
import jwtDecode from 'jwt-decode';
 
const SideBar = () => {
   const history = useHistory()

   const userToken = localStorage.getItem('UgBillToken')
   console.log('userToken', userToken)
   
   useEffect(() => {

      if(userToken === null) {
         history.replace('/login')
      }
      return () => {
         // cleanup
      }
   })

   const loggedIn = localStorage.getItem('userLoggedIn')
   console.log('SIDE BAR',loggedIn)
   const loggedInUserEmail = jwtDecode(userToken)
   console.log('SIDE BAR',loggedInUserEmail)
   const loggedInUser = loggedInUserEmail.email

   return (
      <div className="w-100 d-flex flex-col" >
         <NavLink className="btn btn-outline my-3" to={"/profile/" + loggedInUser}>
            <span className="dashboard-icons"><PersonFill /></span>
            {loggedInUser}</NavLink>

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

         <NavLink className="btn btn-outline my-3" to="/settings">
            <span className="dashboard-icons"><GearFill /></span>
            SETTINGS</NavLink>
         <NavLink className="btn btn-outline my-3" to="/logout">
            <span className="dashboard-icons"><Lock/></span> 
            LOG OUT</NavLink>
      </div>
   );
}
 
export default SideBar;