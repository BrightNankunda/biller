import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UpdateSingleClient, FetchSingleClient } from '../../../Actions/ClientActions';
import AppNavbar from '../../AppNavbar';
import SideBar from '../../BillComponents/SideBar';
import ClientsLink from './ClientsLink';
 
const CreateClient = (props) => {
   const id = props.match.params.clientId
   
   const {loading, client} = useSelector(state => state.singleClient)
   console.log('LOADING', loading, 'CLIENT', client)

   const [firstName, setFirstName] = useState('')
   const [middleName, setMiddleName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
   const [occupation, setOccupation] = useState('')
   const [address, setAddress] = useState('')

   useEffect(() => {
      if(!loading && client !== null) {
         setFirstName(client.firstName)
         setMiddleName(client.middleName)
         setLastName(client.lastName)
         setEmail(client.email)
         setPhoneNumber(client.phoneNumber)
         setOccupation(client.occupation)
         setAddress(client.address)
      } 
      return () => {
         // cleanup
      }
   }, [props.match.params.clientId])

   const dispatch = useDispatch()

   const {loading: loadingUpdate, message, redirectUpdator} = useSelector(state => state.updatedClient)
   console.log('LOADING UPDATED CLIENT', loadingUpdate, 'UPDATED CLIENT MESSAGE', message, 'REDIRECT UPDATEOR ', redirectUpdator)

   useEffect(() => {
      if(redirectUpdator) {
         props.history.push(`/reports/client/${client._id}`)
      }
      console.log('LOADING UPDATE CLIENT', loading, 'UPDATED CLIENT', client)
      return () => {
         // cleanup
      }
   }, [redirectUpdator])


   useEffect(() => {
      dispatch(FetchSingleClient(props.match.params.clientId))
      return () => {
         // cleanup
      }
   }, [props.match.params.clientId])

   const goBack = () => {
      props.history.goBack()
   }


   const submitHandler = (e) => {

      e.preventDefault();
      if(firstName.trim() === '' && middleName.trim() === '' && lastName.trim() === '' && email.trim() === '' && phoneNumber.trim() === '' && occupation.trim() === '' && address.trim() === '') return;
      dispatch(UpdateSingleClient({id, firstName, lastName, middleName, email, phoneNumber, occupation, address}))
   }

   return (
      <div>
         <AppNavbar />
      
      <div className="d-flex">
         <div className="col-lg-3 blue">
            <SideBar />
         </div>

         <div className="col-lg-9 clientScreen full-height">

         <div className="clientScreen w-100 rounded border">
            <div className="client-header my-2 d-flex justify-content-between">
               <button className="btn btn-primary" onClick={goBack}>BACK</button>
               <h3 className="text-center">UPDATE CLIENTS INFORMATION</h3>
               <h4></h4>
            </div>

            {loading && 
               <div className="w-100">
                  <div className="d-flex justify-content-center my-auto align-content-center">
                     <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                  </div>
               </div>
            }
            <div className="client-body my-auto">
               {client && !loading && <form className="w-100 my-4 p-4" onSubmit={submitHandler}>

                  <div className="col-lg-10 d-flex justify-content-center form-group mt-2 d-flex mx-auto">
                     <label htmlFor="firstName" 
                     className="col-3 my-auto bill-sm-label">FIRST NAME</label>
                     <input type="text" 
                     placeholder="Add First Name"
                     className="bill-sm-input col-6 px-2" id="firstName" 
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     name="firstName"/>
                  </div>

                  <div className="col-lg-10 d-flex justify-content-center form-group mt-2 d-flex mx-auto">
                     <label htmlFor="middleName" 
                     className="col-3 my-auto bill-sm-label">MIDDLE NAME</label>
                     <input type="text" 
                     placeholder="Add Middle Name"
                     className="bill-sm-input px-2 col-6" id="middleName" 
                     value={middleName}
                     onChange={(e) => setMiddleName(e.target.value)}
                     name="middleName"/>
                  </div>

                  <div className="col-lg-10 d-flex justify-content-center form-group mt-2 d-flex mx-auto">
                     <label htmlFor="lastName" 
                     className="col-3 my-auto bill-sm-label">LAST NAME</label>
                     <input type="text" 
                     placeholder="Add Last Name"
                     className="bill-sm-input px-2 col-6" id="lastName" 
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     name="lastName"/>
                  </div>

                  <div className="col-lg-10 d-flex justify-content-center form-group mt-2 d-flex mx-auto">
                     <label htmlFor="email" 
                     className="col-3 my-auto bill-sm-label">EMAIL</label>
                     <input type="email" 
                     placeholder="Add Email"
                     className="bill-sm-input px-2 col-6" id="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     name="email"/>
                  </div>

                  <div className="col-lg-10 d-flex justify-content-center form-group mt-2 d-flex mx-auto">
                     <label htmlFor="phoneNumber" 
                     className="col-3 my-auto bill-sm-label">PHONE NUMBER</label>
                     <input type="text" 
                     placeholder="Add Phone Number"
                     className="bill-sm-input px-2 col-6" id="phoneNumber" 
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     name="phoneNumber"/>
                  </div>

                  <div className="col-lg-10 d-flex justify-content-center form-group mt-2 d-flex mx-auto">
                     <label htmlFor="occupation" 
                     className="col-3 my-auto bill-sm-label">OCCUPATION</label>
                     <input type="text" 
                     placeholder="Add Occupation"
                     className="bill-sm-input px-2 col-6" id="occupation" 
                     value={occupation}
                     onChange={(e) => setOccupation(e.target.value)}
                     name="occupation"/>
                  </div>

                  <div className="col-lg-10 d-flex justify-content-center  form-group mt-2 d-flex mx-auto">
                     <label htmlFor="address" 
                     className="col-3 my-auto bill-sm-label">ADDRESS</label>
                     <input type="text" 
                     placeholder="Add Address"
                     className="bill-sm-input px-2 col-6" id="address" 
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     name="address"/>
                  </div>

                  <div className="d-flex justify-content-center my-5 col-lg-7 mx-auto">
                     <button type="submmit" 
                     className="bill-btn submit ml-2 py-2 px-3 next">UPDATE</button>
                  </div>
               </form> }
               <ClientsLink />
            </div>
            <div>

            </div>
            </div>
         </div>
      </div>
      </div>

   );
}
 
export default CreateClient;