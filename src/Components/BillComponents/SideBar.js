import React from 'react';
import { Calendar2DateFill, CurrencyBitcoin, GearFill, GiftFill, HouseDoorFill } from 'react-bootstrap-icons';
 
const SideBar = () => {
   return (
      <div className="w-100 d-flex flex-col" >
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
            <span className="dashboard-icons"><CurrencyBitcoin /></span> 
            BILLING</button>

         <button className="btn btn-outline my-3">
            <span className="dashboard-icons"><GearFill /></span>
            SETTINGS</button>
      </div>
   );
}
 
export default SideBar;