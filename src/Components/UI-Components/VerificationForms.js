import React from 'react'
import { Person} from 'react-bootstrap-icons'

const VerificationForms = () => {

   return (
      <div className="fluid-container">
         <p className="xl-font text-success">AFTER SIGNIN/IF NO USER CATEGORY SELECTED</p>
         <div className="w-100 p-3">
            <div className="border rounded-lg">
               <p className="xl-font">Please add a profile image</p>
               <form className="m-2">
                  {/* AVATAR PLACEHOLDER */}
                  <div className=" d-flex justify-content-center align-items-center flex-col">
                     <div className="border rounded-circle " style={{width: '120px', height: '120px'}}>
                        <Person className="w-100 h-100"/>
                     </div>
                     <div className="d-flex justify-content-center align-items-center mt-2">
                        <button className="btn btn-primary">Add profile image</button>
                     </div>

                     <div className="mt-2">
                        <h2 className="text-center text-primary">CHOOSE STATUS</h2>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Firm Adminstrator
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Advocate
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Coporate seeking legal experts
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Student
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Law Ethuaist
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Law Enforcement
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              Law Practitioner
                           </label>
                        </div>
                        <div className="form-check">
                           <input className="form-check-input" type="checkbox" id="check"/>
                           <label className="form-check-label" htmlFor="check">
                              User
                           </label>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default VerificationForms