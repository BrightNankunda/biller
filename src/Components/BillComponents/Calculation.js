import React, {useState, useEffect} from 'react'
import {Row, Label, Input, Form, FormGroup, Button, InputGroup, InputGroupAddon} from 'reactstrap'

const Calculation = ({calculate, onCalculate, scale}) => {

   //STATE
   const [landValue, setLandValue] = useState('')
   const [registered, setRegistered] = useState('')
   const [showRegistered, setShowRegistered] = useState(null)

   useEffect(() => {
      checkedRegisteredStatus()
      return () => {
         // cleanup
      }
   }, [scale])

   //FUNCTIONS
   const handleSubmit = (e) => {
      e.preventDefault();
      onCalculate(landValue, registered)  
   }

   const checkedRegisteredStatus = () => {
      return (parseInt(scale) === 1) ? setShowRegistered(true) : setShowRegistered(false) 
   }

   //COMPONENTS
   return ( 
      <div>
         <Row className="my-2 ">
            <div className="container col-6">
            
            <Form onSubmit={handleSubmit}>

               {showRegistered && <FormGroup>
                  <Label for="registered">Property Registration</Label>
                  <Input type="select" id="registered" 
                     name="registered" value={registered} 
                     onChange={(e)=>setRegistered(e.target.value)}>
                     
                     <option disabled value="">Registration Status</option>  
                     <option value="1">Registered</option> 
                     <option value="2">Not Registered</option>
                  </Input>
               </FormGroup> }

               <FormGroup>
                  <Label for="landValue">Value of Land</Label>
                  <InputGroup>
                     <InputGroupAddon addonType="prepend">UGX:</InputGroupAddon>
                     <Input placeholder="Value of land" 
                        min={100000} max={1000000000} type="number" 
                        id="landValue" 
                        value={landValue}
                        onChange={(e) => setLandValue(e.target.value)}
                        name="landValue" />
                  </InputGroup>
                  </FormGroup>

                  <div className="d-flex justify-content-between">
                     <Button outline color="secondary" className="">Cancel</Button>
                     <Button color="primary" type="submit" className="">Calculate</Button>
                  </div>
               </Form>

            </div>
         </Row>
      </div>
    );
}
 
export default Calculation;