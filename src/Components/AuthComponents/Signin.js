import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { UserSignin } from '../../Actions/UserActions'

export default function Signin() {

   const dispatch = useDispatch()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(UserSignin({email, password}))
   }

   return (
      <div className="row d-flex justify-content-center  " style={{"min-height" :"90vh"}}>
         <div className="col-lg-6 signup">
            <div className="">
               <h2 className="text-center text-white my-4">Sign Up</h2>
            </div>
            <div className="form d-flex justify-content-center">

            <form className=" p-2 mt-3 " style={{"width": "40vw"}} onSubmit={submitHandler}>
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
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Password"/>
               </div>
               <div className="form-group">
                  <input type="password" className="password form-control mb-5" placeholder="Confirm Password"/>
               </div>

               <div className="d-flex justify-content-center mt-5">
                  <button className="btn login-btn btn-primary" type="submit">Sign Up</button>
               </div>
            </form>

            </div>
         </div>
      </div>
   )
}
