import React, {useState, useEffect} from 'react';
 
const Title = ({propertyType, scaleHeading, advocateHeading, registered}) => {

   const [scaleHeader, setScaleHeader] = useState(null)
   const [advocateHeader, setAdvocateHeader] = useState(null)
   const [registeredHeader, setRegisteredHeader] = useState(null)

   useEffect(() => {
      // if(propertyType === 'land') {

      // } else if (propertyType === 'rent') {
      //    if (parseInt(advocateHeading) === 2) {
      //       setScaleHeader('An advocate for preparing and perusing')
      //    } else if (parseInt(advocateHeading) === 2) {
      //       (parseInt(advocateHeading) === 2
      //    }
      // }
      if((parseInt(scaleHeading) === 1) && (propertyType === 'land')) {
         setScaleHeader('Scale of charges on sales, purchases, mortgages and debentures')
      } else if ((parseInt(scaleHeading) === 2) && (propertyType === 'land')) {
         setScaleHeader('Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered')
      } else if((parseInt(advocateHeading) === 1) && (propertyType === 'rent')) {
         setScaleHeader('An advocate for preparing and perusing')
      } else if ((parseInt(advocateHeading) === 2) && (propertyType === 'rent')) {
         setScaleHeader('An advocate for perusing and completing')
      }
      return () => {
         // cleanup
      }
   }, [scaleHeading, propertyType, advocateHeading])

   useEffect(() => {
      if(parseInt(advocateHeading) === 1) {
         setAdvocateHeader('Vendor\'s Advocate')
      } else if (parseInt(advocateHeading) === 2) {
         setAdvocateHeader('Purchase\'s Advocate')
      } else if (parseInt(advocateHeading) === 3) {
         setAdvocateHeader('Mortgagor\'s Advocate')
      } else if (parseInt(advocateHeading) === 4) {
         setAdvocateHeader('Mortgagee\'s Advocate')
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
            <h5 className="text-center text-primary">{advocateHeader}</h5>
            <h5 className="text-center text-primary">{registeredHeader}</h5>
         </div>
      </div>
   );
}
 
export default Title;