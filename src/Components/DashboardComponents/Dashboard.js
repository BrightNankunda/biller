import React from 'react';
 
const Dashboard = (props) => {
   const pushRouter = () => {
      props.history.push("/pushed")
   }
   const replaceRouter = () => {
      props.history.replace("/replace")
   }
   return (
      <div className="d-flex justify-content-between bg-light">
         <button onClick={pushRouter}>Push Router</button>
         <button onClick={replaceRouter}>Replace Router</button>
      </div>
   );
}
 
export default Dashboard;