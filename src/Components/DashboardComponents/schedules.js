import React from 'react';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute'
import SideBar from '../BillComponents/SideBar';
import Clients from './ClientComponents/Clients';
import ClientsLink from './ClientComponents/ClientsLink';
import CreateClient from './ClientComponents/CreateClient';
import SingleClient from './ClientComponents/SingleClient';
import ScheduleHome from './ScheduleHome';
 
const Schedules = () => {
   return (
      <div>
         <div className="main d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <ProtectedRoute exact={true} path="/schedule/client/:clientId" component={SingleClient} />
               <ProtectedRoute exact={true} path="/schedules/addClient" component={CreateClient} />
               <ProtectedRoute exact={true} path="/schedules/clients" component={Clients} />
            </div>
         </div>
         
      </div>
   );
}
 
export default Schedules;