import React, { useEffect, useState } from 'react';
import { ArrowLeft} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { SaveBill } from '../../Actions/BillActions';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const LandBilling = (props) => {

   const [rentalType, setRentalType] = useState('')
   const [advocate, setAdvocate] = useState('')
   const [scale, setScale] = useState('')
   const [registered, setRegistered] = useState('')
   const [landValue, setLandValue] = useState('')
   const [total, setTotal] = useState('')

   const dispatch = useDispatch()
   const propertyType = 'LAND'

   const {loading, redirectBillCreator} = useSelector(state => state.newBill)
   console.log('LAND BILLING', 'loading', loading, 'REDIRECT CREATOR', redirectBillCreator)

   useEffect(() => {
      if(redirectBillCreator) {
         props.history.push('/reports/bills')
      }
      return () => {
         // cleanup
      }
   }, [redirectBillCreator])
   
   const calculate = () => {
      const clientId = props.match.params.clientId
         if(parseInt(scale) === 1) {
            if(parseInt(advocate) === 1) {
               if(landValue < 11000000) {
                  // DETERMINE TOTAL
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  
                  // REGISTRATION FUNCTION TAKES TOTAL AND REGISTRATION VALUE AND SETS TOTAL
                  checkRegistrationStatus(total, registered)
                  dispatch(SaveBill({clientId,propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  // DETERMINE TOTAL
                  const a = 1000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * y
                  const d = (.05 * y)
                  const total = (a + b + d)

                  // REGISTRATION FUNCTION TAKES TOTAL AND REGISTRATION VALUE AND SETS TOTAL
                  checkRegistrationStatus(total)
                 dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            } else if(parseInt(advocate) === 2) {
               
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  const a = 10000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * y
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            } else if(parseInt(advocate) === 3) {
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  
                  const a = 1000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * 10000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            } else if(parseInt(advocate) === 4) {
               if(landValue < 11000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  checkRegistrationStatus(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 11000000  
                  const b = 0.10 * 10000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  checkRegistrationStatus(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            }
         } else if(parseInt(scale) === 2) {
            setRegistered('1')
            if(parseInt(advocate) === 1) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            } else if(parseInt(advocate) === 2) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            } else if(parseInt(advocate) === 3) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            } else if(parseInt(advocate) === 4) {
               if(landValue < 21000000) {
                  const y = landValue - 1000000  
                  const b = 0.10 * y
                  const a = 1000000 * 0.15  
                  const total = a + b;
                  console.log(total)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               } else {
                  const a = 1000000 * 0.15  
                  const y = landValue - 21000000  
                  const b = 0.10 * 20000000
                  const d = (.05 * y)
                  const total = (a + b + d)
                  setTotal(total)
                  dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
               }
            }
         }
      
   }
   //REGISTRATION CHECK
   const checkRegistrationStatus = (total, registered) => {
      
      if(parseInt(registered) === 1) {
         console.log(total)
         console.log(total)
         return setTotal(total)
      } else if (parseInt(registered) === 2) {
         total += 600000
         console.log(total)
         return setTotal(total)
      }
   }
   const submitHandler = (e) => {
      e.preventDefault();
      calculate()
   }
   
   const goBack = () => {
      props.history.goBack()
   }
   
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
      
            <div className="w-100 bg-light col-lg-9 ">
            <div className="bg-white w-120 py-2 mx-2 d-flex justify-content-between">
               <ArrowLeft onClick={() => goBack()} className="cursor-pointer my-auto two-times mx-1"/>
               <h2 className="text-center">LAND SCHEDULE</h2>
               <h1></h1>
            </div>
            <form onSubmit={submitHandler}>
               <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="rental" 
                        value={rentalType}
                        onChange={(e) => setRentalType(e.target.value)}
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
                        <h4 className="lead land-registration-choice bg-white ml-1" onClick={() => setRegistered('0')}>YES</h4>
                        <h4 className="lead land-registration-choice bg-white mr-1" onClick={() => setRegistered('1')}>NO</h4>
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
         </div>
      </div>
   );
}
 
export default LandBilling;