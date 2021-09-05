import React, {useState, useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
import { UpdateACompanyBill, SaveCompanyBill } from '../../Actions/CompanyActions';
 
const CompanyOutput = (props) => {

   const locationParams = queryString.parse(props.location.search)

   // DETERMINING DISPLAY STATUS FOR SAVING AND UPDATING BUTTONS 
   useEffect(() => {
      if(locationParams !== '') {
         if(locationParams.save) {
            setSaving(true)  
         } else if(locationParams.update) {
            setUpdating(true) 
         }
      } else {
         return props.history.goBack()
      }
      
      return () => {
         // cleanup
      }
   }, [props.location.search, props.match.params.criminalId])

   
   const newCriminal = useSelector(state => state.newCriminal)
   const {loading: loadingCriminalCreated, redirectCriminalCreator} = newCriminal

   const dispatch = useDispatch()

   const [saving, setSaving] = useState(false)
   const [updating, setUpdating] = useState(false)
   const [scheduleData, setScheduleData] = useState(null)
   
   // SETTING LOCAL STORAGE DATA TO REACTIVE DATA
   const [assignedTo, setAssignedTo] = useState('')
   const [capital, setCapital] = useState('')
   const [clientId, setClientId] = useState('')
   const [clientName, setClientName] = useState('')
   const [total, setTotal] = useState('')
   const [advocateInstructions, setAdvocateInstructions] = useState('')
   const [advocateExpenses, setAdvocateExpenses] = useState('')
   const [openDate, setOpenDate] = useState('')
   const [closeDate, setCloseDate] = useState('')

   // REDIRECTING TO ALL BILLS/CRIMINALS AFTER HITTING SAVE
   useEffect(() => {
      if(redirectCriminalCreator) {
         localStorage.removeItem('Schedule Data')
         props.history.push('/reports/bills')
      }
      return () => {
         // cleanup
      }
   }, [redirectCriminalCreator])

   // RETRIEVING LOCAL STORAGE DATA
   useEffect(() => {
      if(localStorage.getItem('Schedule Data') !== undefined || null) {
         setScheduleData(JSON.parse(localStorage.getItem('Schedule Data')))
      }
      return () => {
         // cleanup
      }
   }, [])

   const advocateInstructionsArray = [
      {"value": "1", "details": "instructions fees for the formation and incorporation of a private company with limited liability and share capital"},
      {"value": "2", "details": "instructions for the formation and incorporation of a public company "},
      {"value": "3", "details": "instruction for fees for the formation and incorpation of a new company without share capital"},
      {"value": "4", "details": "instructions for fees for the registering a foreign company"}
   ]

   useEffect(() => {
      if(scheduleData !== null) {
         const {assignedTo, capital,clientName,total,advocateExpenses,clientId,
            openDate,closeDate, advocateInstructions} = scheduleData
         
         setAssignedTo(assignedTo)
         setCapital(capital)
         setAdvocateExpenses(advocateExpenses)
         setAdvocateInstructions(advocateInstructions)
         setTotal(total)
         setClientId(clientId)
         setClientName(clientName)
         setOpenDate(openDate)
         setCloseDate(closeDate)
      }
      return () => {
         // cleanup
      }
   }, [scheduleData])

   // DISPATCHING A REDUX ACTION ON SAVE
   const SaveCriminalData = () => {
      dispatch(SaveCompanyBill({
         clientId, assignedTo, capital, advocateInstructions, advocateExpenses, 
         total, openDate, closeDate
      }))
   }
   // DISPATCHING A REDUX ACTION ON UPDATE
   const UpdateCriminalData = () => {
      const criminalId = locationParams.criminalId
      dispatch(UpdateACompanyBill({
         clientId, assignedTo, capital, advocateInstructions, advocateExpenses, 
         total, openDate, closeDate,
      }))
   }
   console.log('QUEERY PROPS', props, updating, saving)

   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3 className="text-center">COMPANY OUTPUT DATA</h3>
               
                {scheduleData && advocateInstructions && <div className="my-2 d-flex justify-content-center forty-height light-color">
                  <div className="col-lg-10 p-2">
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLIENT NAME: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.clientName}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ASSIGNED TO: </span> 
                        <span className="col-50 ml-2 text-primary">{scheduleData.assignedTo}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ADVOCATE EXPENSES: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.advocateExpenses}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ADVOCATE INSTRUCTIONS: </span>
                        <span className="col-50 ml-2 text-primary">
                        {advocateInstructionsArray[parseInt(advocateInstructions)].details}
                        </span></h5>
                    
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">AMOUNT OF CAPITAL: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.capital}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">TOTAL: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.total}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">OPEN DATE: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.openDate}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLOSE DATE: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.closeDate}</span></h5>
                     {saving && <div className="d-flex justify-content-center my-2">
                        <button className="btn submit-btn py-2 px-3 bg-white" 
                        onClick={SaveCriminalData}
                        >SAVE COMPANY DATA</button>

                     </div>}
                     {updating && <div className="d-flex justify-content-center my-2">
                        <button className="btn submit-btn py-2 px-3 bg-white" 
                        onClick={UpdateCriminalData}
                        >UPDATE COMPANY DATA</button>
                        
                     </div>}
                  </div>

               </div>} 
            </div>
         </div>
      </div>
   );
}
 
export default CompanyOutput;