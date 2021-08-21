import React from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const Criminal = () => {

   const submitHandler = () => {
      console.log('submitted')
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
         
            <div className="w-100 bg-light col-lg-9 ">
               <h3 className="text-center">CRIMINAL MATTER</h3>
               <form onSubmit={submitHandler}>
                  
                  { /* ABOUT FORM */}
                  <div className="about sub-form ">
                     <h6 className="text-center">ABOUT</h6>
                     <div className="">
                        <label>CLIENT NAME</label>
                        <input type="text" className="w-50" placeholder=""/>
                     </div>
                     <div className="">
                        <label>ASSIGNED TO</label>
                        <input type="text" className="w-50" placeholder=""/>
                     </div>
                  </div>

                  {/* FACTS FORM */}
                  <div className="facts sub-form">
                     <h6 className="text-center">FACTS</h6>
                     <div className="d-flex bg-success">
                        <div className="other-facts col-lg-6 mr-2">
                           <div className="">
                              <label></label>
                              <input type="text" className="w-100" />
                           </div>
                        </div>
                        <div className="notes col-lg-6">
                           <label>NOTES</label>
                           <textarea className="w-100"/>
                        </div>
                     </div>
                  </div>

                  {/* BILLING-FORM */}
                  <div className="billing sub-form">
                     <h6 className="text-center">BILLING</h6>
                     
                     <div className="">
                        <label>AMOUNT</label>
                        <input type="text" className="w-50" placeholder=""/>
                     </div>

                     <div className="">
                        <label>CASE VALUE</label>
                        <input type="text" className="w-50" placeholder=""/>
                     </div>
                  </div>
                  
                  {/* DATES */}
                  <div className="dates sub-form">
                     <h6 className="text-center">DATES</h6>
                     <div className="">
                        <label>OPEN DATE</label>
                        <input type="text" className="w-50" placeholder=""/>
                     </div>
                     <div className="">
                        <label>CLOSE DATE</label>
                        <input type="text" className="w-50" placeholder=""/>
                     </div>
                  </div>

                  {/* SUBMIT STATUS BUTTONS */}
                  <div className="d-flex justify-content-between mx-2 mt-3">
                     <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                     <button className="btn submit-btn py-2 px-3 bg-white">SUBMIT</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
 
export default Criminal;