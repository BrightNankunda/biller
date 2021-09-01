import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import AppNavbar from '../AppNavbar';
import { FetchClients } from '../../Actions/ClientActions';
import SideBar from './SideBar';
import { FetchACriminal } from '../../Actions/CriminalActions';
 
const UpdateCriminal = (props) => {
   let criminalId = props.match.params.criminalId

   const {loading: loadingClients, clients} = useSelector(state => state.clients)
   console.log('LOADING CLIENTS', loadingClients, 'Clients', clients)
   const dispatch = useDispatch()

   const [assignedTo, setAssignedTo] = useState('')
   const [status, setStatus] = useState('')
   const [court, setCourt] = useState('')
   const [offence, setOffence] = useState('')
   const [remand, setRemand] = useState('')
   const [notes, setNotes] = useState('')
   const [subjectValue, setSubjectValue] = useState('')
   const [committed, setCommitted] = useState('')
   const [firmExpenses, setFirmExpenses] = useState('')
   const [advocateExpenses, setAdvocateExpenses] = useState('')
   const [closeDate, setCloseDate] = useState('')
   const [openDate, setOpenDate] = useState('')


   const [total, setTotal] = useState('')
   const [client, setClient] = useState('')
   const [showForm, setShowForm] = useState(true)

   const handleAssignedToChange = (e) => {
      setAssignedTo(e.target.Value)
   }
   const handleStatusChange = (e) => {
      setStatus(e.target.value)
   }
   const handleCourtChange = (e) => {
      setCourt(e.target.value)
   }
   const handleOffenceChange = (e) => {
      setOffence(e.target.value)
   }
   const handleRemandChange = (e) => {
      setRemand(e.target.value)
   }
   const handleNotesChange = (e) => {
      setNotes(e.target.value)
   }
   const handleSubjectValueChange = (e) => {
      setSubjectValue(e.target.value)
   }
   const handleCommittedChange = (e) => {
      setCommitted(e.target.value)
   }
   const handleFirmExpensesChange = (e) => {
      setFirmExpenses(e.target.value)
   }
   const handleAdvocateExpensesChange = (e) => {
      setAdvocateExpenses(e.target.value)
   }
   const handleOpenDateChange = (e) => {
      setOpenDate(e.target.value)
   }
   const handleCloseDateChange = (e) => {
      setCloseDate(e.target.value)
   }

   const calculateNewTotal = () => {
      console.log('Court', court, 'Subject Value', subjectValue);
      if(parseInt(court) === 1 ) {
         if(parseInt(subjectValue) <= 2000000) { // 2 Million
            const currentTotal = parseInt(subjectValue) * 0.15
            // console.log(currentTotal)
            toLocalStorageAndRedirect(currentTotal)
         } else if(parseInt(subjectValue) <= 5000000) { // < 5 Million
            const currentTotal = (2000000 * 0.15) +((parseInt(subjectValue) - 2000000 ) *0.14) 
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 10000000) { // 10 Million
            const currentTotal = (2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12)
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 20000000) { // 20 Million
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10) 
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 50000000) { // 50 Million
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(parseInt(subjectValue)-20000000)*0.08
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 100000000) { // 100 Million
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05)
            toLocalStorageAndRedirect(currentTotal)
            
         } else{ // greater Than 100 Million
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02)
            toLocalStorageAndRedirect(currentTotal)
            
         }
      } else if(parseInt(court) === 2 ){
         // to sue in ordinary suit in which no defense is filed or in a summary suit where no application for leave to appear and defend is made
         if(parseInt(subjectValue) <= 2000000) { // 2 Million
            const currentTotal = (parseInt(subjectValue) * 0.15) * 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 5000000) { // 5 Million
            const currentTotal = ((2000000*0.15)+((parseInt(subjectValue)-2000000)*0.14))* 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 10000000) { // 10 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12))* 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 20000000) { // 20 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10))* 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 50000000) { // 30 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+((parseInt(subjectValue)-20000000)*0.08))* 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 100000000) { // 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05))* 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         } else { //greater Than 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02))* 0.65
            toLocalStorageAndRedirect(currentTotal)
            
         }
      } else if(parseInt(court) === 3) {
         // to sue or defend in summary suit in which an application for leave to appear and defend was made and refused
         if(parseInt(subjectValue) <= 2000000) {
            setTotal((parseInt(subjectValue) * 0.15)* 0.75)
         } else if(parseInt(subjectValue) <= 5000000) { // < 5 Million
            const currentTotal = ((2000000*0.15)+((parseInt(subjectValue)-2000000)*0.14))* 0.75 
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 10000000) { // < 10 Milliion
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12))* 0.75
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 20000000) { // < 20 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10))* 0.75
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 50000000) { // < 50 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+((parseInt(subjectValue)-20000000)*0.08))* 0.75
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 100000000) { // < 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05))* 0.75
            toLocalStorageAndRedirect(currentTotal)
            
         } else{ // greater Than 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02))* 0.75
            toLocalStorageAndRedirect(currentTotal)
            
         }
      } else if(parseInt(court) === 4) {
         // a suit where settlement is reached prior to confirmation of the first hearing date of the suit the fee
         console.log(4444)
      }
      
   }

   useEffect(() => {
      if(clients === null || undefined) {
         setShowForm(false)
      } else if(clients.length !== 0) {
         setShowForm(true)
      }
      return () => {
         // cleanup
      }
   }, [clients])

   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   useEffect(() => {
      dispatch(FetchACriminal(props.match.params.criminalId))
      console.log('BILL ID', props.match.params.criminalId)
      return () => {
         // cleanup
      }
   }, [props.match.params.criminalId])

   const {loading, criminal} = useSelector(state => state.singleCriminal)
   console.log('LOADING', loading, 'CRIMINAL', criminal)
   
   useEffect(() => {
      if(criminal !== null) {
         setAssignedTo(criminal.assignedTo)
         setStatus(criminal.status)
         setCourt(criminal.court)
         setOffence(criminal.offence)
         setRemand(criminal.remand)
         setNotes(criminal.notes)
         setSubjectValue(criminal.subjectValue)
         setCommitted(criminal.committed)
         setFirmExpenses(criminal.firmExpenses)
         setAdvocateExpenses(criminal.advocateExpenses)
         setCloseDate(criminal.closeDate)
         setOpenDate(criminal.openDate)
      }
      return () => {
         setAssignedTo('')
      }
   }, [criminal])

   const submitHandler = (e) => {
      e.preventDefault();
      // console.log('Submitted');
      calculateNewTotal()
   }

   const getClientDetails = (id) => {
      if(id === null) return
      return clients.find(client => client._id === id).firstName

   }

   // FUNCTION TO STORE IN LOCAL STORAGE AND REDIRECT TO CRIMINAL OUTPUT
   const toLocalStorageAndRedirect = (currentTotal) => {
      const clientId =  criminal.createdFor || client
      if(clientId.trim() === '') {
         return;
      }
      // console.log('SYSTEM TOTAL', total) 
      // return
      localStorage.setItem("Schedule Data", JSON.stringify(
         {"total": currentTotal, 
         "clientName": getClientDetails(clientId), "clientId": clientId,
         "assignedTo": assignedTo, "status": status, "committed": committed,
         "court":court, "offence":offence, "remand":remand, 
         "notes":notes, "subjectValue":subjectValue, 
         "firmExpenses":firmExpenses, "advocateExpenses":advocateExpenses, 
         "closeDate":closeDate || criminal.closeDate, "openDate":openDate || criminal.openDate
      }))
      props.history.push('/schedules/criminalOutput')
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex relative">
            <div className="col-lg-3 blue sticky">
               <SideBar />
            </div>
         
            <div className="w-100 bg-light col-lg-9 ">
               <h3 className="text-center">CRIMINAL MATTER TO UPDATE</h3>
               {showForm && clients && criminal && <form onSubmit={submitHandler}>
                  
                  { /* ABOUT FORM */}
                  <div className="about sub-form my-4 p-3 ">
                     <h5 className="text-center">ABOUT</h5>
                     <div className="my-1">
                        
                        {/* SELECT A CLIENT */}
                        {!props.match.params.clientId && <div className="d-flex flex-col w-90">
                           <div className="d-flex flex-col my-2">
                              <label htmlFor="client">CLIENT NAME</label>                             
                              <select type="select" className="bill-form-input px-2" 
                              id="client" 
                                 value={clients.filter(client => client.id === criminal.createdFor).firstName}
                                 onChange={(e) => setClient(e.target.value)}
                                 name="client">
                                 <option disabled value="">SCHEDULE OWNER/CLIENT</option>
                                 {clients && clients.map(client => (
                                    <option value={client._id} key={client._id}>{client.firstName + ' ' + client.lastName}</option>
                                 ))}
                              </select>
                              
                           </div>
                        </div>}
                     </div>
                     <div className="my-1">
                        <label htmlFor="assignedTo">ASSIGNED TO</label>
                        <input type="text" className="bill-form-input ml-2 w-50"
                           name="assignedTo" id="assignedTo"
                           value={assignedTo} onChange={handleAssignedToChange}
                           placeholder="ASSIGNED TO..."/>
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
                              onChange={handleStatusChange} value={status}
                              className="bill-form-input w-100" placeholder="STATUS..."/>
                           </div>
                           <div className="">
                              <label htmlFor="court">COURT</label>
                              <input type="text" name="court"
                               onChange={handleCourtChange} value={court}
                              className="bill-form-input w-100" placeholder="HIGH COURT..."/>
                           </div>
                           <div className="">
                              <label htmlFor="offence">OFFENCE</label>
                              <input type="text" name="offence"
                                 onChange={handleOffenceChange} value={offence}
                                 className="bill-form-input w-100" placeholder="OFFENCE..."/>
                           </div>
                           <div className="">
                              <label htmlFor="committed">COMMITTED</label>
                              <input type="text" name="committed" 
                              onChange={handleCommittedChange} value={committed}
                              className="bill-form-input w-100" placeholder="COMMITTED..."/>
                           </div>
                           <div className="">
                              <label htmlFor="remand">REMAND</label>
                              <input type="text" name="remand" 
                              onChange={handleRemandChange} value={remand}
                              className="bill-form-input w-100" placeholder="REMAND..."/>
                           </div>
                        </div>
                        <div className="notes col-lg-6">
                           <label>NOTES</label>
                           <textarea className="bill-form-input w-100" name="notes"
                           onChange={handleNotesChange} value={notes}
                           placeholder="ANY NOTES"/>
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
                           {/* VALUE OF SUBJECT MATTER */}
                              <label htmlFor="subjectValue">VALUE OF SUBJECT MATTER</label>
                              <input type="text" name="subjectValue"
                              onChange={handleSubjectValueChange} value={subjectValue}
                              className="bill-form-input w-100" placeholder="VALUE"/>

                           </div>
                           <div>
                           {/* FIRM EXPENSES */}
                              <label htmlFor="firmExpense">FIRM EXPENSES</label>
                              <input type="text" name="firmExpenses" 
                              onChange={handleFirmExpensesChange} value={firmExpenses}
                              className="bill-form-input w-100" placeholder="AMOUNT OF CHARGE"/>
                           </div>
                        </div>

                        <div className="col-lg-6">
                           <h6 className="text-center">ADVOCATES EXPENSES</h6>
                           <div>
                           {/* ADVOCATE EXPENSES */}
                              <label htmlFor="advocateExpenses">INPUT AMOUNT</label>
                              <input type="text" name="advocateExpenses" 
                              onChange={handleAdvocateExpensesChange} value={advocateExpenses}
                              className="bill-form-input w-100" placeholder="AMOUNT"/>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* DATES */}
                  <div className="dates sub-form my-4 p-3">
                     <h5 className="text-center">DATES</h5>
                     <div className="">
                        <label htmlFor="openDate">OPEN DATE</label>
                        <input type="date" id="openDate" name="openDate" 
                        onChange={handleOpenDateChange} value={openDate}
                        className="bill-form-input ml-2 col-lg-8" placeholder="OPEN DATE"/>
                     </div>
                     <div className="">
                        <label>CLOSE DATE</label>
                        <input type="date" name="closeDate" 
                        onChange={handleCloseDateChange} value={closeDate}
                        className="bill-form-input ml-2 col-lg-8" placeholder="CLOSE DATE"/>
                     </div>
                  </div>

                  {/* SUBMIT STATUS BUTTONS */}
                  <div className="d-flex justify-content-between mx-2 mt-3">
                     <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                     <button className="btn submit-btn py-2 px-3 bg-white" type="submit">SUBMIT</button>
                  </div>
               </form>}
               
            </div>
         </div>
      </div>
   );
}
 
export default UpdateCriminal;