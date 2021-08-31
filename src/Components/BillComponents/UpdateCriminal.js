import React from 'react';
 
const UpdateCriminal = (props) => {
   return (
      <div>
      {props.match.params.criminalId}
         UpdateCriminal
      </div>
   );
}
 
export default UpdateCriminal;