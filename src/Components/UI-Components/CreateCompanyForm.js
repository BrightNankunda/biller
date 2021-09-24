import React from 'react';
import { Person } from 'react-bootstrap-icons';
 
const CreateCompanyForm = () => {
   return (
      <div className="fluid-container">
         <p className="xl-font text-success">AFTER CHOOSING ADMIN STATUS</p>
         <div className="w-100 p-3">
            <div className="border rounded-lg">
               <form className="p-3">
                  <div className=" d-flex justify-content-center align-items-center flex-col">
                     <div className="border rounded-circle " style={{width: '120px', height: '120px'}}>
                        <Person className="w-100 h-100"/>
                     </div>
                     <div className="d-flex justify-content-center align-items-center mt-2">
                        <button className="btn btn-primary">Add Firm Logo</button>
                     </div>
                  </div>
                        <div class="form-group">
                           <label htmlFor="cname">Company Name</label>
                           <input type="cname" class="form-control" id="cname" placeholder="Suitors Advocates..."/>
                        </div>
                        <div class="form-group">
                           <label for="cservices">Company Services</label>
                           <input type="cservices" class="form-control" id="cservices" placeholder="Land Law, Marriage Law..."/>
                        </div>
                        <div class="form-group">
                           <label for="cemail">Company Email address</label>
                           <input type="cemail" class="form-control" id="cemail" placeholder="suitors@info.com"/>
                        </div>
                        <div><h4 className="text-center text-primary">COMPANY LOCATION INFORMATION</h4></div>
                        <div class="form-group">
                           <label for="ccountry">Country</label>
                           <input type="ccountry" class="form-control" id="ccountry" placeholder="Enter your User name"/>
                        </div>
                        
                        <div class="form-group">
                           <label for="ccity">City</label>
                           <input type="ccity" class="form-control" id="ccity" placeholder="Enter your User name"/>
                        </div>
                        <div class="form-group">
                           <label for="cstreet">Street</label>
                           <input type="cstreet" class="form-control" id="cstreet" placeholder="Enter your User name"/>
                        </div>
                        <div class="form-group">
                           <label for="cbuilding">Building</label>
                           <input type="cbuilding" class="form-control" id="cbuilding" placeholder="Enter your User name"/>
                        </div>
                     
                        <div className="d-flex justify-content-center mb-2">
                           <button className="custom-blue-button">Submit</button>
                        </div> 
               </form>
            </div>
         </div>
      </div>
   );
}
 
export default CreateCompanyForm;