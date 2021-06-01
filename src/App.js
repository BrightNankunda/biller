import {React} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import AppNavbar from './Components/AppNavbar';
import LoginComponent from './Components/AuthComponents/LoginComponent'
import Signin from './Components/AuthComponents/Signin'
import User from './Components/UserComponents/User'
import Biller from './Components/BillComponents/Biller'


function App() {
  return (
    <Router>
    <AppNavbar/>
    <div className="main">
      <Route exact path="/" component={User} />
      <Route path="/bill" component={Biller} />
      <Route path="/signin" component={Signin} />
      <Route path="/login" component={LoginComponent} />
    </div>

    </Router>
  );
}

export default App;
