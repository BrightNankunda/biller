import React, { useState } from 'react';
 
const Forms = () => {
   const [checked, setChecked] = useState(false)

   const isButtonDisabled = checked ? true : false

   const handleChecked = () => {
      setChecked(!checked)
      console.log(checked)
      // isButtonDisabled()
   }

   return (
      <div className="container">
         <div className="row d-flex flex-row ">

            <div className="col-50 w-50">
               <h6 className="text-center text-success my-3">FORM 2 - CARD FORMAT</h6>
               <form className="">
                  <div className="card m-3">
                     {/* CARD LAYOUT */}
                     <div className="card-header">
                        <p>Login</p>
                     </div>
                     <div className="card-body">
                     {/* FORM INPUTS, CHECKBOXES */}
                        <div class="form-group">
                           <label for="email">Email address</label>
                           <input type="email" class="form-control" id="email" placeholder="name@ugbill.com"/>
                        </div>
                        
                        <div class="form-group">
                           <label for="password">Password</label>
                           <input type="password" class="form-control" id="password" placeholder="Enter Password"/>
                        </div>

                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" value={checked} onChange={handleChecked} id="check"/>
                           <label class="form-check-label" for="check">
                              Check me To Enable Button, Keep me logged In?
                           </label>
                        </div>
                     </div>
                     <div className="d-flex justify-content-center mb-2">
                        <button className="btn btn-primary" disabled={isButtonDisabled}>Submit</button>
                     </div>
                  </div>
               </form>
            </div>
            <div className="col-50 w-50">
               <h6 className="text-center text-success">FORM 2 BOOTSRAP FORMAT</h6>
               <form className="border rounded-sm p-3">
                     {/* FORM INPUTS, CHECKBOXES */}
                        <div class="form-group">
                           <label htmlFor="fname">First Name</label>
                           <input type="fname" class="form-control form-control-sm" id="fname" placeholder="Enter first name"/>
                        </div>
                        <div class="form-group">
                           <label for="lname">Last Name</label>
                           <input type="lname" class="form-control form-control-sm" id="lname" placeholder="Enter last name"/>
                        </div>
                        <div class="form-group">
                           <label for="uname">User Name</label>
                           <input type="uname" class="form-control form-control-sm" id="uname" placeholder="Enter your User name"/>
                        </div>
                        <div class="form-group">
                           <label for="email">Email address</label>
                           <input type="email" class="form-control form-control-sm" id="email" placeholder="name@ugbill.com"/>
                        </div>
                        <div class="form-group">
                           <label for="password">Password</label>
                           <input type="password" class="form-control form-control-sm" id="password" placeholder="Enter Password"/>
                        </div>
                        <div class="form-group">
                           <label for="password">Confirm Password</label>
                           <input type="password" class="form-control form-control-sm" id="password" placeholder="Enter Password"/>
                        </div>
                        
                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" value={checked} onChange={handleChecked} id="check"/>
                           <label class="form-check-label" for="check">
                              Check me To Enable Button, Keep me logged In?
                           </label>
                        </div>
                     
                        <div className="d-flex justify-content-center mb-2">
                           <button className="custom-blue-button" disabled={isButtonDisabled}>Submit</button>
                        </div>
                  
               </form>
            </div>
         </div>

         <div className="row my-2">
            <h4 className="text-center">ARTICLE FORM</h4>
            <div className="w-100 border rounded-lg pb-3 px-2 pt-2">
               <form className="m-3">
                  <div class="form-group">
                     <label for="article">Create an article</label>
                     <textarea type="text" className="form-control" rows="3" placeholder="CREATE AN ARTICLE"/>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
 
export default Forms;