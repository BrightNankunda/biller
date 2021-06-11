import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'

import { BookFill, 
   Calendar2DateFill, CurrencyBitcoin, GearFill, GiftFill, 
   HouseDoorFill, Lock, PersonFill } from 'react-bootstrap-icons';
import jwtDecode from 'jwt-decode';
 
const SideBar = () => {
   
   const dispatch = useDispatch()

   const userToken = useSelector(state => state.user)
   console.log('userToken', userToken)

   if(userToken === null) {
      window.location = '/login'
   }

   const logged = localStorage.getItem('UgBillToken')
   const loggedInUserEmail = jwtDecode(logged)
   const loggedInUser = loggedInUserEmail.user.email

   const logout = () => {
      // dispatch({type: logoutUser})
      localStorage.removeItem('UgBillToken')
      if(localStorage.getItem('UgBillToken') === undefined) {
         // window.location = '/login'
         history.push('/login')
      }
   }

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
         <button className="btn btn-outline my-3" onClick={logout}>
            <span className="dashboard-icons"><Lock/></span> 
            LOG OUT</button>
      </div>
   );
}
 
export default SideBar;