import React, {useState, useEffect} from 'react';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const Criminal = () => {

   const [caseValue, setCaseValue] = useState(1) //ENUM [1, 2, 3, 4]
   const [subjectValue, setSubjectValue] = useState(100000000) //MIN 2 MILLION
   const [total, setTotal] = useState('')

   const calculateTotal = () => {
      if(parseInt(caseValue) === 1 ) {
         if(parseInt(subjectValue) <= 2000000) {
            setTotal(parseInt(subjectValue) * 0.15)
         } else if(parseInt(subjectValue) <= 5000000) { // < 5 Million
            const currentTotal = (2000000 * 0.15) +((parseInt(subjectValue) - 2000000 ) *0.14) 
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 10000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12)
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 20000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10) 
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 50000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(parseInt(subjectValue)-20000000)*0.08
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 100000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05)
            setTotal(currentTotal)
         } else{
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02)
            setTotal(currentTotal)
         }
      } else if(parseInt(caseValue) === 2 ){
         
      }
      
   }

   useEffect(() => {
      console.log(total)
      return () => {
         // cleanup
      }
   }, [total])

   const submitHandler = (e) => {
      e.preventDefault();
      calculateTotal()
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
                  <div className="about sub-form my-4 p-3 ">
                     <h5 className="text-center">ABOUT</h5>
                     <div className="">
                        <label htmlFor="clientName">CLIENT NAME</label>
                        <input type="text" id="clientName" className="bill-form-input ml-2 w-50" placeholder=""/>
                     </div>
                     <div className="">
                        <label>ASSIGNED TO</label>
                        <input type="text" className="bill-form-input ml-2 w-50" placeholder=""/>
                     </div>
                  </div>

                  {/* FACTS FORM */}
                  <div className="facts sub-form my-4 p-3">
                     <h5 className="text-center">FACTS</h5>
                     <div className="d-flex">
                        <div className="other-facts col-lg-6 mr-2">
                           <div className="">
                              <label htmlFor="status">STATUS</label>
                              <input type="text" name="status" 
                              className="bill-form-input w-100" placeholder="STATUS"/>
                           </div>
                           <div className="">
                              <label htmlFor="court">COURT</label>
                              <input type="text" name="court" 
                              className="bill-form-input w-100" placeholder="HIGH COURT"/>
                           </div>
                           <div className="">
                              <label htmlFor="offence">OFFENCE</label>
                              <input type="text" name="offence" 
                              className="bill-form-input w-100" placeholder="OFFENCE"/>
                           </div>
                           <div className="">
                              <label htmlFor="committed">COMMITTED</label>
                              <input type="text" name="committed" 
                              className="bill-form-input w-100" placeholder="COMMITTED"/>
                           </div>
                           <div className="">
                              <label htmlFor="remand">REMAND</label>
                              <input type="text" name="remand" 
                              className="bill-form-input w-100" placeholder="REMAND"/>
                           </div>
                        </div>
                        <div className="notes col-lg-6">
                           <label>NOTES</label>
                           <textarea className="bill-form-input w-100" placeholder="ANY NOTES"/>
                        </div>
                     </div>
                  </div>

                  {/* BILLING-FORM */}
                  <div className="billing sub-form my-4 p-3">
                     <h5 className="text-center">BILLING</h5>
                     <div className="d-flex">
                        <div className="col-lg-6">
                           <h6 className="text-center">BILLING FIRM EXPENSES</h6>
                           <div>
                           {/* FIRM EXPENSES */}
                              <label>VALUE OF SUBJECT MATTER</label>
                              <input type="text" className="bill-form-input w-100" placeholder="VALUE"/>

                           </div>
                           <div>
                           {/* FIRM EXPENSES */}
                              <label>AMOUNT OF CHARGE</label>
                              <input type="text" className="bill-form-input w-100" placeholder="AMOUNT"/>

                           </div>
                        </div>

                        <div className="col-lg-6">
                           <h6 className="text-center">ADVOCATES EXPENSES</h6>
                           <div>
                           {/* FIRM EXPENSES */}
                              <label>INPUT AMOUNT</label>
                              <input type="text" className="bill-form-input w-100" placeholder="AMOUNT"/>

                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* DATES */}
                  <div className="dates sub-form my-4 p-3">
                     <h5 className="text-center">DATES</h5>
                     <div className="">
                        <label htmlFor="openDate">OPEN DATE</label>
                        <input type="text" id="openDate" name="openDate" 
                        className="bill-form-input ml-2 col-lg-8" placeholder="OPEN DATE"/>
                     </div>
                     <div className="">
                        <label>CLOSE DATE</label>
                        <input type="text" className="bill-form-input ml-2 col-lg-8" placeholder="CLOSE DATE"/>
                     </div>
                  </div>

                  {/* SUBMIT STATUS BUTTONS */}
                  <div className="d-flex justify-content-between mx-2 mt-3">
                     <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                     <button className="btn submit-btn py-2 px-3 bg-white" type="submit">SUBMIT</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
 
export default Criminal;