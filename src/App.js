import {React, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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
import UpdateBill from './Components/BillComponents/UpdateBill';
import SingleBill from './Components/BillComponents/SingleBill';
import AllSchedules from './Components/DashboardComponents/AllSchedules';

function App() {
  const [loggedOut, setLoggedOut] = useState(false)
  const isAuthenticated = (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true
  useEffect(() => {
    if(isAuthenticated) {
      setLoggedOut(false)
    } else if(!isAuthenticated) {
      setLoggedOut(true)
    }
    return () => {
      // cleanup
    }
  })
  console.log('NAVBAR SAYS IS AUTHENTICATED', isAuthenticated)
  return (
    <div>
      <Router>
        {/* {!loggedOut && <AppNavbar />} */}

          <ProtectedRoute path="/schedules/clientToUpdate/:clientId" component={UpdateClient} />
          <ProtectedRoute path="/schedules/billToUpdate/:billId" component={UpdateBill} />
          <ProtectedRoute path="/schedule/bill/:billId" component={SingleBill} />
          <ProtectedRoute path="/schedule/client/:clientId" component={SingleClient} />
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
