import React from 'react';
import {Row, Button } from 'reactstrap' 

const BillData = ({total, onSaveBill}) => {
   
   const saveBill = () => {
      onSaveBill()
   }

   return (
      <Row>
         <div className="container">
            <h4 className="text-center">{total}</h4>
            <div className="d-flex justify-content-center">
               <Button outline color="primary" onClick={saveBill} className="">Save Bill</Button>
            </div>
         </div>
      </Row>
   );
}
 
export default BillData;