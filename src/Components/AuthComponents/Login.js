import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ForwardFill} from 'react-bootstrap-icons'

import {UserLogin} from '../../Actions/UserActions'
import { useHistory } from 'react-router'

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
   const userLoggingIn = useSelector(state => state.userLoggingIn)
   const {loading, user} = userLoggingIn
   const {foundUser, token} = user
   console.log('Found User', foundUser, 'token', token)

   useEffect(() => {
      if(loading) {
         setLoggingIn(true)
      } else if(!loading && (foundUser !== null) && token !== null ) {
         setLoggingIn(false)
         changeRoute()
      }
      return () => {
         // cleanup
      }
   }, [foundUser, token, loading])
   
   const changeRoute = () => {
      history.replace('/bill')
   }
   console.log('USER LOGGING IN', userLoggingIn)

   return (
      <div className="login row d-flex flex-col bg-primary " style={{"min-height" :"100vh"}}>
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
               {!loggingIn && <button type="submit" className="btn login-btn btn-primary">Login</button>}
               {loggingIn && <button className="btn btn-logout text-dark logout-cursor" type="button" disabled>
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
            <p>
               Create an account
               <ForwardFill className="ml-0 " style={{"width" :"50px", "height": "20px"}}/>
            </p>
         </div>
      </div>
   )
}
