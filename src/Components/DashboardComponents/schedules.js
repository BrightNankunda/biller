import React from 'react';
import { Route } from 'react-router';
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
               <Route exact path="/schedules/client/:clientId" component={SingleClient} />
               <Route  exact path="/schedules" component={ScheduleHome} />
               <Route exact path="/schedules/addClient" component={CreateClient} />
               <Route path="/schedules/clients" component={Clients} />
            </div>
         </div>
         
      </div>
   );
}
 
export default Schedules;