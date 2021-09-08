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
import BillOutput from './Components/BillComponents/BillOutput';
import Criminal from './Components/BillComponents/Criminal';
import CriminalOutput from './Components/BillComponents/CriminalOutput';
import SingleCriminal from './Components/DashboardComponents/SingleCriminal';
import UpdateCriminal from './Components/BillComponents/UpdateCriminal';
import CompaniesBilling from './Components/BillComponents/CompaniesBilling';
import FamilyBilling from './Components/BillComponents/FamilyBilling';
import DebenturesBilling from './Components/BillComponents/DebenturesBilling';
import CompanyOutput from './Components/BillComponents/CompanyOutput';
import SingleCompanyBill from './Components/DashboardComponents/SingleCompanyBill';
import UpdateCompanyBill from './Components/BillComponents/UpdateCompanyBill';


function App() {
  

  return (
    <div>
      <Router>
          <ProtectedRoute path="/schedules/createBill/:clientId" component={ScheduleHome} />
          <ProtectedRoute path="/schedules/createBill/:clientId/rent" component={RentBilling} />
          <ProtectedRoute path="/schedules/createBill/:clientId/land" component={LandBilling} />
          <ProtectedRoute path="/schedules/createBill/:clientId/criminal" component={Criminal} />
          <ProtectedRoute path="/reports/client/:clientId" component={SingleClient} />
          <ProtectedRoute path="/reports/clientToUpdate/:clientId" component={UpdateClient} />
          <ProtectedRoute path="/reports/billToUpdate/:billId" component={UpdateBill} />
          <ProtectedRoute path="/reports/companyBillToUpdate/:companyBillId" component={UpdateCompanyBill} />
          <ProtectedRoute path="/schedules/BillOutput" component={BillOutput}/>
          <ProtectedRoute path="/schedules/criminalOutput" component={CriminalOutput}/>
          <ProtectedRoute path="/schedules/companyOutput" component={CompanyOutput}/>
          <ProtectedRoute path="/schedules/debentureOutput" component={DebentureBillOutput}/>
          <ProtectedRoute path="/schedules/familyOutput" component={FamilyBillOutput}/>
          <ProtectedRoute path="/reports/bill/:billId" component={SingleSchedule} />
          <ProtectedRoute path="/reports/criminal/:criminalId" component={SingleCriminal} />
          <ProtectedRoute path="/reports/company/:companyId" component={SingleCompanyBill} />
          <ProtectedRoute path="/reports/criminalToUpdate/:criminalId" component={UpdateCriminal} />
          <ProtectedRoute path="/schedule/client/:clientId" component={SingleClient} />
          <ProtectedRoute path="/billing/land" component={LandBilling} />
          <ProtectedRoute path="/billing/rent" component={RentBilling} />
          <ProtectedRoute path="/billing/criminal" component={Criminal} />
          <ProtectedRoute path="/billing/companies" component={CompaniesBilling} />
          <ProtectedRoute path="/billing/debentures" component={DebenturesBilling} />
          <ProtectedRoute path="/billing/family" component={FamilyBilling} />
          <ProtectedRoute path="/reports/clients" component={ClientsReport} />
          <ProtectedRoute path="/reports/advocates" component={AdvocatesReport} />
          <ProtectedRoute path="/reports/bills" component={BillsReport} />
          <ProtectedRoute path="/reports/projects" component={ProjectsReport} />
          <ProtectedRoute path="/reports/addClient" component={CreateClient} />
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
          {/* <Route exact path="/not-found" component={PageNotFound} /> */}
          <Route exact path="/" component={User} />

          <Route path="/signin" component={Signin} /> 
          <Route path="/login" component={LoginComponent} /> 
          {/* <Redirect to="/not-found" /> */}
      </Router>
      <footer className="blue">
        <p className="text-center text-white py-3">Jast Tech Ltd</p>
      </footer>
    </div>
  );
}

export default App;
