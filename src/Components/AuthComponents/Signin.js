import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default function Signin() {
   return (
      <div className="row d-flex justify-content-center  " style={{"min-height" :"90vh"}}>
         <div className="col-lg-6 signup">
            <div className="">
               <h2 className="text-center text-white my-4">Sign Up</h2>
            </div>
            <div className="form d-flex justify-content-center">
            <form className=" p-2 mt-3 " style={{"width": "40vw"}}>
               <div className="form-group">
                  <imput type="email" className="email form-control" placeholder="Email"/>
               </div>
               <div className="form-group">
                  <input type="password" className="password form-control" placeholder="Password"/>
               </div>
               <div className="form-group">
                  <input type="password" className="password form-control mb-5" placeholder="Confirm Password"/>
               </div>

               <div className="d-flex justify-content-center mt-5">
                  <button className="btn login-btn btn-primary">Sign Up</button>
               </div>
            </form>

            </div>
         </div>
      </div>
   )
}
