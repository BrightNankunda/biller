import React from 'react';
import { BagCheck } from 'react-bootstrap-icons';
 
const BillForm = () => {
   const submitHandler = (e) => {
      e.preventDefault();
      console.log('Submitted')
   }
   return (
      <div className="w-100 bg-light">
         <form onSubmit={submitHandler}>
            <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
               <div className="d-flex flex-col m-2">
                  <h6>Rack rent means rent representing the value of the land and buildings</h6>
                  <h6>Ground rent means rent representing the value of the land without buildings on it</h6>
               </div>
            </div>
            
            <div className="advanced-input-wrapper m-2 w-90">
               <div className="d-flex flex-col">
                  <h6>Vendor's Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance</h6>
                  <h6>Purchase's Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance</h6>
                  <h6>Mortgagor's Advocate: For deducting title to freehold or lease property, perusing mortagage and completing</h6>
                  <h6>Mortgagee's Advocate: For investigating title to freehold or lease hold property and completing</h6>
               </div>
            </div>
            <div className="advanced-input-wrapper w-90 m-2">
               <div className="d-flex flex-col">
                  <h6>Scale of charges on sales, purchases, mortgages and debentures</h6>
                  <h6>Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered</h6>
               </div>
            </div>
            <div className="advanced-input-wrapper m-2 w-90">
               <div className="d-flex">
                  <h4 className="mx-3">IS LAND REGISTERED?</h4>
                  <div className="col-lg-2 d-flex justify-content-between">
                     <h4 className="land-registration-choice">YES</h4>
                     <h4 className="land-registration-choice">NO</h4>
                  </div>
               </div>
            </div>
            <div className="advanced-input-wrapper m-2 w-90">
               <div className="d-flex justify-content-between">
                  <h4 className="mx-3">INPUT VALUE OF LAND</h4>
                  <input type="number" placeholder="Some thing" className="bill-form-input"/>
               </div>
            </div>
            <div className="d-flex justify-content-between my-2">
               <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
               <button className="btn submit-btn py-2 px-3 bg-white">SUBMIT</button>
            </div>
         </form>
         
      </div>
   );
}
 
export default BillForm;