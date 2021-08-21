import React, { useEffect, useState } from 'react';
import { ArrowLeft} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SaveBill } from '../../Actions/BillActions';
import { FetchClients } from '../../Actions/ClientActions';
import AppNavbar from '../AppNavbar';
import SideBar from './SideBar';
 
const RentBilling = (props) => {

   const [rentalType, setRentalType] = useState('')
   const [advocate, setAdvocate] = useState('')
   const [scale, setScale] = useState('')
   const [registered, setRegistered] = useState('')
   const [landValue, setLandValue] = useState('')
   const [total, setTotal] = useState('')
   const [client, setClient] = useState('')
   const [showForm, setShowForm] = useState('')

   const {loading: loadingClients, clients} = useSelector(state => state.clients)
   const dispatch = useDispatch()
   const propertyType = 'RENT'

   const {loading, newBill, redirectBillCreator} = useSelector(state => state.newBill)
   console.log('RENT BILLING', 'NEW BILL FROM RENT BILLING', newBill, 'loading', loading, 'REDIRECT CREATOR', redirectBillCreator)

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
      if(redirectBillCreator) {
         props.history.push('/reports/bills')
      }
      return () => {
         // cleanup
      }
   }, [redirectBillCreator])

   const calculate = () => {
      const clientId = props.match.params.clientId || client
      if(clientId.trim() === '') {
         return;
      }
      if(parseInt(scale) === 1) {
            //RACK RENT
            if(parseInt(advocate) === 1) {
               // TOTAL MOVE THROUGH
               //PREPARING ADVOCATE
               if(parseInt(landValue) < 10000000) {            
                     const total = parseInt(landValue) *  0.05
                     if(total < 500000) {
                        setTotal(500000)
                     } else {
                        setTotal(total)
                     }
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
                     
               } else if(parseInt(landValue) < 20000000) {
                     const total = ((10000000 * 0.05) + (parseInt(landValue) - 10000000) *  0.03)
                     setTotal(total)
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)

               } else {
                        const total = ((10000000*0.05) + (10000000*0.03) + ((parseInt(landValue)-20000000) * 0.02))
                        setTotal(total)
                        toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
               }
            } else if(parseInt(advocate) === 2) {
               // TOTAL PASSES THROUGH
               setTotal(1000000)
               toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
            }
      }
      else if(parseInt(scale) === 2) {
         if(parseInt(advocate) === 3) {
               //PREPARING ADVOCATE
               if(parseInt(landValue) < 10000000) {
                     const total = parseInt(landValue) *  0.1
                     if(total < 500000) {
                        setTotal(500000)
                     } else {
                        setTotal(total)
                     }
                     // dispatch(SaveBill({clientId, propertyType, landValu,advocate,registered,total}))
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
                     
               } 
               else if(parseInt(landValue) < 50000000) {
                     const total = ((20000000 * 0.1) + parseInt(landValue - 20000000) * 0.05)
                     setTotal(total)
                     // dispatch(SaveBill({clientId, propertyType, landValu,advocate,registered,total}))
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
                     
               } 
               else {
                     const total = ((20000000*0.10) + (30000000*0.05) + (parseInt(landValue) - 50000000) * 0.02)
                     setTotal(total)
                     // dispatch(SaveBill({clientId, propertyType, landValu,advocate,registered,total}))
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
               }
         
         }else if(parseInt(advocate) === 4) {
               if(parseInt(landValue) < 10000000) {
                  const total = parseInt(landValue) *  0.1 * 0.3
                  if(total < 500000) {
                        setTotal(500000)
                  } else {
                        setTotal(total)
                  }
                     setTotal(total)
                     // dispatch(SaveBill({clientId, propertyType, landValu,advocate,registered,total}))
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)

               } else if(parseInt(landValue) < 50000000) {
                     const total = ((20000000 * 0.10 + (parseInt(landValue) - 20000000) * 0.05) * 0.3)
                     setTotal(total)
                     // dispatch(SaveBill({clientId, propertyType, landValu,advocate,registered,total}))
                     toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)

               } else {
                  const total = ((20000000 * 0.10) + (30000000 * 0.05)+((parseInt(landValue)-50000000) * 0.02))* 0.3
                  setTotal(total)
                  // dispatch(SaveBill({clientId, propertyType, landValu,advocate,registered,total}))
                  toLocalStorageAndRedirect(clientId, landValue,scale,advocate,registered)
                   
               }
         }
      }
      
   }


   const submitHandler = (e) => {
      e.preventDefault();
      // console.log(propertyType, landValue,scale, rentalType,advocate,registered,total)
      calculate()
   }

   const goBack = () => {
      props.history.goBack()
   }

   // GET CLIENT FIRST NAME
   const getClientDetails = (id) => {
      if(id === null) return
      return clients.find(client => client._id === id).firstName

   }

   // STORE TO LOCALSTORAGE
   const toLocalStorageAndRedirect = (clientId,landValue,scale,advocate,registered) => {
      // console.log('SYSTEM TOTAL', total) 
      // return
      localStorage.setItem("Schedule Data", JSON.stringify(
         {"clientId": clientId, "propertyType": propertyType, 
         "landValue": landValue, "scale": scale, "advocate": advocate,
         "registered": registered,"rentalType": rentalType, 
         "total": total, "clientName": getClientDetails(clientId)
      }))
      // console.log({"clientId": clientId, "propertyType": propertyType, "landValue": landValue, "scale": scale, "advocate": advocate,"registered": registered, "total": total})
      props.history.push('/schedules/billOutput')
   }

   const scaleEmpty = () => {
      return (scale.trim() === '') ? true : false;
   }

   const scaleIsOne = () => {
      return (parseInt(scale) === 1) ? true : false
   }

   useEffect(() => {
      scaleEmpty()
      scaleIsOne()
      console.log('Scale changed:', scale)
      return () => {
         // cleanup
      }
   }, [scale])


   
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
      
            <div className="w-100 bg-light col-lg-9 ">
            <div className="bg-white w-120 py-2 mx-2 mt-3 d-flex justify-content-between">
               <ArrowLeft onClick={() => goBack()} className="cursor-pointer my-auto two-times mx-2"/>
               <h2 className="text-center">RENT SCHEDULE</h2>
               <h1></h1>
            </div>
            {showForm && <form onSubmit={submitHandler}>
               {!props.match.params.clientId && <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
                  <div className="d-flex flex-col my-2 mx-2">
                     <select type="select" className="bill-input px-2" id="client" 
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

               <div className="advanced-input-wrapper m-2 my-3 w-90">
                  <div className="d-flex justify-content-between">
                     <h4 className="mx-3 lead my-auto">INPUT VALUE OF RENT</h4>
                     <input type="number"
                     value={landValue}
                     onChange={(e) => setLandValue(e.target.value)}
                     className="bill-input col-lg-7" 
                     placeholder="ENTER LAND VALUE"/>
                  </div>
               </div>
               <div className="advanced-input-wrapper m-2 w-90 my-3">
                  <div className="d-flex flex-col m-2">
                     <select type="select" 
                     className="bill-input px-2" 
                     value={scale}
                     id="scale" onChange={(e) => setScale(e.target.value)}>
                        <option disabled value="">CHOOSE SCALE</option>
                        
                        <option value="1">Scale of charges for leases and agreements at rack rent</option>
                        <option value="2">Scale of charges for leases and agreements at ground rent</option>
                        
                        
                     </select>
                  </div>
               </div>

               <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="rental" 
                        value={advocate}
                        onChange={(e) => setAdvocate(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE ADVOCATE TYPE</option>
                        
                        {!scaleEmpty() && scaleIsOne() && <>
                           <option value="1">To advocate for preparing, settling and completing a lease or agreement for a lease and counterpart lease or agreement or lease</option>
                           <option value="2">To Advocate for registering a lease or agreement for a lease</option>
                        </>
                        }
                        {!scaleEmpty() && !scaleIsOne() && <>
                           <option value="3">To advocate for preparing, settling, completing a lease and counterpart lease</option>
                           <option value="4">To advocate registering a lease or agreement of lease</option>
                        </>
                        }
                        {scaleEmpty() && <>
                           <option value=''>Please Fill The Scale Field First</option>
                        </>
                        }
                     </select>
                     
                  </div>
               </div>

               <div className="d-flex justify-content-between mx-2 mt-3">
                  <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                  <button className="btn submit-btn py-2 px-3 bg-white">SUBMIT</button>
               </div>
            </form>}

            {!showForm && 
            <div className="alert alert-danger forty-height w-100 d-flex justify-content-center">
               <div className="my-auto">
                  <h3 
                  className="text-danger text-center my-auto">
                  YOU CURRENTLY HAVE NO CLIENT, PLEASE ADD ONE!</h3> 
                  <div className="d-flex justify-content-center">
                     <Link to="/reports/addClient" 
                        className="text-primary text-center my-auto">ADD A CLIENT</Link>
                  </div>
               </div>
            </div>
            }
            
         </div>
         </div>
      </div>
   );
}
 
export default RentBilling