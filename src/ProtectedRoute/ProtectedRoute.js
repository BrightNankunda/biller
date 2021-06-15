import React from 'react';
import {Redirect, Route} from 'react-router-dom'
 
const ProtectedRoute = (props) => {

   const Component = props.component

   const isAuthenticated = () => {
      return (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true
   }

   return isAuthenticated ? (<Route {...props} />) : (<Redirect to={{pathname: '/login'}} />);
}
 
export default ProtectedRoute;