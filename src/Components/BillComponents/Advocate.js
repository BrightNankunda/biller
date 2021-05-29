import React, {useEffect, useState} from 'react';
import {Row, Label, Input, FormGroup, Button} from 'reactstrap'
 
const Advocate = ({onAdvocate, onCancelAdvocate, propertyType, rentalType}) => {

   //STATE
   const [advocate, setAdvocate] = useState('')

   useEffect(() => {
      console.log('Advocate component', rentalType, propertyType)
      if(propertyType === 'rent') {
         setOptions([{value: '', disabled: true, name: 'Select The advocate\'s Regard'},
            {value: '21', disabled: false, name: 'An advocate for preparing and perusing'},
            {value: '22', disabled: false, name: 'An advocate for perusing and completing'},
         ])
      }
      return () => {
         // cleanup
      }
   }, [propertyType])

   const [options, setOptions] = useState([
      {value: '', disabled: true, name: 'Select The advocate\'s Regard'},
      {value: '1', disabled: false, 
      name: 'Vendor\'s Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance'},
      {value: '2', disabled: false, name: 'Purchase\'s Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance'},
      {value: '3', disabled: false, name: 'Mortgagor\'s Advocate: For deducting title to freehold or lease property, perusing mortagage and completing'},
      {value: '4', disabled: false, name: 'Mortgagee\'s Advocate: For investigating title to freehold or lease hold property and completing'}
   ])

   //FUNCTIONS
   const onSetAdvocate = () => {
      onAdvocate(advocate)
   }

   const setCancelAdvocate = () => {
      onCancelAdvocate()
   }

   //COMPONENTS
   return (
      <Row className="my-2">
         <div className="container col-6">
            <FormGroup>
               <Label for="advocate">Advocate</Label>
               <Input type="select" id="advocate" name="advocate" 
                  value={advocate} onChange={(e) => setAdvocate(e.target.value)}
                  >
                  {options.map(option => (
                     <option disabled={option.disabled} key={option.value} value={option.value}>{option.name}</option>
                  ))}
               </Input>
            </FormGroup>

            <div className="d-flex justify-content-between">
               <Button outline color="secondary" onClick={setCancelAdvocate} className="">Cancel</Button>
               <Button color="primary" onClick={onSetAdvocate} className="ml-2">Next</Button>
            </div>
         </div>
      </Row>
   );
}
 
export default Advocate;