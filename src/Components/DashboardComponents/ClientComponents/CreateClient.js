import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateNewClient } from '../../../Actions/ClientActions';
import ClientsLink from './ClientsLink';
 
const CreateClient = () => {

   const [firstName, setFirstName] = useState('')
   const [middleName, setMiddleName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
   const [occupation, setOccupation] = useState('')
   const [address, setAddress] = useState('')

   const dispatch = useDispatch()
   const submitHandler = (e) => {

      e.preventDefault();
      if(firstName.trim() === '' && middleName.trim() === '' && lastName.trim() === '' && email.trim() === '' && phoneNumber.trim() === '' && occupation.trim() === '' && address.trim() === '') return;
      
      dispatch(CreateNewClient({firstName, lastName, middleName, email, phoneNumber, occupation, address}))
   }

   return (
      <div className="col-lg-12 my-2 clientScreen full-height">
         <div className="clientScreen w-100 rounded border">
            <div className="client-header my-2">
               <h3 className="text-center">CLIENTS INFORMATION</h3>
            </div>
            <div className="client-body my-auto">
               <form className="w-100 my-4 p-4" onSubmit={submitHandler}>

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

                  <div className="d-flex justify-content-between my-5 col-lg-7 mx-auto">
                  <button
                     className="bill-reset-btn submit ml-2 py-2 px-3 next">RESET</button>
                     <button type="submmit" 
                     className="bill-btn submit ml-2 py-2 px-3 next">Submit</button>
                  </div>
               </form>
               <ClientsLink />
            </div>
            <div>

            </div>
         </div>
      </div>

   );
}
 
export default CreateClient;