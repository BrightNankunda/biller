import React, {useState, useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'
import { SaveCriminal, UpdateACriminal } from '../../Actions/CriminalActions';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const CriminalOutput = (props) => {

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
   const [notes, setNotes] = useState('')
   const [status, setStatus] = useState('')
   const [subjectValue, setSubjectValue] = useState('')
   const [clientName, setClientName] = useState('')
   const [total, setTotal] = useState('')
   const [advocateExpenses, setAdvocateExpenses] = useState('')
   const [firmExpenses, setFirmExpenses] = useState('')
   const [court, setCourt] = useState('')
   const [clientId, setClientId] = useState('')
   const [remand, setRemand] = useState('')
   const [committed, setCommitted] = useState('')
   const [offence, setOffence] = useState('')
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

   useEffect(() => {
      if(scheduleData !== null) {
         const {assignedTo, status,subjectValue,clientName,total,advocateExpenses,
            court,clientId,remand,notes,
            committed,offence,openDate,closeDate, firmExpenses} = scheduleData
         
         setAssignedTo(assignedTo)
         setStatus(status)
         setSubjectValue(subjectValue)
         setAdvocateExpenses(advocateExpenses)
         setFirmExpenses(firmExpenses)
         setRemand(remand)
         setCommitted(committed)
         setTotal(total)
         setOffence(offence)
         setClientId(clientId)
         setNotes(notes)
         setClientName(clientName)
         setCourt(court)
         setOpenDate(openDate)
         setCloseDate(closeDate)
      }
      return () => {
         // cleanup
      }
   }, [scheduleData])

   // DISPATCHING A REDUX ACTION ON SAVE
   const SaveCriminalData = () => {
      dispatch(SaveCriminal({
         clientId, assignedTo, status, subjectValue, advocateExpenses, 
         firmExpenses, court, offence, notes,
         committed, total, remand, openDate, closeDate
      }))
   }
   // DISPATCHING A REDUX ACTION ON UPDATE
   const UpdateCriminalData = () => {
      const criminalId = locationParams.criminalId
      dispatch(UpdateACriminal({
         clientId, assignedTo, status, subjectValue, advocateExpenses, 
         firmExpenses, court, offence, notes, criminalId,
         committed, total, remand, openDate, closeDate
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
               <h3 className="text-center">CRIMINAL OUTPUT DATA</h3>
               
                {scheduleData && <div className="my-2 d-flex justify-content-center forty-height light-color">
                  <div className="col-lg-10 p-2">
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">CLIENT NAME: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.clientName}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ASSIGNED TO: </span> 
                        <span className="col-50 ml-2 text-primary">{scheduleData.assignedTo}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                     <span className="col-50 mr-2">COURT: </span>
                           <span className="col-50 ml-2 text-primary">{scheduleData.court}</span></h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">OFFENCE: </span>
                        <span className="ml-2 text-primary">
                           {scheduleData.offence}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">COMMITTED: </span>
                        <span className="ml-2 text-primary">
                           {scheduleData.committed}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">REMAND: </span>
                        <span className="ml-2 text-primary">
                           {scheduleData.remand}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">NOTES: </span>
                        <span className="ml-2 text-primary">
                           {scheduleData.notes}
                        </span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">FIRM EXPENSES: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.firmExpenses}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">ADVOCATE EXPENSES: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.advocateExpenses}</span>
                     </h5>
                     <h5 className="row d-flex border-bottom border-dark">
                        <span className="col-50 mr-2">VALUE OF SUBJECT MATTER: </span>
                        <span className="col-50 ml-2 text-primary">{scheduleData.subjectValue}</span></h5>
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
                        >SAVE BILL DATA</button>

                     </div>}
                     {updating && <div className="d-flex justify-content-center my-2">
                        <button className="btn submit-btn py-2 px-3 bg-white" 
                        onClick={UpdateCriminalData}
                        >UPDATE BILL DATA</button>
                        
                     </div>}
                  </div>

               </div>} 
            </div>
         </div>
      </div>
   );
}
 
export default CriminalOutput;