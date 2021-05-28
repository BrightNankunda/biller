import React, { useState} from 'react';
import {Row, Label, Input, FormGroup, Button} from 'reactstrap'
 
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
      <Row className="my-2">
         <div className="container col-6">
            <FormGroup>
               <Label for="rental">Rental Type</Label>
               <Input type="select" id="rental" 
               value={rent}
               onChange={(e) => setRent(e.target.value)}
               name="rental"
               >
                  {
                     options.map(option => (
                        <option disabled={option.disabled} value={option.value} key={option.value}>{option.type}</option>
                     ))
                  }
               </Input>
            </FormGroup>

            <div className="d-flex justify-content-between">
               <Button outline color="secondary" className="">Cancel</Button>
               <Button color="primary" onClick={setRentalType} className="ml-2">Next</Button>
            </div>
         </div>
      </Row>
      
   );
}
 
export default Rental;