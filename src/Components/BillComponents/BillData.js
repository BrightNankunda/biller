import React, {useEffect} from 'react';
import {Row, Button } from 'reactstrap' 

const BillData = ({total, onSaveBill}) => {

   useEffect(() => {
      console.log('BillData component says', 'total')
      return () => {
         // cleanup
      }
   })

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