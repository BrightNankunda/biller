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

function App() {

  const userLoggedIn = localStorage.getItem('userLoggedIn')
  console.log(userLoggedIn)

  return (
    <Router>
    {/* <AppNavbar/> */}
    {userLoggedIn &&
    <div className="d-flex">
      <div className="col-lg-3 blue" style={{"min-height": "95vh"}}>
          <SideBar />
      </div> 
       
      <div className="main col-lg-9">

        <Route exact path="/" component={User} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/reports" component={Reports} />
        <Route path="/schedules" component={Schedules} />
        <Route path="/calendar" component={Calendar} />
        {/* <Route path="/billing" component={Billing} /> */}
        <Route path="/billing" component={Biller} />
        <Route path="/logout" component={Logout} />
      </div> 
    </div>}

      {!userLoggedIn && 
      <Route path="/signin" component={Signin} /> }
      {!userLoggedIn && <Route path="/login" component={LoginComponent} /> }
    </Router>
  );
}

export default App;
