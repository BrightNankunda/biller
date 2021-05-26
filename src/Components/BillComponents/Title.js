import React, {useState, useEffect} from 'react';
 
const Title = ({propertyType, scaleHeading, advocateHeading}) => {
   const [scaleHeader, setScaleHeader] = useState(null)
   const [advocateHeader, setAdvocateHeader] = useState(null)
   useEffect(() => {
      if(scaleHeading == 1) {
         setScaleHeader('Scale of charges on sales, purchases, mortgages and debentures')
      } else if (scaleHeading == 2) {
         setScaleHeader('Scale of charges for commission on sales, purchases and loans affecting land registered in the land titles registry or unregistered')
      }
      return () => {
         // cleanup
      }
   }, [scaleHeading])

   useEffect(() => {
      if(advocateHeading == 1) {
         setAdvocateHeader('Vendor\'s Advocate: For deducting title to freehold or leasehold property and perusing and completing conveyance')
      } else if (advocateHeading == 2) {
         setAdvocateHeader('Purchase\'s Advocate: For investigating title to freehold or leasehold property and preparing and completing conveyance')
      } else if (advocateHeading == 3) {
         setAdvocateHeader('Mortgagor\'s Advocate: For deducting title to freehold or lease property, perusing mortagage and completing')
      } else if (advocateHeading == 4) {
         setAdvocateHeader('Mortgagee\'s Advocate: For investigating title to freehold or lease hold property and completing')
      }
      return () => {
         // cleanup
      }
   }, [advocateHeading])
   return (
      <div className="container">
         <div className="">
            <h3 className="text-center text-succsess">{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</h3>
            <h4 className="text-center">{scaleHeader}</h4>
            <h5 className="text-center">{advocateHeader}</h5>
         </div>
      </div>
   );
}
 
export default Title;