import React, { useEffect, useState } from 'react';
import { ArrowLeft} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
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

   const dispatch = useDispatch()
   const propertyType = 'RENT'

   const {loading, newBill, redirectBillCreator} = useSelector(state => state.newBill)
   console.log('RENT BILLING', 'NEW BILL FROM RENT BILLING', newBill, 'loading', loading, 'REDIRECT CREATOR', redirectBillCreator)

   useEffect(() => {
      dispatch(FetchClients())
      return () => {
         // cleanup
      }
   }, [])

   const {loading: loadingClients, clients} = useSelector(state => state.clients)

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
      if(parseInt(rentalType) === 1) {
            //RACK RENT
            if(parseInt(advocate) === 1) {
               //PREPARING ADVOCATE
               if(parseInt(landValue) < 10000000) {
                  if(parseInt(registered) === 1) {
                     const total = parseInt(landValue) *  0.15
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered, total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = parseInt(landValue) *  0.15 + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered, total}))
                     // THEN DISPATCH
                  }
               } else if(parseInt(landValue) < 20000000) {
                 if(parseInt(registered) === 1) {
                     const total = parseInt(landValue) *  0.1
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered, total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = parseInt(landValue) *  0.1 + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered, total}))
                     // THEN DISPATCH
                  }

               } else {
                  if(parseInt(registered) === 1) {
                        const total = parseInt(landValue) *  0.05
                        setTotal(total)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered, total}))
                        // THEN DISPATCH
                     } else if(parseInt(registered) === 2) {
                        const total = parseInt(landValue) *  0.05 + 100000
                        setTotal(total)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                        // THEN DISPATCH
                     }
                  }
            } else if(parseInt(advocate) === 2) {
               if(parseInt(landValue) < 10000000) {
                  if(parseInt(registered) === 1) {
                     const total = (parseInt(landValue) *  0.15 * 1.5)
                     if(total < 100000) {
                        setTotal(100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } else {

                        setTotal(total)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } 
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = (parseInt(landValue) *  0.15 * 1.5) 
                     if(total < 100000) {
                        setTotal(100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } else {

                        setTotal(total + 100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     }
                     // THEN DISPATCH
                  }
               } else if(parseInt(landValue) < 20000000) {
                  if(parseInt(registered) === 1) {
                     const total = (parseInt(landValue) *  0.1 * 1.5)
                     if(total < 100000) {
                        setTotal(100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } else {

                        setTotal(total)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } 
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = (parseInt(landValue) *  0.1 * 1.5) 
                     if(total < 100000) {
                        setTotal(100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } else {

                        setTotal(total + 100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     }
                     // THEN DISPATCH
                  }
               } else {
                  if(parseInt(registered) === 1) {
                     const total = (parseInt(landValue) *  0.05 * 1.5)
                     if(total < 100000) {
                        setTotal(100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } else {

                        setTotal(total)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } 
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = (parseInt(landValue) *  0.05 * 1.5) 
                     if(total < 100000) {
                        setTotal(100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     } else {

                        setTotal(total + 100000)
                        dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     }
                     // THEN DISPATCH
                  }
               }
            }
         }else if(parseInt(rentalType) === 2) {
            //GROUND RENT
            if(parseInt(advocate) === 23) {
               //PREPARING ADVOCATE
               if(parseInt(landValue) < 1500000) {
                  if(parseInt(registered) === 1) {
                     const total = parseInt(landValue) *  0.3
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = parseInt(landValue) *  0.3 + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  }
               } else if(parseInt(landValue) < 4500000) {
                  if(parseInt(registered) === 1) {
                     const r1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const r3 = (r2 * 0.05)
                     const total = r1 + r3
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const r1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const r3 = (r2 * 0.05)
                     const total = r1 + r3 + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  }

               } else {
                  if(parseInt(registered) === 1) {
                     if(parseInt(registered) === 1) {
                     const rt1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const rt2 = r2 * 0.05 
                     const r3 = parseInt(landValue - 4500000)
                     const rt3 = r3 * 0.02
                     const total = rt1 + rt2 + rt3
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const rt1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const rt2 = r2 * 0.05 
                     const r3 = parseInt(landValue - 4500000)
                     const rt3 = r3 * 0.02
                     const total = rt1 + rt2 + rt3 + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  }
               }
            }
            }else if(parseInt(advocate) === 24) {
               if(parseInt(landValue) < 1500000) {
                  if(parseInt(registered) === 1) {
                     const total = parseInt(landValue) *  0.3 * 0.5
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const total = parseInt(landValue) *  0.3 * 0.5 + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  }
               } else if(parseInt(landValue) < 4500000) {
                  if(parseInt(registered) === 1) {
                     const r1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const r3 = (r2 * 0.05)
                     const total = ((r1 + r3) * 0.5)
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const r1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const r3 = (r2 * 0.05)
                     const total = ((r1 + r3) * 0.05) + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  }

               } else {
                  if(parseInt(registered) === 1) {
                     const rt1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const rt2 = r2 * 0.05 
                     const r3 = parseInt(landValue - 4500000)
                     const rt3 = r3 * 0.02
                     const total = ((rt1 + rt2 + rt3) * 0.5)
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  } else if(parseInt(registered) === 2) {
                     const rt1 = 1500000 * 0.3
                     const r2 = parseInt(landValue) - 1500000
                     const rt2 = r2 * 0.05 
                     const r3 = parseInt(landValue - 4500000)
                     const rt3 = r3 * 0.02
                     const total = ((rt1 + rt2 + rt3) * 0.5) + 100000
                     setTotal(total)
                     dispatch(SaveBill({clientId, propertyType, landValue,rentalType,scale,advocate,registered,total}))
                     // THEN DISPATCH
                  }
               }
            }
      }
   }

   const submitHandler = (e) => {
      e.preventDefault();
      calculate()
   }

   const goBack = () => {
      props.history.goBack()
   }
   
   return (
      <div>
         <AppNavbar />
         <div className="d-flex">
            <div className="col-lg-3 blue">
               <SideBar />
            </div>
      
            <div className="w-100 bg-light col-lg-9 ">
            <div className="bg-white w-120 py-2 mx-2 d-flex justify-content-between">
               <ArrowLeft onClick={() => goBack()} className="cursor-pointer my-auto two-times mx-2"/>
               <h2 className="text-center">RENT SCHEDULE</h2>
               <h1></h1>
            </div>
            <form onSubmit={submitHandler}>
               {!props.match.params.clientId && <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
                  <div className="d-flex flex-col m-2">
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

               <div className="d-flex advanced-input-wrapper flex-col w-90 m-2">
                  <div className="d-flex flex-col m-2">
                     <select type="select" className="bill-input px-2" id="rental" 
                        value={rentalType}
                        onChange={(e) => setRentalType(e.target.value)}
                        name="rental">
                        <option disabled value="">CHOOSE RENT TYPE</option>
                        <option value="1">Rack rent means rent representing the value of the land and buildings</option>
                        <option value="2">Ground rent means rent representing the value of the land without buildings on it</option>
                     </select>
                     
                  </div>
               </div>
               
               <div className="advanced-input-wrapper m-2 w-90 my-3">
                  <div className="d-flex flex-col m-2">
                     <select type="select" 
                     className="bill-input px-2" 
                     value={advocate}
                     id="advocate" onChange={(e) => setAdvocate(e.target.value)}>
                        <option disabled value="">CHOOSE AN ADVOCATE</option>
                        <option value="1">Vendor's Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance</option>
                        <option value="2">Purchase's Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance</option>
                        <option value="3">Mortgagor's Advocate: For deducting title to freehold or lease property, perusing mortagage and completing</option>
                        <option value="4">Mortgagee's Advocate: For investigating title to freehold or lease hold property and completing</option>
                     </select>
                  </div>
               </div>
               <div className="advanced-input-wrapper w-90 m-2">
                  <div className="d-flex flex-col m-2">
                     <select type="select" 
                     className="bill-input px-2" 
                     id="scale" 
                     value={scale}
                     onChange={(e) => setScale(e.target.value)}>
                        <option disabled value="">CHOOSE SCALE TYPE</option>
                        <option value="1">Scale of charges on sales, purchases, mortgages and debentures</option>
                        <option value="2">Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered</option>
                     </select>
                  </div>
               </div>
               <div className="advanced-input-wrapper m-2 w-90 my-3">
                  <div className="d-flex m-2">
                     <h4 className="mx-3 my-auto">IS LAND REGISTERED?</h4>
                     <div className="col-lg-3 d-flex justify-content-between bg-light p-1">
                        <h4 className="lead land-registration-choice bg-white ml-1 cursor-pointer p-2" onClick={() => setRegistered('1')}>YES</h4>
                        <h4 className="lead land-registration-choice bg-white mr-1 cursor-pointer p-2" onClick={() => setRegistered('2')}>NO</h4>
                     </div>
                  </div>
               </div>
               <div className="advanced-input-wrapper m-2 my-3 w-90">
                  <div className="d-flex justify-content-between">
                     <h4 className="mx-3">INPUT VALUE OF LAND</h4>
                     <input type="number"
                     value={landValue}
                     onChange={(e) => setLandValue(e.target.value)}
                     className="bill-input col-lg-7" 
                     placeholder="ENTER LAND VALUE"/>
                  </div>
               </div>
               <div className="d-flex justify-content-between m-2">
                  <button className="btn reset-btn py-2 px-3 bg-white">RESET</button>
                  <button className="btn submit-btn py-2 px-3 bg-white">SUBMIT</button>
               </div>
            </form>
            
         </div>
         </div>
      </div>
   );
}
 
export default RentBilling