import React, { useState, useEffect } from 'react';
import { useForm } from '../../Hooks/useForm';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const CompaniesBilling = () => {


   const [values, handleChange] = useForm({capital: 120000000, selection: '1'})
   const [total, setTotal] = useState('')

   const calculate = () => {
      const {capital, selection} = values

      if(parseInt(selection) === 1) {
         // instructions fees for the formation and incorporation of a private company with limited liability and share capital
         if(parseInt(capital) <= 10000000) {
            let total = (parseInt(capital)*0.10)

            if(total<= 500000) {
               setTotal(500000)
            } else {
               setTotal(total)
            }

         } else if(parseInt(capital) <= 50000000) {
            const  total=  ((10000000*0.10)+(parseInt(capital)-10000000)*0.03)
            setTotal(total)
         } else if(parseInt(capital)<= 100000000) {
            const total=((10000000*0.10)+(40000000*0.03)+((parseInt(capital)-50000000)*0.02))
            setTotal(total)
         } else {
            const total=((10000000*0.10)+(40000000*0.03)+(50000000*0.02)+(parseInt(capital)-100000000)*0.01)
            setTotal(total)

         }
      } else if(parseInt(selection) === 2) {
         // instructions for the formation and incorporation of a public company 
         if(parseInt(capital) <= 10000000) {
            const total = (parseInt(capital) * 0.10)*1.5
            if(total <= 1000000) {
               setTotal(1000000)
            } else {
               setTotal(total)
            }
         } else if(parseInt(capital) <= 50000000) {
            const total=((10000000*0.10) + (parseInt(capital) -10000000) * 0.03)*1.5
           setTotal(total)

         } else if(parseInt(capital) <= 100000000) {
            const total=((10000000*0.10)+(40000000*0.03)+((parseInt(capital)-50000000)*0.02))*1.5
            setTotal(total)
         } else {
            total=((10000000*0.10) + (40000000*0.03) + (50000000*0.02) + ((parseInt(capital) - 100000000)*0.01))*1.5
            setTotal(total)
         }
      } else if(parseInt(selection) === 3) {
         // instruction for fees for the formation and incorpation of a new company without share capital
         console.log(selection)
      } else if(parseInt(selection) === 4) {
         // instructions for fees for the registering a foreign company
         console.log(selection)
      }
      
   }

   useEffect(() => {
      console.log(total)
      return () => {
         // cleanup
      }
   }, [total, values.capital])

   const submitHandler = (e) => {
      e.preventDefault();
      calculate()
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex relative">
            <div className="col-lg-3 blue sticky">
               <SideBar />
            </div>

            <div className="w-100 bg-light col-lg-9 ">
               <h4>COMPANIES BILLING</h4>
               <div className="w-100">
                  <form onSubmit={submitHandler}>
                     <div className="d-flex justify-content-center">
                        <button className="btn submit-btn py-2 px-3 bg-white" type="submit">SUBMIT</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default CompaniesBilling;