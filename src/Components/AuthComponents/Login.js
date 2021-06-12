import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { ForwardFill} from 'react-bootstrap-icons'

import {UserLogin} from '../../Actions/UserActions'

export default function Login() {
   const dispatch = useDispatch()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(UserLogin({email, password}))
   }

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
               <button type="submit" className="btn login-btn btn-primary">Login</button>
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
