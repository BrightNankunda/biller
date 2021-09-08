import React, {useState, useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
import { UpdateACompanyBill, SaveCompanyBill } from '../../Actions/CompanyActions';
 
const FamilyBillOutput = (props) => {

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
   }, [props.location.search, props.match.params.companyId])

   
   const newCompanyBill = useSelector(state => state.newCompanyBill)
   const {loading: loadingCompanyBillCreated, redirectCompanyBillCreator} = newCompanyBill

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

   // REDIRECTING TO ALL USER BILLS/CRIMINALS/COMPANY BILLS AFTER HITTING SAVE
   useEffect(() => {
      if(redirectCompanyBillCreator) {
         localStorage.removeItem('Schedule Data')
         props.history.push('/reports/bills')
      }
      return () => {
         // cleanup
      }
   }, [redirectCompanyBillCreator])

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
   const SaveCompanyBillData = () => {
      console.log('Saving');
      dispatch(SaveCompanyBill({
         clientId, assignedTo, capital, advocateInstructions, advocateExpenses, 
         total, openDate, closeDate
      }))
   }
   // DISPATCHING A REDUX ACTION ON UPDATE
   const UpdateCompanyBillData = () => {
      const companyBillId = locationParams.cBId
      dispatch(UpdateACompanyBill({
         clientId,companyBillId, assignedTo, capital, advocateInstructions, advocateExpenses, 
         total, openDate, closeDate,
      }))
   }

   return (
      <div>
         <AppNavbar />
         <div className="d-flex w-100">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
            <div className="col-lg-9">
               <h3 className="text-center">FAMILY BILL DATA</h3>
               
                 
            </div>
         </div>
      </div>
   );
}
 
export default FamilyBillOutput;