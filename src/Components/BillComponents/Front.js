import React, {useState} from 'react';
import {Row, Button} from 'reactstrap'
 
const Front = ({onSetProperty, onRental}) => {

   const [propertyType, setPropertyType] = useState('')


   const setProperty = (propertyType) => {
      setPropertyType(propertyType)
      onSetProperty(propertyType)
   }

   return (
      <Row className="my-2 w-100">
         <div className="container">
            <div className="d-flex justify-content-center my-3">
               <button className="bill-btn front-back-btn mr-2 px-3">Back</button>
               <button
               name="land" 
               value={propertyType}
               onClick={() => setProperty('land')}
               className="bill-btn front-btn mr-2 px-3" >Land</button>

               <button className="bill-btn front-btn px-3"
               value={propertyType} name="rent" onClick={()=>setProperty('rent')} 
               >Rent</button>
            </div>
         </div>
      </Row>
   );
}
 
export default Front;