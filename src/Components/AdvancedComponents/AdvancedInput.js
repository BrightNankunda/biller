import React from 'react';
 
// selectType ie INPUT OR SELECT input
const AdvancedInput = ({label, type, placeholder, Icon}) => {
   return (
      <div className="d-flex advanced-input-wrapper">
         <div className="form-group">
            <label htmlFor={label}>{capitalize(label)}</label>
            <input type={type} placeholder={placeholder} className="form-control"/>
         </div>
      </div>

   );
}
 
export default AdvancedInput;