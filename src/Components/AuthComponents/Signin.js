import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { UserSignin } from '../../Actions/UserActions'

export default function Signin(props) {
   const dispatch = useDispatch()
   const history = useHistory()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [emailErr, setEmailErr] = useState(null)
   const [passwordErr, setPasswordErr] = useState(null)

   // CHECKING FOR STATE CHANGE AND RESPONDING WITH ROUTE CHANGE
   const {loading} = useSelector(state => state.userSigningIn)
   const isAuthenticated = (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true
   console.log('LOADING FROM SIGNIN', loading)

   // CHECK FUNCTION
   useEffect(() => {
      if(isAuthenticated) {
         history.replace('/dashboard')
         console.log('AUTHENTICATED FROM SIGNIN COMPONENT');
      }
      return () => {
         // cleanup
      }
   }, [loading, isAuthenticated])

   const submitHandler = (e) => {
      e.preventDefault()
      if(email.trim() === '') {
         setEmailErr('Email is Required!')
      } else if(password.trim() === '') {
         setPasswordErr('Password is Required!')
      } else if(password.trim().length < 5) {
         setPasswordErr('Password Must be atleast 5 characters!')
      } else {
         dispatch(UserSignin({email, password}))
      }
   }

   const handleEmailChange = (e) => {
      setEmail(e.target.value)
      setEmailErr(null)
   }

   const handlePasswordChange = (e) => {
      setPassword(e.target.value)
      setPasswordErr(null)
   }
   
   return (
      <div className="row d-flex justify-content-center full-height" >
         <div className="col-lg-6 signup ">
            <div className="d-flex justify-content-center">
               <h2 className="text-center text-white my-4">Sign Up</h2>
            </div>
            <div className="form d-flex justify-content-center flex-col">

               <form className=" p-2 mt-3 mx-auto" style={{"width": "40vw"}} onSubmit={submitHandler}>
                  <div className="form-group">
                     <input type="email" 
                     value={email}
                     onChange={handleEmailChange}
                     className="email form-control" 
                     placeholder="Email"/>
                     {emailErr && <p className="pl-1 rounded bg-white my-2 text-danger">{emailErr}</p>}
                  </div>
                  <div className="form-group">
                     <input type="password" 
                     className="password form-control" 
                     value={password}
                     onChange={handlePasswordChange}
                     placeholder="Password"/>
                     {passwordErr && <p className="pl-1 rounded bg-white my-2 text-danger">{passwordErr}</p>}
                  </div>
                  <div className="form-group">
                     <input type="password" className="password form-control mb-5" placeholder="Confirm Password"/>
                  </div>

                  <div className="d-flex justify-content-center mt-5">
                     {!loading && 
                     <button className="btn login-btn btn-primary" type="submit">Sign Up</button>}
                     {loading && <button className="btn login-btn btn-primary logout-cursor"disabled>
                        <span className="spinner-border spinner-border-sm logout-cursor" 
                        role="status" aria-hidden="true"></span>
                        Loading...
                     </button>}
                  </div>
               </form>
               <div className="d-flex justify-content-center my-2">
                  <Link to="/login" className="text-white">Already Have An Account? Log In</Link>
               </div>
            </div>
         </div>
      </div>
   )
}
