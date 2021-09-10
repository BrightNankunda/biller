import React, { useEffect, useState } from 'react';
import { ArrowLeft} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { FetchABill, UpdateABill } from '../../Actions/BillActions';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const LandBilling = (props) => {
   const {loading, bill} = useSelector(state => state.singleBill)
   console.log(bill)

   const [billId, setBillId] = useState('')
   const [clientId, setClientId] = useState('')
   const [propertyType, setPropertyType] = useState('')
   const [rent, setRent] = useState('')
   const [advocate, setAdvocate] = useState('')
   const [scale, setScale] = useState('')
   const [landRegistration, setLandRegistration] = useState('')
   const [landValue, setLandValue] = useState('')
   const [total, setTotal] = useState('')

   const rentOptions = [
      {choice: "1", value : "Rack rent means rent representing the value of the land and buildings"},
      {choice: "2", value : "Ground rent means rent representing the value of the land without buildings on it"}
   ]

   const advocateOptions = [
      {choice: "1", value : "Vendor's Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance"},
      {choice: "2", value : "Purchase's Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance"},
      {choice: "3", value : "Mortgagor's Advocate: For deducting title to freehold or lease property, perusing mortagage and completing"},
      {choice: "4", value : "Mortgagee's Advocate: For investigating title to freehold or lease hold property and completing"}
   ]

   const scaleOptions = [
      {choice: "1", value : "Scale of charges on sales, purchases, mortgages and debentures"},
      {choice: "2", value : "Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered"}
   ]

   const landRegistrationOptions = {
      "0": "YES",
      "1": "NO"
   }

   const dispatch = useDispatch()

   // HANDLE UPDATE FUNCTION
   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(UpdateABill({billId, propertyType, rentalType: rent, advocate, scale, registered: landRegistration, landValue, total, clientId}))
      // console.log(billId, propertyType, rent, advocate, scale, landRegistration, landValue, total, clientId)
   }

   // FETCH A SINGLE BILL DISPATCH FUNCTION
   useEffect(() => {
      dispatch(FetchABill(props.match.params.billId))
      setBillId(props.match.params.billId)
      return () => {
         // cleanup
      }
   }, [props.match.params.billId])

   // SET BILL DATA FUCNTION WHEN IT'S READY
   useEffect(() => {
      if(!loading && bill != null) {
         setPropertyType(bill.propertyType)
         setClientId(bill.createdFor)
         setRent(bill.scaleOrRentalType)
         setScale(bill.scaleOrRentalType)
         setLandValue(bill.landValue)
         setLandRegistration(bill.registered)
         setAdvocate(bill.advocate)
         setTotal(bill.total)
      }
      return () => {
      }
   }, [loading, bill])

   // GET UPDATE STATE
   const {loading: loadingBillUpdate, redirectBillUpdator} = useSelector(state => state.updatedBill)

   // HANDLE UPDATE STATE
   useEffect(() => {
      if(!loadingBillUpdate && redirectBillUpdator) {
         props.history.push('/reports/bill/' + bill._id)
      }
      return () => {
         // cleanup
      }
   }, [loadingBillUpdate, redirectBillUpdator])
   const goBack = () => {
      props.history.goBack()
   }

   const registeredStyles = (registeredValue) => {
      return (registeredValue === landRegistration) ? "green" : null
   }
   
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
      
            <div className="w-100 bg-light col-lg-9 ">
            <h4 className="text-center">UPDATE BILL DATA</h4>
            <div className="bg-white w-120 py-2 mx-2 d-flex justify-content-center">
               <button className="cursor-pointer my-auto btn btn-back">
                  <ArrowLeft onClick={() => goBack()} className="two-times mx-1"/>
                  Back
               </button>
               
            </div>
            {loading && 
               <div className="w-100">
                  <div className="d-flex justify-content-center my-auto align-content-center">
                     <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                  </div>
               </div>
            }
            {!loading && bill && <form onSubmit={submitHandler}>
               <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="rental" 
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE PROPERTY TYPE</option>
                        <option value="LAND">LAND</option>
                        <option value="RENT">RENT</option>
                     </select>
                  </div>
               </div>
               <div className="advanced-input-wrapper m-2 w-90 my-3">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="rental" 
                        value={rent}
                        onChange={(e) => setRent(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE RENT TYPE</option>
                        {rentOptions.map(rentOption => (
                           <option value={rentOption.choice} key={rentOption.choice}>{rentOption.value}</option>
                        ))}
                     </select>
                     
                  </div>
               </div>
               
               <div className="advanced-input-wrapper m-2 w-90 my-3">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="advocate" 
                        value={advocate}
                        onChange={(e) => setAdvocate(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE ADVOCATE TYPE</option>
                        {advocateOptions.map(advocateOption => (
                           <option value={advocateOption.choice} key={advocateOption.choice}>{advocateOption.value}</option>
                        ))}
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
                        {scaleOptions.map(scaleOption => (
                           <option value={parseInt(scaleOption.choice)} key={scaleOption.choice}>{scaleOption.value}</option>
                        ))}
                     </select>
                  </div>
               </div>
               <div className="advanced-input-wrapper m-2 w-90 my-3 bg-light">
                  <div className="d-flex flex-col m-2">
                     <select type="select" 
                        className="bill-input px-2" 
                        id="registered" 
                        value={landRegistration}
                        onChange={(e) => setLandRegistration(e.target.value)}>
                        <option disabled value="">IS PROPERTY REGISTERED?</option>
                        <option value="1">YES</option>
                        <option value="2">NO</option>
                     </select>
                  </div>
               </div>
               <div className="advanced-input-wrapper m-2 my-3 w-90">
                  <div className="d-flex justify-content-between">
                     <h4 className="mx-3 lead my-auto">INPUT VALUE OF LAND</h4>
                     <input type="number"
                     value={landValue}
                     onChange={(e) => setLandValue(e.target.value)}
                     className="bill-input col-lg-7" 
                     placeholder="ENTER LAND VALUE"/>
                  </div>
               </div>
               <div className="d-flex justify-content-center m-2">
                  <button className="btn update-btn py-2 px-3 bg-white">UPDATE</button>
               </div>
            </form>}
            
         </div>
         </div>
      </div>
   );
}
 
export default LandBilling;