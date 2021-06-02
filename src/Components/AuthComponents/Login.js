import React from 'react'
import {ArrowRight} from 'react-bootstrap-icons'

export default function Login() {
   return (
      <div className="login row d-flex flex-col bg-primary " style={{"min-height" :"90vh"}}>
         <div className="">
            <h2 className="text-center text-white my-4">Login</h2>
         </div>
         <div className="form d-flex justify-content-center">
         <form className="rounded p-2 mt-3 " style={{"width": "40vw"}}>
            <div className="form-group">
               <input type="email" className="email form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
               <input type="password" className="password form-control" placeholder="Password"/>
            </div>

            <div className="d-flex justify-content-center mt-5">
               <button className="btn login-btn btn-primary">Login</button>
            </div>
         </form>

         </div>
         <div className="forgot d-flex justify-content-center w-100 text-white">
            <p>Forgot Email/Password?</p>
         </div>
         <div className="create-an-account d-flex justify-content-center w-100 text-white">
            <p>
               Create an account
               <ArrowRight className="ml-2 " style={{"width" :"20px", "height": "40px"}}/>
            </p>
         </div>
      </div>
   )
}
