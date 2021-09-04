import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchClients } from '../../Actions/ClientActions';
import { useForm } from '../../Hooks/useForm';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const CompaniesBilling = (props) => {

   const {loading: loadingClients, clients} = useSelector(state => state.clients)
   console.log('LOADING CLIENTS', loadingClients, 'Clients', clients)

   const dispatch = useDispatch()

   const [values, handleChange] = useForm({capital: 120000000, selection: '1', assignedTo: 'Bright'})
   const [total, setTotal] = useState('')

   const [client, setClient] = useState('')
   // SHOW FORM BOOLEAN
   const [showForm, setShowForm] = useState(true)

   const calculate = () => {
      const {capital, selection} = values

      if(parseInt(selection) === 1) {
         // instructions fees for the formation and incorporation of a private company with limited liability and share capital
         if(parseInt(capital) <= 10000000) {
            let total = (parseInt(capital)*0.10)

            if(total<= 500000) {
               setTotal(500000)
            } else {
               setTotal(total)
            }

         } else if(parseInt(capital) <= 50000000) {
            const  total=  ((10000000*0.10)+(parseInt(capital)-10000000)*0.03)
            setTotal(total)
         } else if(parseInt(capital)<= 100000000) {
            const total=((10000000*0.10)+(40000000*0.03)+((parseInt(capital)-50000000)*0.02))
            setTotal(total)
         } else {
            const total=((10000000*0.10)+(40000000*0.03)+(50000000*0.02)+(parseInt(capital)-100000000)*0.01)
            setTotal(total)

         }
      } else if(parseInt(selection) === 2) {
         // instructions for the formation and incorporation of a public company 
         if(parseInt(capital) <= 10000000) {
            const total = (parseInt(capital) * 0.10)*1.5
            if(total <= 1000000) {
               setTotal(1000000)
            } else {
               setTotal(total)
            }
         } else if(parseInt(capital) <= 50000000) {
            const total=((10000000*0.10) + (parseInt(capital) -10000000) * 0.03)*1.5
           setTotal(total)

         } else if(parseInt(capital) <= 100000000) {
            const total=((10000000*0.10)+(40000000*0.03)+((parseInt(capital)-50000000)*0.02))*1.5
            setTotal(total)
         } else {
            total=((10000000*0.10) + (40000000*0.03) + (50000000*0.02) + ((parseInt(capital) - 100000000)*0.01))*1.5
            setTotal(total)
         }
      } else if(parseInt(selection) === 3) {
         // instruction for fees for the formation and incorpation of a new company without share capital
         console.log(selection)
      } else if(parseInt(selection) === 4) {
         // instructions for fees for the registering a foreign company
         console.log(selection)
      }
      
   }

   // DEVELOPMENT USE: LOGGING TOTAL
   useEffect(() => {
      console.log(total)
      return () => {
         // cleanup
      }
   }, [total, values.capital])

   // SUBMIT HANDLER
   const submitHandler = (e) => {
      e.preventDefault();
      calculate()
   }

   // SETTING CLIENTS
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

   // FETCH CLIENTS TO SELECT FROM WHILE CREATING A BILL
   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   // GET CLIENT DETAILS TO STORE IN THE LOCALSTORAGE AND DISPLAY TO THE BILL CREATOR
   const getClientDetails = (id) => {
      if(id === null) return
      return clients.find(client => client._id === id).firstName

   }

   // FUNCTION TO STORE IN LOCAL STORAGE AND REDIRECT TO COMPANY OUTPUT
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
         "assignedTo": values.assignedTo, "capital":values.capital, 
         "advocateInstructions":values.advocateInstructions, 
         "closeDate":values.closeDate, "openDate":values.openDate
      }))
      props.history.push('/schedules/companyOutput?save=true')
   }

   const advocateInstructions = [
      {"value": "1", "details": "instructions fees for the formation and incorporation of a private company with limited liability and share capital"},
      {"value": "2", "details": "instructions for the formation and incorporation of a public company "},
      {"value": "3", "details": "instruction for fees for the formation and incorpation of a new company without share capital"},
      {"value": "4", "details": "instructions for fees for the registering a foreign company"}
   ]

   return (
      <div>
         <AppNavbar />
         <div className="d-flex relative">
            <div className="col-lg-3 blue sticky">
               <SideBar />
            </div>

            <div className="w-100 bg-light col-lg-9 ">
               <h4 className="text-center">COMPANIES BILLING</h4>
               <div className="w-100">
                  {showForm && <form onSubmit={submitHandler}>

                     <div className="about sub-form my-4 p-3 ">
                        <h5 className="text-center">ABOUT</h5>
                        <div className="my-1">
                           
                           {/* SELECT A CLIENT */}
                           {!props.match.params.clientId && <div className="d-flex flex-col w-90">
                              <div className="d-flex flex-col my-2">
                                 <label htmlFor="client">CLIENT NAME</label>                             
                                 <select type="select" className="bill-form-input px-2" 
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
                        </div>
                     
                        <div className="my-1">
                           <label htmlFor="assignedTo">ASSIGNED TO</label>
                           <input type="text" className="bill-form-input ml-2 w-50"
                              name="assignedTo" id="assignedTo"
                              value={values.assignedTo} onChange={handleChange}
                              placeholder="ASSIGNED TO..."/>
                        </div>
                     </div>

                     {/* BILLING-FORM */}
                     <div className="billing sub-form my-4 p-3">
                        <h5 className="text-center">BILLING</h5>
                        <div className="d-flex">
                           <div className="col-lg-6">
                              <h6 className="text-center">BILLING FIRM EXPENSES</h6>
                              <div>
                              {/* AMOUNT OF CAPITAL */}
                                 <label htmlFor="capital">AMOUNT OF CAPITAL</label>
                                 <input type="text" name="capital"
                                 onChange={handleChange} value={values.capital}
                                 className="bill-form-input w-100" placeholder="AMOUNT OF CAPITAL"/>

                              </div>
                           

                           {/* SELECT ADVOCATE INSTRUCTIONS */}
                           <div className="">
                                 <label htmlFor="advocateExpenses">ADVOCATE INSTRUCTIONS </label>
                                 <select type="select" className="bill-form-input w-100 px-2" 
                                 id="values.advocateInstructions" 
                                    value={values.advocateInstructions}
                                    onChange={handleChange} name="advocateInstructions">
                                    <option disabled value="">CHOOSE ADVOCATE INSTRUCTIONS</option>
                                    {advocateInstructions.map(instruction => (
                                       <option value={instruction.value}>{instruction.details}</option>
                                    ))}
                                 </select>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <h6 className="text-center">ADVOCATES EXPENSES</h6>
                              <div>
                              {/* ADVOCATE EXPENSES */}
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
                     <div className="d-flex justify-content-center my-2">
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
      </div>
   );
}
 
export default CompaniesBilling;