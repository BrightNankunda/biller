import React, {useState} from 'react'
import {Row, Label, Input, Form, FormGroup, Button, InputGroup, InputGroupAddon} from 'reactstrap'

const Calculation = ({calculate, onCalculate, total}) => {

   //STATE
   const [landValue, setLandValue] = useState("")

   //FUNCTIONS
   const calc = (e) => {

      e.preventDefault();
      onCalculate(landValue)
      
   }
  

   //COMPONENTS
   return ( 
      <div>
         <Row className="my-2 ">
         <div className="container col-6">
         
         <Form>
            <FormGroup>
               <Label for="landValue" size="sm">Value of Land</Label>
               <InputGroup>
                  <InputGroupAddon addonType="prepend">UGX:</InputGroupAddon>
                  <Input placeholder="Value of land" 
                     min={100000} max={1000000000} type="number" 
                     id="landValue" 
                     value={landValue}
                     onChange={(e) => setLandValue(e.target.value)}
                     name="landValue" />

                  <InputGroupAddon addonType="append">
                     <Button color="primary" onClick={calc} className="">Calculate</Button>
                  </InputGroupAddon>
               </InputGroup>
               </FormGroup>
            </Form>
         

            {calculate}

            <div className="d-flex justify-content-between">
               <Button outline color="secondary" className="">Cancel</Button>
               
            </div>
         </div>
      </Row>
      </div>
    );
}
 
export default Calculation;