import React, { useState, useEffect } from 'react';
import {PlusLg,  ArrowRightSquare} from 'react-bootstrap-icons'

const AppNavbar = (props) => {

  const [loggedOut, setLoggedOut] = useState(false)
  
  const isAuthenticated = () => {
    console.log('RUNNING AUTHENTICATED FUNCTION')
    return (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true
  }
  // DETERMING LOGGED IN STATE AND DISPLAYING THE NAVBAR ACCORDINGLY
  useEffect(() => {
    console.log('APP NAV BAR');
    return () => {
      // cleanup
    }
  })
  console.log('APP JS SAYS IS AUTHENTICATED FUNCTION', isAuthenticated())
  

  const goHome = () => {
    props.history.push('/')
  }

  return (
    <div className="col-lg-12 blue d-flex justify-content-between align-content-center align-items-center">
      <div className="col-lg-2 mr-2 justify-content-center align-content-center align-items-center" onClick={goHome}>
        <h3 className="cursor-pointer text-center border-bottom text-white" >UG BILL</h3>
      </div>

      <div className="col-lg-3 py-1 create-client bg-light d-flex my-3 justify-content-center align-content-center align-items-center">
        <PlusLg className="my-auto nav-icon mx-2"/>
        <h5 className="text-center">CREATE NEW CLIENT</h5>
      </div>

      <div className="col-lg-2 d-flex justify-content-center align-content-center align-items-center">
        <h4 className="text-center text-white mr-2">LOG OUT</h4>
        <ArrowRightSquare className="text-white my-auto nav-icon mx-2" />
      </div>
    </div>
  );
}

export default AppNavbar;