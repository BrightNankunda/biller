import React, {useState, useEffect, useDispatch} from 'react';
import { useForm } from '../../Hooks/useForm';
import AppNavbar from '../AppNavbar';
import { FetchClients } from '../../Actions/ClientActions';
import SideBar from './SideBar';
 
const Criminal = (props) => {

   // const {loading: loadingClients, clients} = useSelector(state => state.clients)
   // const dispatch = useDispatch()

   // const [caseValue, setCaseValue] = useState(1) //ENUM [1, 2, 3, 4]
   // const [subjectValue, setSubjectValue] = useState(100000000) //MIN 2 MILLION
   const [values, handleChange] = useForm({clientName: '', assignedTo: '', status: '', 
   court:'1', offence: '', remand:'', notes:'', subjectValue:'2000000', 
   firmExpenses:'', advocateExpense:'', closeDate:'', openDate:''})
   const [total, setTotal] = useState('')

   const calculateTotal = () => {
      const {court, subjectValue} = values
      if(parseInt(court) === 1 ) {
         if(parseInt(subjectValue) <= 2000000) {
            const currentTotal = parseInt(subjectValue) * 0.15
            toLocalStorageAndRedirect(currentTotal)
         } else if(parseInt(subjectValue) <= 5000000) { // < 5 Million
            const currentTotal = (2000000 * 0.15) +((parseInt(subjectValue) - 2000000 ) *0.14) 
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 10000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12)
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 20000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10) 
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 50000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(parseInt(subjectValue)-20000000)*0.08
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 100000000) {
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05)
            setTotal(currentTotal)
         } else{
            const currentTotal = (2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02)
            setTotal(currentTotal)
         }
      } else if(parseInt(court) === 2 ){
         // to sue in ordinary suit in which no defense is filed or in a summary suit where no application for leave to appear and defend is made
         if(parseInt(subjectValue) <= 2000000) {
            const currentTotal = (parseInt(subjectValue) * 0.15) * 0.65
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 5000000) {
            const currentTotal = ((2000000*0.15)+((parseInt(subjectValue)-2000000)*0.14))* 0.65
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 10000000) {
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12))* 0.65
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 20000000) {
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10))* 0.65
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 50000000) {
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+((parseInt(subjectValue)-20000000)*0.08))* 0.65
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 100000000) {
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05))* 0.65
            setTotal(currentTotal)
         } else {
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02))* 0.65
            setTotal(currentTotal)
         }
      } else if(parseInt(court) === 3) {
         // to sue or defend in summary suit in which an application for leave to appear and defend was made and refused
         if(parseInt(subjectValue) <= 2000000) {
            setTotal((parseInt(subjectValue) * 0.15)* 0.75)
         } else if(parseInt(subjectValue) <= 5000000) { // < 5 Million
            const currentTotal = ((2000000*0.15)+((parseInt(subjectValue)-2000000)*0.14))* 0.75 
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 10000000) { // < 10 Milliion
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+((parseInt(subjectValue)-5000000)*0.12))* 0.75
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 20000000) { // < 20 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+((parseInt(subjectValue)-10000000)*0.10))* 0.75
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 50000000) { // < 50 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+((parseInt(subjectValue)-20000000)*0.08))* 0.75
            setTotal(currentTotal)
         } else if(parseInt(subjectValue) <= 100000000) { // < 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+((parseInt(subjectValue)-50000000)*0.05))* 0.75
            setTotal(currentTotal)
         } else{ // greater Than 100 Million
            const currentTotal = ((2000000*0.15)+(3000000*0.14)+(5000000*0.12)+(10000000*0.10)+(20000000*0.08)+(50000000*0.05)+((parseInt(subjectValue)-50000000)*0.02))* 0.75
            setTotal(currentTotal)
         }
      } else if(parseInt(court) === 4) {
         // a suit where settlement is reached prior to confirmation of the first hearing date of the suit the fee
         console.log(4444)
      }
      
   }

   // useEffect(() => {
   //    if(clients === null || undefined) {
   //       setShowForm(false)
   //    } else if(clients.length !== 0) {
   //       setShowForm(true)
   //    }
   //    return () => {
   //       // cleanup
   //    }
   // }, [clients])

   // useEffect(() => {
   //    dispatch(FetchClients())
   //    return () => {
   //       // cleanup
   //    }
   // }, [])

   const submitHandler = (e) => {
      e.preventDefault();
      // console.log(values)
      calculateTotal()
   }

   // const getClientDetails = (id) => {
   //    if(id === null) return
   //    return clients.find(client => client._id === id).firstName

   // }

   const toLocalStorageAndRedirect = (currentTotal) => {
      // console.log('SYSTEM TOTAL', total) 
      // return
      localStorage.setItem("Schedule Data", JSON.stringify(
         {"clientId": "1", 
         "total": currentTotal, 
         //"clientName": getClientDetails(clientId),
         "assignedTo": values.assignedTo, "status": values.status, 
         "court":values.court, "offence":values.offence, "remand":values.remand, 
         "notes":values.notes, "subjectValue":values.subjectValue, 
         "firmExpenses":values.firmExpenses, "adovateExpenses":values.advocateExpense, 
         "closeDate":values.closeDate, "openDate":values.openDate
      }))
      props.history.push('/schedules/criminalOutput')
   }
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
         
            <div className="w-100 bg-light col-lg-9 ">
               <h3 className="text-center">CRIMINAL MATTER</h3>
               <form onSubmit={submitHandler}>
                  
                  { /* ABOUT FORM */}
                  <div className="about sub-form my-4 p-3 ">
                     <h5 className="text-center">ABOUT</h5>
                     <div className="my-1">
                        <label htmlFor="clientName">CLIENT NAME</label>
                        <input type="text" name="clientName" 
                           value={values.clientName} onChange={handleChange}
                           id="clientName" className="bill-form-input ml-2 w-50" 
                           placeholder="CLIENT'S NAME..."/>
                     </div>
                     <div className="my-1">
                        <label htmlFor="assignedTo">ASSIGNED TO</label>
                        <input type="text" className="bill-form-input ml-2 w-50"
                           name="assignedTo" id="assignedTo"
                           value={values.assignedTo} onChange={handleChange}
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
                           onChange={handleChange} value={values.notes}
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
                              <label htmlFor="firmExpense">AMOUNT OF CHARGE</label>
                              <input type="text" name="firmExpenseS" 
                              onChange={handleChange} value={values.firmExpense}
                              className="bill-form-input w-100" placeholder="AMOUNT"/>
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
                     <div className="">
                        <label htmlFor="openDate">OPEN DATE</label>
                        <input type="date" id="openDate" name="openDate" 
                        onChange={handleChange} value={values.openDate}
                        className="bill-form-input ml-2 col-lg-8" placeholder="OPEN DATE"/>
                     </div>
                     <div className="">
                        <label>CLOSE DATE</label>
                        <input type="date" name="closeDate" 
                        onChange={handleChange} value={values.closeDate}
                        className="bill-form-input ml-2 col-lg-8" placeholder="CLOSE DATE"/>
                     </div>
                  </div>

                  {/* SUBMIT STATUS BUTTONS */}
                  <div className="d-flex justify-content-between mx-2 mt-3">
                     <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                     <button className="btn submit-btn py-2 px-3 bg-white" type="submit">SUBMIT</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
 
export default Criminal;