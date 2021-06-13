import React, { useState } from 'react';
import {Row, Label, Input, FormGroup, Button} from 'reactstrap'
 
const Scale = ({onScale}) => {

   //STATE
   const [scale, setScale] = useState('')
   const [options, setOptions] = useState([
      {value: '', disabled: true, type: 'Select the scale'},
      {value: '1', disabled: false, type: 'Scale of charges on sales, purchases, mortgages and debentures'}, 
      {value: '2', disabled: false, type: 'Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered'}
   ])

   //FUNCTIONS
   const onSetScale = () => {
      
      onScale(scale)
   }
   
   return (
      <Row className="my-2">
         <div className="container col-6">
            <FormGroup>
               <Label for="scale">Scale</Label>
               <Input type="select" id="scale" className="bill-input" 
               name="scale" value={scale} 
               onChange={(e)=>setScale(e.target.value)}>
                  {
                     options.map(option => (
                        <option disabled={option.disabled} value={option.value} key={option.value}>{option.type}</option>
                     ))
                  }
               </Input>
            </FormGroup>

            <div className="d-flex justify-content-between">
               <Button outline color="secondary" className="">Cancel</Button>
               <Button color="primary" onClick={onSetScale} className="ml-2">Next</Button>
            </div>
         </div>
      </Row>
      
   );
}
 
export default Scale;