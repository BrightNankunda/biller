import React from 'react';
 
const Btns = () => {
   return (
      <div className="col-12 col-lg-12  my-4 bg-light w-100">
         <div className="d-flex justify-content-between">
            <button className="bill-reset-btn px-3 py-2 my-1">RESET</button>
            <button className="bill-btn front-btn px-3 py-2 my-1">NEXT</button>
         </div>
      </div>
   );
}
 
export default Btns;