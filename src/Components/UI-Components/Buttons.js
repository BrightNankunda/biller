import React from 'react';
import ButtonComponent from './Sub-Components/ButtonComponent';
 
const Buttons = () => {
   return (
      <div className="w-100">
         <div className="d-flex flex-row">
            <ButtonComponent bootstrapClasses="btn btn-danger m2" text="Btn Danger"/>
            <ButtonComponent bootstrapClasses="btn btn-primary" text="Primary"/>
            <button className="btn custom-green-border btn-success">Bootstrapped</button>
            <button className="custom-blue-button">Cutom Blue</button>
            <button className="custom-green-button">Custom Green</button>
            <button className="custom-green-bordered-button">Customer Green Border</button>
         </div>
         
      </div>
   );
}
 
export default Buttons;