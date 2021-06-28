import {React} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import AppNavbar from './Components/AppNavbar';
import LoginComponent from './Components/AuthComponents/LoginComponent'
import Signin from './Components/AuthComponents/Signin'
import User from './Components/UserComponents/User'
import Biller from './Components/BillComponents/Biller'
import Dashboard from './Components/DashboardComponents/Dashboard'
import Billing from './Components/DashboardComponents/billing'
import Calendar from './Components/DashboardComponents/Calendar'
import Schedules from './Components/DashboardComponents/schedules'
import Reports from './Components/DashboardComponents/reports'
import Settings from './Components/DashboardComponents/Settings'
import Logout from './Components/AuthComponents/Logout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import ProtectedComponent from './ProtectedRoute/ProtectedComponent'
import PageNotFound from './Components/PageNotFound';
import ScheduleHome from './Components/DashboardComponents/ScheduleHome';
import SingleClient from './Components/DashboardComponents/ClientComponents/SingleClient';
import CreateClient from './Components/DashboardComponents/ClientComponents/CreateClient';
import Clients from './Components/DashboardComponents/ClientComponents/Clients';
import SingleSchedule from './Components/DashboardComponents/SingleSchedule';
import UpdateClient from './Components/DashboardComponents/ClientComponents/UpdateClient';
import UpdateBill from './Components/BillComponents/UpdateBill';
import AllSchedules from './Components/DashboardComponents/AllSchedules';
import RentBilling from './Components/BillComponents/RentBilling';
import LandBilling from './Components/BillComponents/LandBilling';
import ClientsReport from './Components/Reports/ClientsReport';
import AdvocatesReport from './Components/Reports/AdvocatesReport';
import BillsReport from './Components/Reports/BillsReport';
import ProjectsReport from './Components/Reports/ProjectsReport';

function App() {
  

  return (
    <div>
      <Router>
          <ProtectedRoute path="/schedules/client/:clientId/rent" component={RentBilling} />
          <ProtectedRoute path="/schedules/client/:clientId/land" component={LandBilling} />
          <ProtectedRoute path="/schedules/client/:clientId" component={ScheduleHome} />
          <ProtectedRoute path="/schedules/clientToUpdate/:clientId" component={UpdateClient} />
          <ProtectedRoute path="/schedules/billToUpdate/:billId" component={UpdateBill} />
          <ProtectedRoute path="/schedule/bill/:billId" component={SingleSchedule} />
          <ProtectedRoute path="/schedule/client/:clientId" component={SingleClient} />
          <ProtectedRoute path="/billing/land" component={LandBilling} />
          <ProtectedRoute path="/billing/rent" component={RentBilling} />
          <ProtectedRoute path="/reports/clients" component={ClientsReport} />
          <ProtectedRoute path="/reports/advocates" component={AdvocatesReport} />
          <ProtectedRoute path="/reports/bills" component={BillsReport} />
          <ProtectedRoute path="/reports/projects" component={ProjectsReport} />
          <ProtectedRoute path="/schedules/addClient" component={CreateClient} />
          <ProtectedRoute path="/protectedRoute" component={ProtectedComponent} />
          <ProtectedRoute path="/settings" component={Settings} />
          <ProtectedRoute path="/schedules" component={ScheduleHome} />
          <ProtectedRoute path="/allschedules" component={AllSchedules} />
          <ProtectedRoute path="/reports" component={Reports} />
          <ProtectedRoute path="/dashboard" component={Dashboard}/>
          <ProtectedRoute path="/calendar" component={Calendar} />
          <ProtectedRoute path="/calendar" component={Calendar} />
          <ProtectedRoute path="/bill" component={Billing} />
          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/billing" component={Biller} />
          <ProtectedRoute path="/schedules/clients" component={Clients} />
          {/* <Route exact path="/not-found" component={PageNotFound} /> */}
          <Route exact path="/" component={User} />

          <Route path="/signin" component={Signin} /> 
          <Route path="/login" component={LoginComponent} /> 
          {/* <Redirect to="/not-found" /> */}
      </Router>
    </div>
  );
}

export default App;
