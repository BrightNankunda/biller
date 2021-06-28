import React  from 'react';
import {PlusLg,  ArrowRightSquare} from 'react-bootstrap-icons'
import { useHistory } from 'react-router';

const AppNavbar = (props) => {

  const history = useHistory()

  const createClientLink = () => {
    history.push('/reports/addClient')
  }
 
  const logout = () => {
    history.push('/logout')
  }

  return (
    <div className="col-lg-12 blue d-flex justify-content-between align-content-center align-items-center">
      <div className="col-lg-2 mr-2 justify-content-center align-content-center align-items-center">
        <h3 className="cursor-pointer text-center text-white" >UG BILL</h3>
      </div>

      <button 
      onClick={() => createClientLink()}
      className="col-lg-3 py-1 create-client bg-light d-flex my-3 justify-content-center align-content-center align-items-center">
        <PlusLg className="my-auto nav-icon mx-2"/>CREATE NEW CLIENT
      </button>

      <div onClick={logout}
      className="col-lg-2 d-flex justify-content-center cursor-pointer align-content-center align-items-center">
        <h4 className="text-center text-white mr-2">LOG OUT</h4>
        <ArrowRightSquare className="text-white my-auto nav-icon mx-2" />
      </div>
    </div>
  );
}

export default AppNavbar;