import React from 'react';
import {useSelector} from 'react-redux'

import { BookFill, 
   Calendar2DateFill, CurrencyBitcoin, GearFill, GiftFill, 
   HouseDoorFill, Lock, PersonFill } from 'react-bootstrap-icons';
 
const SideBar = () => {
   const token = useSelector(state => state.user)
   console.log(token)

   return (
      <div className="w-100 d-flex flex-col" >
      <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><PersonFill /></span>
            PERSON</button>
         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><HouseDoorFill /></span>
            DASHBORAD</button>

         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><GiftFill/></span> 
         SHEDULES</button>

         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><Calendar2DateFill /></span>
            CALENDAR</button>

         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><BookFill /></span>
            REPORTS</button>

         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><CurrencyBitcoin /></span> 
            BILLING</button>

         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><GearFill /></span>
            SETTINGS</button>
         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><Lock/></span> 
            LOG OUT</button>
      </div>
   );
}
 
export default SideBar;