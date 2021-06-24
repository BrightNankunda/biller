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
               <div className="d-flex flex-col">
                  <label>PROPERTY TYPE</label>
                  <input type="text" placeholder="Some thing" className="bill-form-input"/>
               </div>
            </div>
            <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
               <div className="d-flex flex-col">
                  <label>RENTAL TYPE</label>
                  <input type="text" placeholder="Some thing" className="bill-form-input"/>
               </div>
            </div>
            <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
               <div className="d-flex flex-col">
                  <label>ADVOCATE</label>
                  <input type="text" placeholder="Some thing" className="bill-form-input"/>
               </div>
            </div>
            <div className="advanced-input-wrapper m-2 w-90">
               <div className="d-flex flex-col">
                  <label htmlFor="scale">SCALE</label>
                  <input type="text" id="scale" placeholder="Some thing" className="w-85 bill-form-input"/>
                  
               </div>
            </div>
            <div className="advanced-input-wrapper m-2 w-90">
               <div className="d-flex flex-col">
                  <label>LAND VALUE</label>
                  <input type="number" placeholder="Some thing" className="bill-form-input"/>
               </div>
            </div>
            <div className="d-flex justify-content-center my-2">
               <button className="btn submit-btn py-2 px-3 bg-white">SUBMIT</button>
            </div>
         </form>
      </div>
   );
}
 
export default BillForm;