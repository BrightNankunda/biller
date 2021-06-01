import React from 'react';
import {Row} from 'reactstrap'
import Login from './Login';
import LoginSideComponent from './LoginSideComponent';

 
const LoginComponent = () => {
   return (
      <div className="fluid-container">
         <div className="d-flex justify-content-center">
            <div className="col">
               <LoginSideComponent />
            </div>
            <div className="col">
               <Login />
            </div>
         </div>
      </div>
   );
}
 
export default LoginComponent;