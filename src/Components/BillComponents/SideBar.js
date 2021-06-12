import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'

import { BookFill, 
   Calendar2DateFill, CurrencyBitcoin, GearFill, GiftFill, 
   HouseDoorFill, Lock, PersonFill } from 'react-bootstrap-icons';
import jwtDecode from 'jwt-decode';
import { LogoutUser } from '../../Actions/UserActions';
 
const SideBar = (props) => {
   
   const dispatch = useDispatch()

   const userToken = useSelector(state => state.user)
   console.log('userToken', userToken)
   console.log('props', props)

   useEffect(() => {
      if(userToken === null) {
         window.location = '/login'
      }
      
      return () => {
         // cleanup
      }
   })

   const loggedIn = localStorage.getItem('userLoggedIn')
   console.log(loggedIn)
   const loggedInUserEmail = jwtDecode(userToken)
   const loggedInUser = loggedInUserEmail.user.email



   const logout = () => {
      dispatch(LogoutUser())
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