import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser } from '../../Actions/UserActions';
 
const Logout = (props) => {
   const {loading, loggedOut} = useSelector(state => state.userLoggedOut)
   console.log('loggedOut', loggedOut)
   const userLoggedIn = JSON.parse(localStorage.getItem('UgBillUser'))
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(LogoutUser())
      if(!loggedOut) {
         props.history.push('/login')
      }
      
      return () => {
         // cleanup
      }
   }, [loggedOut])

   return (
      <div className="col-lg-12 full-height logout" >
                   {/*<div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                  </div>
                  <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="sr-only">Loading...</span>
                  </button> */}
                  <div 
                  className="h-100 logout-cursor">

                     <button className="btn btn-logout text-dark logout-cursor" type="button" disabled>
                        <span className="spinner-border spinner-border-sm logout-cursor" 
                        role="status" aria-hidden="true"></span>
                        Logging Out...
                     </button>
                  </div>
                  {/* <button class="btn btn-primary" type="button" disabled>
                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                     <span class="sr-only">Loading...</span>
                     </button>
                     <button class="btn btn-primary" type="button" disabled>
                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                     Loading...
                  </button> */}
      </div>
   );
}
 
export default Logout;