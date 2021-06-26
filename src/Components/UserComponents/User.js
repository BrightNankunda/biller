import React from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from '../BillComponents/SideBar';
import UserData from './UserData';

const User = (props) => {
   return ( 
      <div>
         <AppNavbar />
      
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">

               <UserData />
            </div>
         </div>
      </div>
    );
}
 
export default User;