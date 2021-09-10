import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom'
 
const ProtectedRoute = (props) => {
   const user = useSelector(state => state.user) 
   
   const isAuthenticated = () => {
      return ((JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined)) ? true: false 
   }
   

   return isAuthenticated  ? (<Route exact={true} {...props} />) : (<Redirect to={{pathname: '/login'}} />);
}
 
export default ProtectedRoute;