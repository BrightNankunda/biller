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
                        <p>Enter Your Data</p>
                     </div>
                     <div className="card-body">
                     {/* FORM INPUTS, CHECKBOXES */}
                        <div class="form-group">
                           <label for="email">Email address</label>
                           <input type="email" class="form-control" id="email" placeholder="name@ugbill.com"/>
                        </div>
                        <div class="form-group">
                           <label for="exampleFormControlSelect1">Select Me</label>
                           <select class="form-control" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                           </select>
                        </div>
                        <div class="form-group">
                           <label for="exampleFormControlSelect2">Select You</label>
                           <select multiple class="form-control" id="exampleFormControlSelect2">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                           </select>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" value={checked} onChange={handleChecked} id="check"/>
                           <label class="form-check-label" for="check">
                              Check me To Enable Button
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
                           <label for="email">Email address</label>
                           <p>Small inputs with text/description</p>
                           <input type="email" class="form-control form-control-sm" id="email" placeholder="name@ugbill.com"/>
                        </div>
                        <div class="form-group">
                           <label for="exampleFormControlSelect1">Select Me</label>
                           <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                           </select>
                        </div>
                        <div class="form-group">
                           <label for="exampleFormControlSelect2">Select You</label>
                           <p>Small inputs with text/description</p>
                           <select multiple class="form-control form-control-sm" id="exampleFormControlSelect2">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                           </select>
                        </div>
                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" value={checked} onChange={handleChecked} id="check"/>
                           <label class="form-check-label" for="check">
                              Check me To Enable Button
                           </label>
                        </div>
                     
                        <div className="d-flex justify-content-center mb-2">
                           <button className="custom-blue-button" disabled={isButtonDisabled}>Submit</button>
                        </div>
                  
               </form>
            </div>
         </div>
      </div>
   );
}
 
export default Forms;