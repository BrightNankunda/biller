import React from 'react';
import Buttons from './Buttons';
import Forms from './Forms';
import Modals from './Modals';
import Navbars from './Navbars';
import SearchForms from './SearchForms';
import SideBars from './SideBars';
import Tables from './Tables';
 
const UIComponents = () => {
   return (
      <div className="row fluid-container">
         <h5 className="text-center">UI COMPONENTS</h5>
         <div className="w-100">
            <h6 className="text-center">NAV BARS</h6>
            <Navbars />
         </div>
         <div className="w-100">
            <h6 className="text-center">SEARCH FORMS</h6>
            <SearchForms />
         </div>
         <div className="w-100">
            <h6 className="text-center">SIDE BARS</h6>
            <SideBars />
         </div>
         <div className="w-100">
            <h6 className="text-center">FORMS</h6>
            <Forms />
         </div>
         <div className="w-100">
            <h6 className="text-center">TABLES</h6>
            <Tables />
         </div>
         <div className="w-100">
            <h6 className="text-center">BUTTONS</h6>
            <Buttons />
         </div>
         <div className="w-100">
            <h6 className="text-center">MODALS</h6>
            <Modals />
         </div>
      </div>
   );
}
  
export default UIComponents;