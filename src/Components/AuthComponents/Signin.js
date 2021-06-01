import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default function Signin() {
   return (
      <div className="row d-flex justify-content-center bg-primary" style={{"min-height" :"90vh"}}>
         <Form className="my-auto bg-light rounded p-2" style={{"width": "60vw"}}>
            <FormGroup>
               <Label for="exampleEmail">Email</Label>
               <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
               <Label for="examplePassword">Password</Label>
               <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
               <Label for="exampleSelect">Select</Label>
               <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </Input>
            </FormGroup>
            <FormGroup>
               <Label for="exampleSelectMulti">Select Multiple</Label>
               <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </Input>
            </FormGroup>
            <FormGroup>
               <Label for="exampleText">Text Area</Label>
               <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <div className="d-flex justify-content-center">
               <Button>Submit</Button>
            </div>
            <button class="btn btn-primary" type="button" disabled>
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               <span class="sr-only">Loading...</span>
            </button>
            <button class="btn btn-primary" type="button" disabled>
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">
               </span>
               Loading...
            </button>
         </Form>
      </div>
   )
}
