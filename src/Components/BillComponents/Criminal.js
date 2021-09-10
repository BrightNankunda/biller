import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { useForm } from '../../Hooks/useForm';
import AppNavbar from '../AppNavbar';
import { FetchClients } from '../../Actions/ClientActions';
import SideBar from './SideBar';
 
const Criminal = (props) => {

   const {loading: loadingClients, clients} = useSelector(state => state.clients)
   console.log('LOADING CLIENTS', loadingClients, 'Clients', clients)
   const dispatch = useDispatch()

   const [values, handleChange] = useForm({assignedTo: '', status: '',  
   court:'1', offence: '', remand:'', notes:'', subjectValue:'2000000', committed: '',
   firmExpenses:'', advocateExpenses:'', closeDate:'', openDate:''})
   const [total, setTotal] = useState('')
   const [client, setClient] = useState('')
   const [showForm, setShowForm] = useState(true)

   const calculateTotal = () => {
      const {court, subjectValue} = values
      if(parseInt(court) === 1 ) {
         // `To sue or defend anycase, whether commenced by plaint ,statement of claim, petition, originating summons or originating motions 
         //  or to present or oppose an appeal, where the claim or value of the subject matter can be determined from the pleading, settlement,
         // a valuation or the judgement`
         if(parseInt(subjectValue) <= 2000000) { // 2 Million
            const currentTotal = parseInt(subjectValue) * 0.15
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
         if(parseInt(subjectValue) <= 2000000) {
            setTotal((parseInt(subjectValue) * 0.15)* 0.85)
         } else if(parseInt(subjectValue) <= 5000000) { // < 5 Million
            const currentTotal = ((2000000*0.15)+((parseInt(subjectValue)-2000000)*0.14))* 0.85 
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 10000000) { // < 10 Milliion
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12))* 0.85
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 20000000) { // < 20 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10))* 0.85
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 50000000) { // < 50 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+((parseInt(subjectValue)-20000000)*0.08))* 0.85
            toLocalStorageAndRedirect(currentTotal)
            
         } else if(parseInt(subjectValue) <= 100000000) { // < 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05))* 0.85
            toLocalStorageAndRedirect(currentTotal)
            
         } else{ // greater Than 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02))* 0.85
            toLocalStorageAndRedirect(currentTotal)
            
         }
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

   const submitHandler = (e) => {
      e.preventDefault();
      // console.log(values)
      calculateTotal()
   }

   const getClientDetails = (id) => {
      if(id === null) return
      return clients.find(client => client._id === id).firstName

   }

   // FUNCTION TO STORE IN LOCAL STORAGE AND REDIRECT TO CRIMINAL OUTPUT
   const toLocalStorageAndRedirect = (currentTotal) => {
      const clientId = props.match.params.clientId || client
      // console.log('submitted')
      if(clientId.trim() === '') {
         return;
      }
      // console.log('SYSTEM TOTAL', total) 
      // return
      localStorage.setItem("Schedule Data", JSON.stringify(
         {"total": currentTotal, 
         "clientName": getClientDetails(clientId), "clientId": clientId,
         "assignedTo": values.assignedTo, "status": values.status, "committed": values.committed,
         "court":values.court, "offence":values.offence, "remand":values.remand, 
         "notes":values.notes, "subjectValue":values.subjectValue, 
         "firmExpenses":values.firmExpenses, "advocateExpenses":values.advocateExpenses, 
         "closeDate":values.closeDate, "openDate":values.openDate
      }))
      props.history.push('/schedules/criminalOutput?save=true')
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex relative">
            <div className="col-lg-3 blue sticky">
               <SideBar />
            </div>
         
            <div className="w-100 bg-light col-lg-9 ">
               <h3 className="text-center">CRIMINAL MATTER</h3>
               {showForm && <form onSubmit={submitHandler}>
                  
                  { /* ABOUT FORM */}
                  <div className="about sub-form my-4 p-3">
                     <h5 className="text-center">ABOUT</h5>
                     
                     <div className="my-2">
                        
                        {/* SELECT A CLIENT */}
                        {!props.match.params.clientId && <div className="row d-flex justify-content-center">
                           <div className="my-2 col-lg-10">
                              <label htmlFor="client" className="my-auto">CLIENT NAME</label>                             
                              <select type="select" className="bill-form-input px-2 ml-2 col-lg-8" 
                              id="client" 
                                 value={client}
                                 onChange={(e) => setClient(e.target.value)}
                                 name="client">
                                 <option disabled value="">SCHEDULE OWNER/CLIENT</option>
                                 {clients && clients.map(client => (
                                    <option value={client._id} key={client._id}>{client.firstName + ' ' + client.lastName}</option>
                                 ))}
                              </select>
                              
                           </div>
                        </div>}
                     
                        <div className="my-1 row d-flex justify-content-center ">
                           <div className="my-2 col-lg-10">
                              <label htmlFor="assignedTo" className="my-auto">ASSIGNED TO</label>
                              <input type="text" className="bill-form-input ml-2 col-lg-8"
                                 name="assignedTo" id="assignedTo"
                                 value={values.assignedTo} onChange={handleChange}
                                 placeholder="ASSIGNED TO..."/>
                           </div>
                        </div>
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
                              onChange={handleChange} value={values.status}
                              className="bill-form-input w-100" placeholder="STATUS..."/>
                           </div>
                           <div className="">
                              <label htmlFor="court">COURT</label>
                              <input type="text" name="court"
                               onChange={handleChange} value={values.court}
                              className="bill-form-input w-100" placeholder="HIGH COURT..."/>
                           </div>
                           <div className="">
                              <label htmlFor="offence">OFFENCE</label>
                              <input type="text" name="offence"
                                 onChange={handleChange} value={values.offence}
                                 className="bill-form-input w-100" placeholder="OFFENCE..."/>
                           </div>
                           <div className="">
                              <label htmlFor="committed">COMMITTED</label>
                              <input type="text" name="committed" 
                              onChange={handleChange} value={values.committed}
                              className="bill-form-input w-100" placeholder="COMMITTED..."/>
                           </div>
                           <div className="">
                              <label htmlFor="remand">REMAND</label>
                              <input type="text" name="remand" 
                              onChange={handleChange} value={values.remand}
                              className="bill-form-input w-100" placeholder="REMAND..."/>
                           </div>
                        </div>
                        <div className="notes col-lg-6">
                           <label>NOTES</label>
                           <textarea className="bill-form-input w-100" name="notes"
                           onChange={handleChange} value={values.notes} rows={10}
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
                              onChange={handleChange} value={values.subjectValue}
                              className="bill-form-input w-100" placeholder="VALUE"/>

                           </div>
                           <div>
                           {/* FIRM EXPENSES */}
                              <label htmlFor="firmExpense">FIRM EXPENSES</label>
                              <input type="text" name="firmExpenses" 
                              onChange={handleChange} value={values.firmExpenses}
                              className="bill-form-input w-100" placeholder="AMOUNT OF CHARGE"/>
                           </div>
                        </div>

                        <div className="col-lg-6">
                           <h6 className="text-center">ADVOCATES EXPENSES</h6>
                           <div>
                           {/* ADVOCATE EXPENSES */}
                              <label htmlFor="advocateExpenses">INPUT AMOUNT</label>
                              <input type="text" name="advocateExpenses" 
                              onChange={handleChange} value={values.advocateExpenses}
                              className="bill-form-input w-100" placeholder="AMOUNT"/>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* DATES */}
                  <div className="dates sub-form my-4 p-3">
                     <h5 className="text-center">DATES</h5>
                     <div className="row d-flex justify-content-center">
                        <div className="col-lg-5 ml-2">
                              <label htmlFor="openDate">OPEN DATE</label>
                              <input type="date" id="openDate" name="openDate" 
                              onChange={handleChange} value={values.openDate}
                              className="bill-form-input  w-100" placeholder="OPEN DATE"/>
                        </div>
                        <div className="col-lg-5 ml-2">
                           <label htmlFor="closeDate">CLOSE DATE</label>
                           <input type="date" name="closeDate" 
                           onChange={handleChange} value={values.closeDate}
                           className="bill-form-input  w-100" placeholder="CLOSE DATE"/>
                        </div>
                     </div>
                  </div>

                  {/* SUBMIT STATUS BUTTONS */}
                  <div className="d-flex justify-content-between mx-2 mb-3 mt-3">
                     <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                     <button className="btn submit-btn py-2 px-3 bg-white" type="submit">SUBMIT</button>
                  </div>
               </form>}
               {!showForm && 
               <div 
               className="alert alert-danger forty-height w-100 d-flex justify-content-center">
               <div className="my-auto">
                  <h3 
                  className="text-danger text-center my-auto">
                  YOU CURRENTLY HAVE NO CLIENT, PLEASE ADD ONE!</h3> 
                  <div className="d-flex justify-content-center">
                     <Link to="/reports/addClient" 
                        className="text-primary text-center my-auto">ADD A CLIENT</Link>
                  </div>
               </div>
            </div>}
            </div>
         </div>
      </div>
   );
}
 
export default Criminal;