import React from 'react';
import { Link } from 'react-router-dom';

const UserData = () => {

  return (    
      <div className="col-lg-12">
          <div className="col-lg-12 p-4">
            <div className="d-flex mx-2 row ">
                <Link to="/reports/clients" className="report-divs rounded-mid bg-light col-lg-5 m-4">CLIENTS</Link>
                <Link to="/reports/bills" className="report-divs rounded-mid bg-light col-lg-5 m-4">BILLS</Link>
            </div>
            <div className="d-flex mx-2 row">
                <Link to="/schedules" className="report-divs rounded-mid bg-light col-lg-5 m-4">SCHEDULES</Link>
                <Link to="/reports/addClient" className="report-divs rounded-mid bg-light col-lg-5 m-4">CREATE A NEW CLIENT</Link>
            </div>
          </div>
            
        </div>
  );
}

export default UserData;