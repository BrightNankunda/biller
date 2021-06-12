import React from 'react';
import { Route } from 'react-router';
import CreateClient from './ClientComponents/CreateClient';
import ScheduleHome from './ScheduleHome';
 
const Schedules = () => {
   return (
      <div>

      <Route exact path="/schedules" component={ScheduleHome} />
      <Route path="/schedules/addClient" component={CreateClient} />
      </div>
   );
}
 
export default Schedules;