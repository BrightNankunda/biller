import {React} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
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

function App() {
  return (
    <Router>
    <AppNavbar/>
    <div className="main">
      <Route exact path="/" component={User} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route path="/reports" component={Reports} />
      <Route path="/schedules" component={Schedules} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/billing" component={Billing} />
      <Route path="/bill" component={Biller} />
      <Route path="/signin" component={Signin} />
      <Route path="/login" component={LoginComponent} />
    </div>

    </Router>
  );
}

export default App;
