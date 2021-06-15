import React from 'react';
import SideBar from '../BillComponents/SideBar';
import UserData from './UserData';

const User = (props) => {
   return ( 
      <div className="d-flex">
      <div className="col-lg-3 blue">
         <SideBar />
      </div>
      <div className="col-lg-9">

         <UserData />
      </div>
      </div>
    );
}
 
export default User;