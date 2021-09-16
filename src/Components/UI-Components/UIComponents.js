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
      <div className=" fluid-container" style={{minHeight: 95 + 'vh'}}>
         <h4 className="text-center text-primary border-bottom mt-2">UI COMPONENTS</h4>
         <div className="w-100 my-3">
            <h5 className="text-center">NAV BARS</h5>
            <Navbars />
         </div>
         <div className="w-100 my-3 bg-success">
            <h5 className="text-center">SEARCH FORMS</h5>
            <SearchForms />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">SIDE BARS</h5>
            <SideBars />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">FORMS</h5>
            <Forms />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">TABLES</h5>
            <Tables />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">BUTTONS</h5>
            <Buttons />
         </div>
         <div className="w-100 my-3">
            <h5 className="text-center">MODALS</h5>
            <Modals />
         </div>
      </div>
   );
}
  
export default UIComponents;