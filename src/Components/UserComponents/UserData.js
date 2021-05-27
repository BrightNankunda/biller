import React from 'react';
import { Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserData = (props) => {

  return (
    <Row>
      <Form className="col-8 my-2 mx-auto border rounded">

        <FormGroup>
          <Label for="exampleEmail" size="sm">Email</Label>
          <Input type="email" name="email" bsSize="sm" id="exampleEmail" placeholder="Placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword" size="sm">Password</Label>
          <Input type="password" name="password" bsSize="sm" id="examplePassword" placeholder="Placeholder" />
        </FormGroup>

        <div className="d-flex justify-content-center my-2">
          <Button color="primary"  className="" outline>Submit</Button>
        </div>

      </Form>
    </Row>
  );
}

export default UserData;