import React, { useState } from 'react';
 
const BillForm = ({match}) => {

   const [rent, setRent] = useState('')
   const [advocate, setAdvocate] = useState('')
   const [scale, setScale] = useState('')
   const [landRegistration, setLandRegistration] = useState('')
   const [landValue, setLandValue] = useState('')

   
   const submitHandler = (e) => {
      e.preventDefault();
      console.log(rent, advocate, scale, landRegistration, landValue)
   }
   
   return (
      <div className="w-100 bg-light">
         
         <form onSubmit={submitHandler}>
            <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
               <div className="d-flex flex-col m-2">
                  <select type="select" className="bill-input px-2" id="rental" 
                     value={rent}
                     onChange={(e) => setRent(e.target.value)}
                     name="rental">
                     <option disabled value="">CHOOSE RENT TYPE</option>
                     <option value="1">Rack rent means rent representing the value of the land and buildings</option>
                     <option value="2">Ground rent means rent representing the value of the land without buildings on it</option>
                  </select>
                  
               </div>
            </div>
            
            <div className="advanced-input-wrapper m-2 w-90 my-3">
               <div className="d-flex flex-col m-2">
                  <select type="select" 
                  className="bill-input px-2" 
                  value={advocate}
                  id="advocate" onChange={(e) => setAdvocate(e.target.value)}>
                     <option disabled value="">CHOOSE AN ADVOCATE</option>
                     <option value="1">Vendor's Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance</option>
                     <option value="2">Purchase's Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance</option>
                     <option value="3">Mortgagor's Advocate: For deducting title to freehold or lease property, perusing mortagage and completing</option>
                     <option value="4">Mortgagee's Advocate: For investigating title to freehold or lease hold property and completing</option>
                  </select>
               </div>
            </div>
            <div className="advanced-input-wrapper w-90 m-2">
               <div className="d-flex flex-col m-2">
                  <select type="select" 
                  className="bill-input px-2" 
                  id="scale" 
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}>
                     <option disabled value="">CHOOSE SCALE TYPE</option>
                     <option value="1">Scale of charges on sales, purchases, mortgages and debentures</option>
                     <option value="2">Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered</option>
                  </select>
               </div>
            </div>
            <div className="advanced-input-wrapper m-2 w-90 my-3">
               <div className="d-flex m-2">
                  <h4 className="mx-3">IS LAND REGISTERED?</h4>
                  <div className="col-lg-3 d-flex justify-content-between bg-light p-1">
                     <h4 className="lead land-registration-choice bg-white ml-1" onClick={() => setLandRegistration('0')}>YES</h4>
                     <h4 className="lead land-registration-choice bg-white mr-1" onClick={() => setLandRegistration('1')}>NO</h4>
                  </div>
               </div>
            </div>
            <div className="advanced-input-wrapper m-2 my-3 w-90">
               <div className="d-flex justify-content-between">
                  <h4 className="mx-3">INPUT VALUE OF LAND</h4>
                  <input type="number"
                  value={landValue}
                  onChange={(e) => setLandValue(e.target.value)}
                  className="bill-input col-lg-7" 
                  placeholder="ENTER LAND VALUE"/>
               </div>
            </div>
            <div className="d-flex justify-content-between m-2">
               <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
               <button className="btn submit-btn py-2 px-3 bg-white">SUBMIT</button>
            </div>
         </form>
         
      </div>
   );
}
 
export default BillForm;