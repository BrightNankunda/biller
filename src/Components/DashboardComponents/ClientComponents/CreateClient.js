import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateNewClient } from '../../../Actions/ClientActions';
 
const CreateClient = () => {

   const [clientName, setClientName] = useState('')
   const dispatch = useDispatch()
   const submitHandler = (e) => {

      e.preventDefault();
      if(clientName.trim() === '') return;

      dispatch(CreateNewClient({clientName}))
   }

   return (
      <div className="col-lg-12 my-2" style={{"min-height" :"100vh"}}>
         <div className="bg-light w-100 rounded border">
            <div className="client-header my-2">
               <h3 className="text-center">CLIENTS INFORMATION</h3>
            </div>
            <div className="client-body my-auto">
               <form className="w-100 my-4 p-4" onSubmit={submitHandler}>
                  <div className="form-group mt-2">
                     <label htmlFor="rental">Rental Type</label>
                     <input type="text" 
                     placeholder="Add Client Name"
                     className="bill-input w-100 px-2" id="rental" 
                     value={clientName}
                     onChange={(e) => setClientName(e.target.value)}
                     name="rental"/>
                  </div>
                  <div className="d-flex justify-content-center my-5">
                     <button type="submmit" 
                     className="bill-btn submit ml-2 py-2 px-3 next">Submit</button>
                  </div>
               </form>
            </div>
            <div>

            </div>
         </div>
      </div>

   );
}
 
export default CreateClient;