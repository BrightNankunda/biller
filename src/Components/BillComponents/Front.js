import React, {useState} from 'react';
import {Row, Button} from 'reactstrap'
 
const Front = ({onSetProperty, onRental}) => {

   const [propertyType, setPropertyType] = useState('')


   const setProperty = (propertyType) => {
      setPropertyType(propertyType)
      onSetProperty(propertyType)
   }

   return (
      <Row className="my-2">
         <div className="container">
            <div className="d-flex justify-content-center">
               <Button color="danger" className="mr-2">Back</Button>
               <Button color="primary"
               name="land" 
               value={propertyType}
               onClick={() => setProperty('land')}
               className="mr-2" >Land</Button>

               <Button color="primary" className=""
               value={propertyType} name="rent" onClick={()=>setProperty('rent')} 
               >Rent</Button>
            </div>
         </div>
      </Row>
   );
}
 
export default Front;