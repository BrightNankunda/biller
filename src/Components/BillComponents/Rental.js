import React, { useState} from 'react';
import {Button} from 'reactstrap'
 
const Rental = ({onSetRental}) => {

   //STATE
   const [rent, setRent] = useState('')
   const [options, setOptions] = useState([
      {value: '', disabled: true, type: 'Select Rental Type'},
      {value: '1', disabled: false, type: 'Rack rent means rent representing the value of the land and buildings'}, 
      {value: '2', disabled: false, type: 'Ground rent means rent representing the value of the land without buildings on it'}
   ])

   //FUNCTIONS
   const setRentalType = () => {
      onSetRental(rent)
   }
   
   return (
      <div className="rental my-2">
         <div className="container col-7">
            <div className="form-group mt-2">
               <label htmlFor="rental">Rental Type</label>
               <select type="select" className="bill-input px-2" id="rental" 
               value={rent}
               onChange={(e) => setRent(e.target.value)}
               name="rental"
               >
                  {
                     options.map(option => (
                        <option disabled={option.disabled} value={option.value} key={option.value}>{option.type}</option>
                     ))
                  }
               </select>
            </div>

            <div className="d-flex justify-content-between my-5">
               <button className="bill-btn py-2 px-3 cancel">Cancel</button>
               <button onClick={setRentalType} className="bill-btn ml-2 py-2 px-3 next">Next</button>
            </div>
         </div>
      </div>
      
   );
}
 
export default Rental;