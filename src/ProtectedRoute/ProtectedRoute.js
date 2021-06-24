import React from 'react';
import {Redirect, Route} from 'react-router-dom'
 
const ProtectedRoute = (props) => {

   const isAuthenticated = (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true
   
   console.log('ISAUTHENTICATED', isAuthenticated);

   return isAuthenticated  ? (<Route exact={true} {...props} />) : (<Redirect to={{pathname: '/login'}} />);
}
 
export default ProtectedRoute;