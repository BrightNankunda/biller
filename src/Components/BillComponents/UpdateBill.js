import React, { useEffect, useState } from 'react';
import { ArrowLeft} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { FetchABill } from '../../Actions/BillActions';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const LandBilling = (props) => {
   const {loading, bill} = useSelector(state => state.singleBill)
   console.log(bill)

   const [propertyType, setPropertyType] = useState(bill.propertyType)
   const [rent, setRent] = useState(bill.scaleOrRentalType)
   const [advocate, setAdvocate] = useState(bill.advocate)
   const [scale, setScale] = useState(bill.scale)
   const [landRegistration, setLandRegistration] = useState(bill.registered)
   const [landValue, setLandValue] = useState(bill.landValue)

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

   const scaleOptions = {
      "1": "Scale of charges on sales, purchases, mortgages and debentures",
      "2": "Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered"
   }

   const landRegistrationOptions = {
      "0": "YES",
      "1": "NO"
   }

   const submitHandler = (e) => {
      e.preventDefault();
      console.log(rent, advocate, scale, landRegistration, landValue)
   }

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(FetchABill(props.match.params.billId))
      return () => {
         // cleanup
      }
   }, [])


   const goBack = () => {
      props.history.goBack()
   }

   const param = props.match.params.billId
   
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
               <ArrowLeft onClick={() => goBack()} className="cursor-pointer my-auto two-times mx-1"/>
               
            </div>
            {bill && <form onSubmit={submitHandler}>
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
                        value={rent.rentalOptions}
                        onChange={(e) => setRent(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE RENT TYPE</option>
                        {rentOptions.map(rentOption => (
                           <option value={rentOption.choice} key={rentOption}>{rentOption.value}</option>
                        ))}
                     </select>
                     
                  </div>
               </div>
               
               <div className="advanced-input-wrapper m-2 w-90 my-3">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="advocate" 
                        value={advocate.advocateOptions}
                        onChange={(e) => setAdvocate(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE ADVOCATE TYPE</option>
                        {advocateOptions.map(advocateOption => (
                           <option value={advocateOption.choice} key={advocateOption}>{advocateOption.value}</option>
                        ))}
                     </select>
                  </div>
               </div>
               <div className="advanced-input-wrapper w-90 m-2">
                  <div className="d-flex flex-col m-2">
                     <select type="select" 
                     className="bill-input px-2" 
                     id="scale" 
                     value={scale.scaleOptions}
                     onChange={(e) => setScale(e.target.value)}>
                        <option disabled value="">CHOOSE SCALE TYPE</option>
                        {scaleOptions.map(scaleOption => (
                           <option value={scaleOption.choice} key={scaleOption}>{scaleOption.value}</option>
                        ))}
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