import React from 'react';
import { Route } from 'react-router';
import Clients from './ClientComponents/Clients';
import ClientsLink from './ClientComponents/ClientsLink';
import CreateClient from './ClientComponents/CreateClient';
import SingleClient from './ClientComponents/SingleClient';
import ScheduleHome from './ScheduleHome';
 
const Schedules = () => {
   return (
      <div>
         <div className="main">
            <Route exact path="/schedules/client/:clientId" component={SingleClient} />
            <Route path="/schedules" component={ScheduleHome} />
            <Route path="/schedules/addClient" component={CreateClient} />
            <Route path="/schedules/clients" component={Clients} />
         </div>
         
      </div>
   );
}
 
export default Schedules;