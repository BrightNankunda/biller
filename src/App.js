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

function App() {
  
const userLoggedIn = () => {
  if(JSON.parse(localStorage.getItem('UgBillUser'))) {
    return true
  }
}

  return (
    <Router>
        <Route exact path="/" component={User} />
        <ProtectedRoute exact={true} path="/protectedRoute" component={ProtectedComponent} />
        <Route exact path="/dashboard" component={Dashboard}/>

        <Route path="/settings" component={Settings}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/schedules" component={Schedules}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/billing" component={Biller}/>
        <Route path="/bill" component={Biller}/>
        <Route path="/logout" component={Logout} />

        <Route path="/signin" component={Signin} /> 
        <Route path="/login" component={LoginComponent} /> 
        {/* <Route component={PageNotFound} /> */}
    </Router>
  );
}

export default App;
