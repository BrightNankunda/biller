import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ForwardFill} from 'react-bootstrap-icons'

import {UserLogin} from '../../Actions/UserActions'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Login(props) {
   const dispatch = useDispatch()
   const history = useHistory()

   const [loggingIn, setLoggingIn] = useState(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      
      dispatch(UserLogin({email, password}))
   }

   const isAuthenticated = (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true
   const {loading} = useSelector(state => state.userLoggingIn)
   console.log('LOADING FROM LOGIN', loading)
   
   useEffect(() => {
      if(isAuthenticated) {
         history.replace('/dashboard')
         console.log('AUTHENTICATED FROM LOGIN COMPONENT');
      }
      return () => {
         // cleanup
      }
   }, [loading, isAuthenticated])
   
   
   return (
      <div className="login row d-flex flex-col bg-primary full-height">
         <div className="">
            <h2 className="text-center text-white my-4">Login</h2>
         </div>
         <div className="form d-flex justify-content-center">
         <form className="rounded p-2 mt-3 " 
            onSubmit={handleSubmit}
            style={{"width": "40vw"}}>

            <div className="form-group">
               <input type="email" 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               className="email form-control" 
               placeholder="Email"/>
            </div>

            <div className="form-group">
               <input type="password" 
               className="password form-control" 
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
               placeholder="Password"/>
            </div>

            <div className="d-flex justify-content-center mt-5">
               {!loading && <button type="submit" className="btn login-btn btn-primary">Login</button>}
               {loading && <button className="btn login-btn text-dark logout-cursor" type="button" disabled>
                  <span className="spinner-border spinner-border-sm logout-cursor" 
                  role="status" aria-hidden="true"></span>
                  Loading...
               </button> }
            </div>
         </form>

         </div>
         <div className="forgot d-flex justify-content-center w-100 text-white">
            <p>Forgot Email/Password?</p>
         </div>
         <div className="create-an-account d-flex justify-content-center w-100 text-white">
            <Link to="/signin" className="text-white">
               Create an account
               <ForwardFill className="ml-0 " style={{"width" :"50px", "height": "20px"}}/>
            </Link>
         </div>
      </div>
   )
}
