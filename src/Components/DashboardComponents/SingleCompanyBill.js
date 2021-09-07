import React, {useState, useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'
import AppNavbar from '../AppNavbar';
import { FetchACompanyBill } from '../../Actions/CompanyActions';
import SideBar from '../BillComponents/SideBar';
 
const SingleCompanyBill = (props) => {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(FetchACompanyBill(props.match.params.companyBillId))
      console.log('BILL ID', props.match.params.companyBillId)
      return () => {
         // cleanup
      }
   }, [props.match.params.companyBillId])
     
   const {loading, companyBill} = useSelector(state => state.singleCompanyBill)

   console.log(loading, companyBill)

   const [assignedTo, setAssignedTo] = useState('')
   const [capital, setCapital] = useState('')
   const [clientId, setClientId] = useState('')
   // const [clientName, setClientName] = useState('')
   const [total, setTotal] = useState('')
   const [advocateInstructions, setAdvocateInstructions] = useState('')
   const [advocateExpenses, setAdvocateExpenses] = useState('')
   const [openDate, setOpenDate] = useState('')
   const [closeDate, setCloseDate] = useState('')


   const advocateInstructionsArray = [
      {"value": "1", "details": "instructions fees for the formation and incorporation of a private company with limited liability and share capital"},
      {"value": "2", "details": "instructions for the formation and incorporation of a public company "},
      {"value": "3", "details": "instruction for fees for the formation and incorpation of a new company without share capital"},
      {"value": "4", "details": "instructions for fees for the registering a foreign company"}
   ]

   useEffect(() => {
      if(companyBill !== null || undefined) {
         const {assignedTo, capital,clientName,total,advocateExpenses,clientId,
            openDate,closeDate, advocateInstructions} = companyBill
         
         setAssignedTo(assignedTo)
         setCapital(capital)
         setAdvocateExpenses(advocateExpenses)
         setAdvocateInstructions(advocateInstructions)
         setTotal(total)
         setClientId(clientId)
         // setClientName(clientName)
         setOpenDate(openDate)
         setCloseDate(closeDate)
      }
      return () => {
         // cleanup
      }
   }, [companyBill])
  
   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3 className="text-center">COMPANY BILL DATA</h3>
               
                {advocateInstructions && companyBill && <div className="my-2 d-flex justify-content-center forty-height light-color">
                  <div className="col-lg-10 p-2">
                     {/* <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLIENT NAME: </span>
                        <span className="col-50 ml-2 text-primary">{clientName}</span></h5> */}
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ASSIGNED TO: </span> 
                        <span className="col-50 ml-2 text-primary">{assignedTo}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ADVOCATE EXPENSES: </span>
                        <span className="col-50 ml-2 text-primary">{advocateExpenses}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ADVOCATE INSTRUCTIONS: </span>
                        <span className="col-50 ml-2 text-primary">
                        {advocateInstructionsArray[parseInt(advocateInstructions) - 1].details}
                        </span></h5>
                    
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">AMOUNT OF CAPITAL: </span>
                        <span className="col-50 ml-2 text-primary">{capital}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">TOTAL: </span>
                        <span className="col-50 ml-2 text-primary">{total}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">OPEN DATE: </span>
                        <span className="col-50 ml-2 text-primary">{openDate}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLOSE DATE: </span>
                        <span className="col-50 ml-2 text-primary">{closeDate}</span></h5>
                     
                  </div>

               </div>} 
            </div>
         </div>
      </div>
   );
}
 
export default SingleCompanyBill;