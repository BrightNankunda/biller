import React from 'react';
import SideBar from '../BillComponents/SideBar';
 
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
      
         <div className="col-lg-9 d-flex justify-content-between bg-light">
            <button onClick={pushRouter}>Push Router</button>
            <button onClick={replaceRouter}>Replace Router</button>
         </div>
      </div>
   );
}
 
export default Dashboard;