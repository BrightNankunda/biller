import React from 'react'
import {Row, Form, Input} from 'reactstrap'

export default function Login() {
   return (
      <div className="row d-flex justify-content-center bg-primary flex-col" style={{"min-height" :"90vh"}}>
         <div className="my-auto bg-light rounded p-2">
            <h6 className="text-center">Login</h6>
         </div>
         <form className="my-auto bg-light rounded p-2" style={{"width": "40vw"}}>
            <div className="form-group">
               <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
               <input type="email" className="form-control" placeholder="Password"/>
            </div>
            <div className="d-flex justify-content-center">
               <button className="btn btn-primary">Login</button>
            </div>
         </form>
      </div>
   )
}
