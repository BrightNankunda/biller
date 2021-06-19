import {React} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

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
import SideBar from './Components/BillComponents/SideBar';
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

function App() {
  
const userLoggedIn = () => {
  if(JSON.parse(localStorage.getItem('UgBillUser'))) {
    return true
  }
}

  return (
    <Router>
        <ProtectedRoute exact={true} path="/schedules/clientToUpdate?Update=:clientId" component={UpdateClient} />
        <ProtectedRoute exact={true} path="/schedule/:scheduleId" component={SingleSchedule} />
        <ProtectedRoute exact={true} path="/schedule/client/:clientId" component={SingleClient} />
        <ProtectedRoute exact={true} path="/schedules/addClient" component={CreateClient} />
        <Route exact path="/" component={User} />
        <ProtectedRoute exact={true} path="/protectedRoute" component={ProtectedComponent} />
        <ProtectedRoute exact={true} path="/settings" component={Settings} />
        <ProtectedRoute exact={true} path="/schedules" component={ScheduleHome} />
        <ProtectedRoute exact={true} path="/reports" component={Reports} />
        <ProtectedRoute exact={true} path="/dashboard" component={Dashboard}/>
        <ProtectedRoute exact={true} path="/calendar" component={Calendar} />
        <ProtectedRoute exact={true} path="/calendar" component={Calendar} />
        <ProtectedRoute exact={true} path="/bill" component={Billing} />
        <ProtectedRoute exact={true} path="/logout" component={Logout} />
        <ProtectedRoute exact={true} path="/billing" component={Biller} />
        <ProtectedRoute exact={true} path="/schedules/clients" component={Clients} />

        <Route path="/signin" component={Signin} /> 
        <Route path="/login" component={LoginComponent} /> 
        {/* <Route component={PageNotFound} /> */}
    </Router>
  );
}

export default App;
