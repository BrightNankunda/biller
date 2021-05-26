import React from 'react';
import {Row, Button } from 'reactstrap' 

const BillData = ({total}) => {
   return (
      <Row>
         <div>
            <h4 className="text-center">{total}</h4>
            <div className="d-flex justify-content-center">
               <Button outline color="primary" className="">Save Bill</Button>
            </div>
         </div>
      </Row>
   );
}
 
export default BillData;