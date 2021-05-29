import React, {useState, useEffect} from 'react';
 
const Title = ({propertyType, scaleHeading, advocateHeading, registered, rentalType}) => {

   const [scaleHeader, setScaleHeader] = useState(null)
   const [advocateHeader, setAdvocateHeader] = useState(null)
   const [registeredHeader, setRegisteredHeader] = useState(null)
   const [rentalHeader, setRentalHeader] = useState(null)

   useEffect(() => {
      if(parseInt(rentalType) === 1) {
         setRentalHeader('Rack Rent')
      } else if(parseInt(rentalType) === 2) {
         setRentalHeader('Ground Rent')
      }
      return () => {
         // 
      }
   }, [rentalType])

   useEffect(() => {
      if((parseInt(scaleHeading) === 1) && (rentalType === null)) {
         setScaleHeader('Scale of charges on sales, purchases, mortgages and debentures')
      } else if ((parseInt(scaleHeading) === 2) && (rentalType === null)) {
         setScaleHeader('Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered')
      }
      return () => {
         // cleanup
      }
   }, [scaleHeading, rentalType])

   useEffect(() => {
      if(parseInt(advocateHeading) === 1) {
         setAdvocateHeader('Vendor\'s Advocate')
      } else if (parseInt(advocateHeading) === 2) {
         setAdvocateHeader('Purchase\'s Advocate')
      } else if (parseInt(advocateHeading) === 3) {
         setAdvocateHeader('Mortgagor\'s Advocate')
      } else if (parseInt(advocateHeading) === 4) {
         setAdvocateHeader('Mortgagee\'s Advocate')
      } else if (parseInt(advocateHeading) === 21) {
         setAdvocateHeader('Advocate for preparing and perusing')
      } else if (parseInt(advocateHeading) === 22) {
         setAdvocateHeader('Advocate for perusing and completing')
      }
      return () => {
         // cleanup
      }
   }, [advocateHeading])

   useEffect(() => {
      if(parseInt(registered) === 1) {
         setRegisteredHeader('Registered')
      } else if(parseInt(registered) === 2) {
         setRegisteredHeader('Not Registered')
      }
      return () => {
         // cleanup
      }
   }, [registered])
   
   return (
      <div className="container">
         <div className="">
            <h3 className="text-center text-success">{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</h3>
            <h4 className="text-center text-primary">{scaleHeader}</h4>
            <h4 className="text-center text-primary">{rentalHeader}</h4>
            <h5 className="text-center text-primary">{advocateHeader}</h5>
            <h5 className="text-center text-primary">{registeredHeader}</h5>
         </div>
      </div>
   );
}
 
export default Title;