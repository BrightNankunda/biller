import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveBill } from '../../Actions/BillActions';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const BillOutput = (props) => {

   const dispatch = useDispatch()

   const [scheduleData, setScheduleData] = useState(null)
   const [propertyType, setPropertyType] = useState('')
   const [landValue, setLandValue] = useState('')
   const [registered, setRegistered] = useState('')
   const [total, setTotal] = useState('')
   const [advocate, setAdvocate] = useState('')
   const [scale, setScale] = useState('')
   const [clientId, setClientId] = useState('')
   const [rentalType, setRentalType] = useState('')

   // SET LOCALSTORAGE DATA
   useEffect(() => {
      if(localStorage.getItem('Schedule Data') !== undefined || null) {
         setScheduleData(JSON.parse(localStorage.getItem('Schedule Data')))
      }
      return () => {
         // cleanup
      }
   }, [])

   const {loading, redirectBillCreator} = useSelector(state => state.newBill)
   console.log('LAND BILLING', 'loading', loading, 'REDIRECT CREATOR', redirectBillCreator)

   // REDIRECT BILL CREATOR AFTER THE CLIENT HAS BEEN CREATED
   useEffect(() => {
      if(redirectBillCreator) {
         props.history.push('/reports/bills')
      }
      return () => {
         // cleanup
      }
   }, [redirectBillCreator])

   console.log('Schedule Data', scheduleData)

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
   useEffect(() => {
      if(scheduleData !== null) {
         const {propertyType, landValue, advocate, scale,rentalType, registered, total,clientId} = scheduleData
         setPropertyType(propertyType)
         setLandValue(landValue)
         setAdvocate(advocate)
         setScale(scale)
         setRentalType(rentalType)
         setRegistered(registered)
         setTotal(total)
         setClientId(clientId)
      }
      return () => {
         // cleanup
      }
   }, [scheduleData])
   
   const SaveBillData = () => {
      console.log(propertyType, landValue, scale,rentalType, registered, total,clientId)
      dispatch(SaveBill({clientId, propertyType, landValue,scale,rentalType,advocate,registered,total}))
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3 className="tect-center">BILL OUTPUT DATA</h3>
               
               {scheduleData && <div className="my-2 d-flex justify-content-center forty-height light-color">
                  <div className="col-lg-10 p-2">
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLIENT NAME: </span>
                        <span className="col-50">{scheduleData.clientName}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">PROPERTY TYPE: </span> 
                        <span className="col-50">{scheduleData.propertyType}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark"><span className="col-50 mr-2">ADVOCATE: </span>
                           <span className="col-50">{advocateOptions[parseInt(scheduleData.advocate) - 1].value}</span></h5>
                     {scheduleData.propertyType === "LAND" && 
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">SCALE: </span>
                        <span>
                           {scaleOptions[parseInt(scheduleData.scale) - 1].value}
                        </span></h5>}
                     {scheduleData.propertyType === "RENT" && 
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">RENTAL TYPE: </span>
                        <span className="col-50">{rentOptions[parseInt(scheduleData.rentalType) - 1].value}</span>
                     </h5>}
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">REGISTERATION STATUS: </span>
                        <span className="col-50">{scheduleData.propertyType}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">LAND VALUE: </span>
                        <span className="col-50">{scheduleData.landValue}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">TOTAL: </span>
                        <span className="col-50">{scheduleData.total}</span>
                     </h5>
                     <div className="d-flex justify-content-center my-2">
                        <button className="btn submit-btn py-2 px-3 bg-white" onClick={SaveBillData}>SAVE BILL DATA</button>
                     </div>
                  </div>

               </div>}
            </div>
         </div>
      </div>
   );
}
 
export default BillOutput;